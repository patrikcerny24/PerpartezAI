import "./Logo.css"
import LogoSrc from "../logos/perpartez_logo_black_figure.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Logo = () => {
    return(
        <img src={LogoSrc} alt="Perparteza Logo černé" className="logo-black img-circle"/>
    )
}
export default Logo;