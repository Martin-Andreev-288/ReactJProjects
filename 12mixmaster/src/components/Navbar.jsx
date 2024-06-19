import { NavLink } from "react-router-dom";
// i sega ako kliknem na home - shte ni otvede do home (kydeto sme i na snimkata), syotvetno about shte ni otvede v about i newsletter shte ni otvede v newsletter
const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};
export default Navbar;

/*
The NavLink component extends the functionality of Link by allowing you to apply styles or classes to the link when it is active (i.e., when the current URL matches the link's target).
This is particularly useful for creating navigation menus where you want to highlight the currently active link.
...
Conclusion
Use Link for basic navigation needs without the need for active state styling.
Use NavLink when you need to style or apply classes to the active link, such as in navigation menus.
*/
