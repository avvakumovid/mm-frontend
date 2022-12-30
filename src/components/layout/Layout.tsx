import { FC, PropsWithChildren, useContext } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../ui';
import '../../styles/_main.scss';
import { ThemeContext } from './../../context/ThemeContext';
interface LayoutProps {}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`${theme} flex`}>
      <div className='background wrapper'>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
