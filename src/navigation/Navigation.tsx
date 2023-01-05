import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Login, Main, Layout } from '../components/ui';
import { useAuth } from './../hooks/useAuth';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const { user, token } = useAuth();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        !!user && token
          ? {
              path: '/',
              element: <Main />,
            }
          : {
              path: '/',
              element: <Login />,
            },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Navigation;
