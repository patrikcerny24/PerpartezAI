import "./Logo.css"
import LogoSrc from "../logos/perpartez_logo_black_figure.png";
import "bootstrap/dist/css/bootstrap.min.css";

const Logo = () => {
    return(
        <img src={LogoSrc} 
        alt="Perpartez Logo černé"
        className="rounded  float-left img-fluid"
        width = "100"
        height = "100"
        />
    )
}
export default Logo;