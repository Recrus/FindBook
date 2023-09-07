import Test from "./views/Test";
import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./views/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
  {
    path: "*",
    element: <Test />,
  },
]);

export default router;
