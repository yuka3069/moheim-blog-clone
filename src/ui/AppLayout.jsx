import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AppLayout() {
  return (
    <>
      <Header />
      <main className="mx-auto w-full bg-brand-50 pt-[calc(95px+16.8rem)] outline-none">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
