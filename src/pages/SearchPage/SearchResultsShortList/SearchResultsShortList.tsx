import { Link } from '@tanstack/react-router';
import { SearchResultInterface } from '../SearchResult.interface.ts';

interface SearchResultsShortListParams {
  data: SearchResultInterface[];
  searchTerm: string;
}

export const SearchResultsShortList = ({
  data,
  searchTerm,
}: SearchResultsShortListParams) =>
  data?.map(item => {
    const category = item.searchMetadata.category;

    return (
      <div>
        <h1 key={category}>{category}</h1>
        <ul className="list-none">
          {item.results.slice(0, 3).map(result => (
            <li>{result?.name || result?.title}</li>
          ))}
        </ul>
        <Link
          to={`/categories/${category}`}
          search={prev => ({
            ...prev,
            ...(searchTerm && { q: searchTerm }),
          })}
          className="[&.active]:font-bold"
        >
          View All
        </Link>
        {/*<button onClick={() => handleCategoryClick(category)}>*/}
        {/*  View All*/}
        {/*</button>*/}
      </div>
    );
  });
