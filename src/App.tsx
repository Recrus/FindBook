import { Outlet, useNavigate } from "react-router";
import Footer from "./components/Footer/Footer.tsx";
import { useEffect } from "react";
import logo from "./assets/logo.svg";
import axios from "axios";

const App = () => {
  const navigate = useNavigate();

  //todo delete test fetch
  useEffect(() => {
    navigate("/home");

    const fetch = async () => {
      try {
        const res = await axios.get(``);
        console.log(res.data);
      } catch (e) {
        console.log(e);
      }
    };
  }, [navigate]);

  return (
    <div className="container pb-14">
      <header className="flex-center py-2 uppercase bg-primary shadow-md items-center">
        <div className="mr-2">Find a book</div>
        <img src={logo} alt="#" className="h-6" />
      </header>
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
