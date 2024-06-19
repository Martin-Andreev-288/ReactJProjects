import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/Navbar";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">MixMaster</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/newsletter" className="nav-link">
            Newsletter
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

/*
ako naprimer imame "logo" (ime na class) i v drug komponent, tova nqma da e problem.
Ako go imame globalno obache, shte e problem.
Name kolizii NE SE sluchvat s drugi komponenti, no s globalni elementi - da. Zatova tr da
vnimavame
*/
