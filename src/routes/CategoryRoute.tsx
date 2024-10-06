import { createRoute, Link } from '@tanstack/react-router';
import { rootRoute } from './RootRoute.tsx';
import { PeoplePage } from '../pages/PeoplePage/PeoplePage.tsx';

export const categoriesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/categories',
});

export const categoryRoute = createRoute({
  getParentRoute: () => categoriesRoute,
  path: '$category',
  component: function Category() {
    const { category } = categoryRoute.useParams();
    const { q: searchTerm } = categoryRoute.useSearch();
    if (category !== 'people') {
      return (
        <>
          <div className="p-2">
            Currently only the People page is supported!
          </div>
          <div>Selected Category: {category}</div>
          <Link to="/">Go Back</Link>
        </>
      );
    }
    return <PeoplePage query={searchTerm} />;
  },
});
