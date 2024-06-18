import { useRef } from "react";
import { useGlobalContext } from "./Context";
import sublinks from "./data";
/* pravim taka, che submenu-to da izchezva ot koqto i posoka da izlezem
s mishkata ot nego. Zashtoto predi ne se sluchvashe, kato izlezem s neq
otdolu/vstrani, a otgore syshto se poluchavashe vremenen stranen rezultat.
Izpolzvame useRef, getBoundingClientRect() i clientX i clientY, koito
izvlichame ot event-a */
const Submenu = () => {
  const { pageId, setPageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  /* console.log(currentPage); rezultatyt izliza kato hovernem s
  butona v/u zaglavieto na stranicata. Inache pyrvonachalno e
  undefined
primer s edna ot stranicite (kakvo logva, kato hovernem):
{pageId: 'wmy_WIsDwZwDDZxaz-pp_', page: 'product', links: Array(3)}
  */

  const submenuContainer = useRef(null);

  const handleMouseLeave = (event) => {
    const submenu = submenuContainer.current;
    const { left, right, bottom } = submenu.getBoundingClientRect();
    const { clientX, clientY } = event;

    if (clientX < left - 1 || clientX > right - 1 || clientY > bottom - 1) {
      setPageId(null);
    }
  };
  return (
    <div
      className={currentPage ? "submenu show-submenu" : "submenu"}
      onMouseLeave={handleMouseLeave}
      ref={submenuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentPage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentPage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};
export default Submenu;
