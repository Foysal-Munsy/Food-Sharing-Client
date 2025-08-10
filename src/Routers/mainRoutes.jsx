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
import RequestedFoods from "../pages/RequestedFoods";
import Update from "../pages/Update";
import PrivateRoute from "./PrivateRoute";
import TermsOfService from "../pages/TermsOfService";

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
        element: (
          <PrivateRoute>
            <AddFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/available-foods",
        element: <AvailableFoods />,
      },
      {
        path: "/my-foods",
        element: (
          <PrivateRoute>
            <MyFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/requested-foods",
        element: (
          <PrivateRoute>
            <RequestedFoods />
          </PrivateRoute>
        ),
      },
      {
        path: "/details/:foodID",
        element: (
          <PrivateRoute>
            <DetailsPage />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const { data } = await axios.get(
            `https://food-sharing-server-seven.vercel.app/details/${params.foodID}`
          );
          return data;
        },
      },
      {
        path: "/update/:foodID",
        element: <Update />,
        loader: async ({ params }) => {
          const { data } = await axios.get(
            `https://food-sharing-server-seven.vercel.app/update/${params.foodID}`
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
      {
        path: "terms-of-service",
        element: <TermsOfService></TermsOfService>,
      },
    ],
  },
]);

export default mainRoutes;
