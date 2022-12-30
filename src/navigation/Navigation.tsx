import React, { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Login, Main, Layout } from '../components/ui';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: '/',
          element: <Main />,
        },
        {
          path: 'login/:number',
          element: <Login />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
