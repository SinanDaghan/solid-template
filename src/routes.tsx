import { lazy } from 'solid-js';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: lazy(() => import('@pages/Home')),
  },
  {
    path: '*404',
    component: lazy(() => import('@pages/404')),
  },
];

export { routes };
