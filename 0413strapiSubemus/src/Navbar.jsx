import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import NavLinks from "./NavLinks";
/* tuk pravim taka, che kato mahnem kursora ot butonite (product,
solutions i resources) meniuto, koeto izliza, da se skrie
Ppc kato minem vyrhu meniuto, to ne trqbva da se skriva, no tova se
sluchvashe. Zatova v CSS-a dolu na 2 mesta dobavihme align-self: stretch;,
koeto pravi taka, che goleminata na "zonata" na butonite da se uvelichi
(t.e. da zaemat tezi height: 5rem, zadadeni za navbar-a, koito tuk na
tozi screenshot ne se vizhdat). Vizh videoto, ako ne shvashtash
*/
const Navbar = () => {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">strapi</h3>
        <button className="toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};
export default Navbar;
