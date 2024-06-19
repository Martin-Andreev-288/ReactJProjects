import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

/* vmesto za vsqka otdelna stranica da pravim CSS-a, kogato syvpada - mozhem da izpolzvame Outlet komponenta, koyto sybira vsichki komponenti. Taka css-a v index.css za .page se prilaga na
vsqka stranica (oshte 1 screenshot, za da se vidi) */
const HomeLayout = () => {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
