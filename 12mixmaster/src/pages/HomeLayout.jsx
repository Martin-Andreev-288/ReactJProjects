import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
/* ideqta tuk e da se pokazva animaciqta za prezarezhdane, kato sme v systoqnie "loading" (tova e glavnoto neshto)
Inache malko obyrkvashto, no tova za const value = 'some value'; e za da ni pokazhe how we automatically get this context prop. And essentially by using this prop, we can pass some data from the parent
where we have the outlet to all of the pages, and not only the pages but to the smallest component, which in our case is the card. Basically, whatever levels deep, you have components you'll still have
access, which is super cool, so we don't have to set up anything from scratch. Tuk e samo za primer - pokazvame kakvo log-va ({value 'some value'}) i go dekomentirame v CocktaiCard komponenta. Tuk mozhe
i da ne vzimash predvid tova value = 'some value' */
const HomeLayout = () => {
  const navigation = useNavigation();
  console.log(navigation);
  const isPageLoading = navigation.state === "loading";
  const value = "some value";
  return (
    <>
      <Navbar />
      <section className="page">
        {isPageLoading ? (
          <div className="loading" />
        ) : (
          <Outlet context={{ value }} />
        )}
      </section>
    </>
  );
};
export default HomeLayout;
