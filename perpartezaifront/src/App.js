import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "./components/Logo";
import Menu from "./components/Menu";


const App = () => {
  return (
    <header className="bg-white  ">
        <Menu className="menu"/>
        <Logo/> 
    </header>
  );
}

export default App;
