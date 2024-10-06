import { SearchResultInterface } from './SearchResult.interface.ts';
import { useQueries } from '@tanstack/react-query';

import {fetchListBySearchQuery} from "./fetchListBySearchQuery.ts";

const CATEGORIES: string[] = [
  'films',
  'people',
  'planets',
  'species',
  'starships',
  'vehicles',
];

export const useFetchAllCategories = ({
  searchTerm,
}: {
  searchTerm: string;
}): {
  pending: boolean;
  data: SearchResultInterface[];
} => {
  const { data, pending } = useQueries({
    queries: CATEGORIES.map(category => ({
      queryKey: [category, searchTerm],
      queryFn: () => fetchListBySearchQuery({ searchTerm, category }),
    })),
    combine: results => {
      return {
        data: results
          .map(result => result.data)
          .flat()
          .filter(Boolean),
        pending: results.every(result => result.isPending),
      };
    },
  });

  return { data, pending };
};
