import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <h1 className="text-4xl">Comfy</h1>
      </nav>
      <Outlet />
    </>
  );
};
export default HomeLayout;
