import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import { flexRender } from '@tanstack/react-table';
import { usePeopleTable } from './usePeopleTable.tsx';
import { fetchListBySearchQuery } from '../SearchPage/fetchListBySearchQuery.ts';
import { CharacterTrigger } from './CharacterModal/CharacterTrigger.tsx';
import {
  PeopleResult,
  SearchResultInterface,
} from '../SearchPage/SearchResult.interface.ts';

export const PeoplePage = ({ query = '' }: { query: string }) => {
  const queryClient = useQueryClient();

  const { data } = useQuery({
    queryKey: ['people', query],
    queryFn: () =>
      fetchListBySearchQuery({ category: 'people', searchTerm: query }),
  });

  const { table } = usePeopleTable({ data, query });

  const addCharacter = useMutation({
    mutationFn: ({
      cellData,
    }: {
      cellData: PeopleResult;
    }) => {
      return Promise.resolve(cellData);
    },

    onSuccess: (
      updatedCharacter: PeopleResult,
    ) => {
      queryClient.setQueryData(
        ['people', query],
        (existingCharacters: SearchResultInterface): SearchResultInterface => {
          const newList = existingCharacters.results.concat(updatedCharacter);
          const updateResults = { ...existingCharacters, results: newList };

          return updateResults;
        },
      );
    },
  });

  if (!data) {
    return null;
  }

  const handleAddCharacter = value => {
    addCharacter.mutate({ cellData: value });
  };

  return (
    <div>
      People Page! {query}
      <hr />
      <CharacterTrigger onSave={handleAddCharacter}>
        Add +
      </CharacterTrigger>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(
                  (
                    header, // map over the headerGroup headers array
                  ) => (
                    <th key={header.id} colSpan={header.colSpan}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </th>
                  ),
                )}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => {
                return (
                  <td key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
