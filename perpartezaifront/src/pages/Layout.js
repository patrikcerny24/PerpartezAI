import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import "bootstrap/dist/css/bootstrap.min.css";
const Layout = () => {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Footer content goes here.</p>
      </footer>
    </>
  );
}
export default Layout;
