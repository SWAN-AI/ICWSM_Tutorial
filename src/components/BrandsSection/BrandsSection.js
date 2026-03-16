import { Container } from "reactstrap";
// Assets
import { ReactComponent as GSU } from "../../assets/img/GSU_1.svg";
import { ReactComponent as Spotify } from "../../assets/img/spotify.svg";


// CSS File
import classes from "./BrandsSection.module.css";
const BrandsSection = () => {
  return (
    <Container className={`${classes.brands} mb-5 mt-4`}>
      <div className="p-5 rounded-3 d-flex gap-4 justify-content-around align-items-center bg-white-99 border-white-95">
        <GSU className={classes["brand-image"]} />
        <Spotify className={classes["brand-image"]} />
      </div>
    </Container>
  );
};

export default BrandsSection;
