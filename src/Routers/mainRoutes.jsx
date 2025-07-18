import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AddFoods from "../pages/AddFoods";
import AvailableFoods from "../pages/AvailableFoods";
import DetailsPage from "../pages/DetailsPage";
import axios from "axios";
import MyFoods from "../pages/MyFoods";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/add-food",
        element: <AddFoods />,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods />,
      },
      {
        path: "/my-foods",
        element: <MyFoods />,
      },
      {
        path: "/details/:foodID",
        element: <DetailsPage />,
        loader: async ({ params }) => {
          const { data } = await axios.get(
            `http://localhost:5001/details/${params.foodID}`
          );
          return data;
        },
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Register></Register>,
      },
      {},
    ],
  },
]);

export default mainRoutes;
