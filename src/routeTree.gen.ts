/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as CategoryRouteImport } from './routes/CategoryRoute'

// Create Virtual Routes

// Create/Update Routes

const AboutLazyRoute = AboutLazyImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route))

const RoutesRoute = RoutesImport.update({
  path: '/routes',
  getParentRoute: () => rootRoute,
} as any)

const RootRouteRoute = RootRouteImport.update({
  path: '/RootRoute',
  getParentRoute: () => rootRoute,
} as any)

const CategoryRouteRoute = CategoryRouteImport.update({
  path: '/CategoryRoute',
  getParentRoute: () => rootRoute,
} as any)

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/CategoryRoute': {
      id: '/CategoryRoute'
      path: '/CategoryRoute'
      fullPath: '/CategoryRoute'
      preLoaderRoute: typeof CategoryRouteImport
      parentRoute: typeof rootRoute
    }
    '/RootRoute': {
      id: '/RootRoute'
      path: '/RootRoute'
      fullPath: '/RootRoute'
      preLoaderRoute: typeof RootRouteImport
      parentRoute: typeof rootRoute
    }
    '/routes': {
      id: '/routes'
      path: '/routes'
      fullPath: '/routes'
      preLoaderRoute: typeof RoutesImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute
  '/CategoryRoute': typeof CategoryRouteRoute
  '/RootRoute': typeof RootRouteRoute
  '/routes': typeof RoutesRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute
  '/CategoryRoute': typeof CategoryRouteRoute
  '/RootRoute': typeof RootRouteRoute
  '/routes': typeof RoutesRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexLazyRoute
  '/CategoryRoute': typeof CategoryRouteRoute
  '/RootRoute': typeof RootRouteRoute
  '/routes': typeof RoutesRoute
  '/about': typeof AboutLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/CategoryRoute' | '/RootRoute' | '/routes' | '/about'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/CategoryRoute' | '/RootRoute' | '/routes' | '/about'
  id: '__root__' | '/' | '/CategoryRoute' | '/RootRoute' | '/routes' | '/about'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute
  CategoryRouteRoute: typeof CategoryRouteRoute
  RootRouteRoute: typeof RootRouteRoute
  RoutesRoute: typeof RoutesRoute
  AboutLazyRoute: typeof AboutLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  CategoryRouteRoute: CategoryRouteRoute,
  RootRouteRoute: RootRouteRoute,
  RoutesRoute: RoutesRoute,
  AboutLazyRoute: AboutLazyRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/CategoryRoute",
        "/RootRoute",
        "/routes",
        "/about"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/CategoryRoute": {
      "filePath": "CategoryRoute.tsx"
    },
    "/RootRoute": {
      "filePath": "RootRoute.tsx"
    },
    "/routes": {
      "filePath": "router.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
