import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

const Layout = () => {
  return (
    <div className="overflow-hidden h-screen flex flex-col lg:flex-row">
      <NavBar></NavBar>
      <section className="w-full overflow-y-scroll">
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
