import { SearchResultInterface } from './SearchResult.interface.ts';

export const fetchListBySearchQuery = async ({
  category,
  searchTerm,
}: {
  category: string;
  searchTerm?: string;
}): Promise<SearchResultInterface> => {
  const url = `https://swapi.dev/api/${category}?search=${searchTerm}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return { ...data, searchMetadata: { category, searchTerm } };
  } catch (e) {
    console.log('fetchRoomsList Error:', e);
    throw e;
  }
};
