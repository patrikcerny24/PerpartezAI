import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./components/Logo";
import Menu from "./components/Menu";


const App = () => {
  return (
    <header>
      <div className="container-fluid bg-red">
        <Logo/> 
        <Menu />
      </div>
    </header>
  );
}

export default App;
