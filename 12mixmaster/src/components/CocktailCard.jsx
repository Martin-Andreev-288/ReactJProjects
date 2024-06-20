import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/CocktailCard";
/* renderirat se "kartichkite" na vsichki kokteyli. Ako cyknem na "Details", zasega se
pokazva samo "Cocktail" */
const CocktailCard = ({ image, name, id, info, glass }) => {
  return (
    <Wrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </Wrapper>
  );
};
export default CocktailCard;
