import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";
/* za da nqma problemi kato se vyrnem v home stranicata (zashtoto se poluchavashe neshto ne kakto trqbva taka), tr da posochim koq stranica da byde index. Tova v sluchaq e landing.
Kak go pravim - vmesto path: "/landing", pishem index: true, */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/cocktail",
        element: <Cocktail />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
