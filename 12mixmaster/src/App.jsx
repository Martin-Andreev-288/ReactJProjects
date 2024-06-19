import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  About,
  HomeLayout,
  Landing,
  Error,
  Newsletter,
  Cocktail,
} from "./pages";
/* syzdadohme 6 razlichni komponenta, no nqma nishto syshtestveno v tqh (samo imeto im), zatova ne gi snimam.
i tuk imame samo 1 promqna v sravnenie s prednata lekciq - iznasqme 2 ot komponentite. Ako napishem /about sled localhost:5176, shte ni pokazhe sydyrzhanieto na About component-a */
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
