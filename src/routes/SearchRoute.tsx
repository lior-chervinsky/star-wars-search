import { createRoute } from '@tanstack/react-router';
import { rootRoute } from './RootRoute.tsx';
import { SearchPage } from '../pages/SearchPage/SearchPage.tsx';

export const searchRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: SearchPage,
});