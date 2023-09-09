import { Outlet, useNavigate } from "react-router";
import Footer from "./components/Footer/Footer.tsx";
import logo from "./assets/logo.svg";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs.tsx";
import {
  addBreadcrumb,
  selectBreadcrumbs,
} from "./features/breadcrumbs/breadcrumbsSlice.ts";
import { useAppDispatch, useAppSelector } from "./app/hooks.ts";
import landingImage from "./assets/landing.png";
import TheButton from "./components/TheButton/TheButton.tsx";

const App = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const breadcrumb = useAppSelector(selectBreadcrumbs);

  const handleNavigate = () => {
    navigate("/home");
    dispatch(addBreadcrumb({ label: "Home", href: "/home" }));
  };

  return (
    <div className="container pb-14">
      <header className="flex-center py-2 uppercase bg-primary shadow-md items-center">
        <div className="mr-2">Find a book</div>
        <img src={logo} alt="#" className="h-6" />
      </header>
      {breadcrumb.length === 0 ? (
        <div className="flex-center flex-col items-center h-[90vh]">
          <div className="relative">
            <img
              src={landingImage}
              alt="#"
              className="w-72 md:w-96 rounded shadow-md"
            />
            <span className="absolute top-[-3px] right-[-3px] flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-blue"></span>
            </span>
          </div>
          <TheButton text={"Go and find it!"} handler={handleNavigate} />
        </div>
      ) : (
        <>
          <Breadcrumbs />
          <Outlet />
        </>
      )}
      <Footer />
    </div>
  );
};

export default App;
