import { useState } from 'react';
import { useFetchAllCategories } from './useFetchAllCategories.tsx';
import { SearchResultsShortList } from './SearchResultsShortList/SearchResultsShortList.tsx';

export const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { data, pending } = useFetchAllCategories({ searchTerm });

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
  };

  return (
    <>
      <input onChange={handleSearchTermChange} value={searchTerm} />

      {!pending && (
        <SearchResultsShortList data={data} searchTerm={searchTerm} />
      )}
    </>
  );
};
