import { useGlobalContext } from "./Context";
import sublinks from "./data";
const Submenu = () => {
  const { pageId } = useGlobalContext();
  const currentPage = sublinks.find((item) => item.pageId === pageId);
  /* console.log(currentPage); rezultatyt izliza kato hovernem s
  butona v/u zaglavieto na stranicata. Inache pyrvonachalno e
  undefined
primer s edna ot stranicite (kakvo logva, kato hovernem):
{pageId: 'wmy_WIsDwZwDDZxaz-pp_', page: 'product', links: Array(3)}
  */

  return (
    <div className={currentPage ? "submenu show-submenu" : "submenu"}>
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
