import {
  PeopleResult,
  SearchResultInterface,
} from '../SearchPage/SearchResult.interface.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import { CharacterTrigger } from './CharacterModal/CharacterTrigger.tsx';

export const usePeopleTable = ({
  data,
  query,
}: {
  data?: SearchResultInterface;
  query: string;
}) => {
  const queryClient = useQueryClient();

  const deleteCharacter = useMutation({
    mutationFn: (name: string) => {
      return Promise.resolve(name); // API Call
    },

    onSuccess: (name: string) => {
      queryClient.setQueryData(
        ['people', query],
        (existingCharacters: SearchResultInterface): SearchResultInterface => {
          const updatedList = existingCharacters.results.filter(
            character => character.name !== name,
          );
          const updateResults = { ...existingCharacters, results: updatedList };

          return updateResults;
        },
      );
    },
  });

  const editCharacter = useMutation({
    mutationFn: ({
      cellData,
    }: {
      cellData: PeopleResult;
    }) => {
      return Promise.resolve(cellData); // API Call
    },

    onSuccess: (
      updatedCharacter: PeopleResult,
      { index }: { cellData: PeopleResult; index: number },
    ) => {
      queryClient.setQueryData(
        ['people', query],
        (existingCharacters: SearchResultInterface): SearchResultInterface => {
          const updatedList = [...existingCharacters.results];
          updatedList[index] = updatedCharacter;
          const updateResults = { ...existingCharacters, results: updatedList };

          return updateResults;
        },
      );
    },
  });

  const columns = useMemo(
    () => [
      {
        header: 'Name',
        accessorKey: 'name',
      },
      {
        header: 'Gender',
        accessorKey: 'gender',
      },
      {
        header: 'Birth Year',
        accessorKey: 'birth_year',
      },
      {
        accessorKey: 'actions', // Custom column for actions
        header: 'Actions',
        cell: ({ row }) => (
          <div>
            <CharacterTrigger
              onSave={value => editRow(value, row.id)}
              initialValue={row.original}
            >
                Edit ✏️
            </CharacterTrigger>
            <button onClick={() => deleteRow(row.original.name)}>
              Delete ⌫
            </button>
          </div>
        ),
      },
    ],
    [],
  );
  const table = useReactTable({
    columns,
    data: data?.results ?? [],
    getCoreRowModel: getCoreRowModel(),
  });

  const editRow = (cellData: PeopleResult, index: number) => {
    console.log('Editing row:', cellData, ' id:', index);

    editCharacter.mutate({ cellData, index });
  };

  const deleteRow = (name: string) => {
    console.log('Deleting row with name:', name);
    deleteCharacter.mutate(name);
  };

  return { table };
};
