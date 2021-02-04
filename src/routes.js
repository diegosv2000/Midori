import React from 'react';
import { Welcome, Search, Lists, Members, MemberData, NotFound } from 'pages';

const routes = [
  {
    path: '/',
    component: () => <Welcome />,
    exact: true,
  },
  {
    path: '/elections',
    component: () => <Search />,
    exact: true,
  },
  {
    path: '/lists',
    component: () => <Lists />,
    exact: true,
  },
  {
    path: '/members',
    component: () => <Members />,
    exact: true,
  },
  {
    path: '/member',
    component: () => <MemberData />,
    exact: true,
  },
  {
    path: '*',
    component: () => <NotFound />,
    exact: true,
  },
];

export default routes;
