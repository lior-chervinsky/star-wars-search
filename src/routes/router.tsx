import { createRouter } from '@tanstack/react-router';
import { categoriesRoute, categoryRoute } from './CategoryRoute.tsx';
import { rootRoute } from './RootRoute.tsx';
import { searchRoute } from './SearchRoute.tsx';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const routeTree = rootRoute.addChildren([
  searchRoute,
  categoriesRoute,
  categoryRoute,
]);

export const router = createRouter({ routeTree });
