import { Outlet } from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />

      <main className="pt-20 min-h-screen">
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default MainLayout;