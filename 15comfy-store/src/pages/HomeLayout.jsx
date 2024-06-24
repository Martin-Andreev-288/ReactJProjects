import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      <nav>
        <h1 className="text-4xl">Comfy</h1>
      </nav>
      <section className="align-element py-20">
        <Outlet />
      </section>
    </>
  );
};
export default HomeLayout;
