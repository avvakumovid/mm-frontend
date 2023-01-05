import { FC } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Error, Login, Main, Layout } from '../components/ui';
import useAppSelector from './../hooks/useAppSelector';
import { useAuth } from './../hooks/useAuth';

interface NavigationProps {}

const Navigation: FC<NavigationProps> = () => {
  const { isAuth } = useAuth();
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Error />,
      children: [
        isAuth
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
