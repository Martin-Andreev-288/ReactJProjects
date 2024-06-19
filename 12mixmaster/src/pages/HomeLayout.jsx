import { Outlet } from "react-router-dom";
/* vazhna lekciq za nestvane - ako iskame da imame edno i syshto neshto na vseki komponent - nachinyt e tozi (s nestvane). Po standartniq nachin, za koyto lektoryt spomena - da syzdadem navbar i da go
importvame vyv vsichki stranici, no taka tr da povtarqme mn kod, a i ako iskame da napravim nqkakvi promeni (primerno da dobavim footer), shte stane tegavo (t.e. dokolkoto razbiram, shte stane oshte
po-zdravo povtarqne na kod).
Zatova pravim tova - po-dolu v ili pod <HomeLayout /> nestvame vsichki drugi komponenti i tuk tozi <nav>navbar<nav> shte go ima vyv vseki edin ot tqh. Osven tozi, shte napravq oshte 2 screenshot-a, za
da se vidi qsno. A <Outlet /> tuk syotvetno e prosto sydyrzhanieto na konkretniq component, koyto sme zaredili v stranicata (to v sluchaq shte doyde pod navbar-a).
 */
const HomeLayout = () => {
  return (
    <div>
      <nav>navbar</nav>
      <Outlet />
    </div>
  );
};
export default HomeLayout;
