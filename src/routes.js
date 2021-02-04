import React from 'react';
import { Welcome, Search, Lists, Members, MemberData, NotFound } from 'pages';

const routes = [
  {
    path: "/",
    component: <Welcome />,
  },
  {
    path: "/Elecciones",
    component: <Search />,
  },
  {
    path: "/Listas",
    component: <Lists />,
  },
  {
    path: "/Miembros",
    component: <Members />,
  },
  {
    path: "/Miembro",
    component: <MemberData />,
  },,
  {
    path: "*",
    component: <NotFound />,
  },
]

export default routes