import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { About, Home, NotFound } from './pages';
import { Layout } from './components';

export const router = () =>
  createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <Home />,
          },
          {
            path: '/about',
            element: <About />,
          },
          {
            path: '*',
            element: <NotFound />,
          },
        ],
      },
    ],
    {
      basename: '/First-React-App',
    }
  );
