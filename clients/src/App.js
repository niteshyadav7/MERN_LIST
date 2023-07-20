import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import AddUser from "./components/Link/AddUser";
import ShowUser from "./components/Link/ShowUser";
import Error from "./components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <AddUser />,
      },
      {
        path: "/showuser",
        element: <ShowUser />,
      },
    ],
  },
]);

export default router;
