import { createBrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import Home from "./views/Home/Home.tsx";
import BookOverview from "./views/BookOverview/BookOverview.tsx";
import NoContent from "./views/Error/NoContent.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "home/:volumeId",
        element: <BookOverview />,
      },
    ],
  },
  {
    path: "*",
    element: <NoContent />,
  },
]);

export default router;
