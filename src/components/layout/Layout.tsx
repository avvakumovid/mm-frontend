import { FC, PropsWithChildren, useContext } from 'react';
import { Outlet } from 'react-router';
import { Header } from '../ui';
import '../../styles/_main.scss';
import { ThemeContext } from './../../context/ThemeContext';
interface LayoutProps {}

const Layout: FC<PropsWithChildren<LayoutProps>> = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className={`${theme} flex`}>
      <div className='background wrapper'>
        <Header />
        <button
          onClick={() =>
            setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
          }
          className='text background'
        >
          Switch Theme
        </button>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
