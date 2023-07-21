import { createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Error from "./components/Error";
import ShowUser from "./components/link/ShowUser";
import AddUser from "./components/link/AddUser";
import EditUser from "./components/link/EditUser";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Body />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <AddUser />,
      },
      {
        path: "/show",
        element: <ShowUser />,
      },
      {
        path: "/edit/:id",
        element: <EditUser />,
      },
    ],
  },
]);

export default router;
