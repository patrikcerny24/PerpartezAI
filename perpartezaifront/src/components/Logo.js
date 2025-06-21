import "./Logo.css"
import LogoSrc from "../logos/perpartez_logo_black_figure.png";

const Logo = () => {
    return(
        <img src={LogoSrc} alt="Perparteza Logo černé" className="logo-black" />
    )
}
export default Logo;