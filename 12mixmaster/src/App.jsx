import { RouterProvider, createBrowserRouter } from "react-router-dom";
// pyrvi routing. Ako napishem /about sled linka, shte zaredi about stranicata s "about page" nadpisa
const router = createBrowserRouter([
  {
    path: "/",
    element: <h2>home page</h2>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
