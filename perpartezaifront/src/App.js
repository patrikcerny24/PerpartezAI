import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from 'react-router-dom';
import Menu from './components/Menu.js';



const App = () => {
  return (<>
    <header>
      <Menu></Menu>
    </header>
    <main>
      <Outlet/>
    </main>
    <footer>

    </footer>
    </>
  );
}

export default App;
