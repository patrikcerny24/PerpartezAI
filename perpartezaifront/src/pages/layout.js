import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
const Layout = () => {
  return (
    <>
      <header>
        <Menu />
        <h1>Welcome to the Layout Page</h1>
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