import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Pages/Root.jsx";
import Home from "./Pages/Home.jsx";
import Error from "./Pages/Error.jsx";
import PetsAndSupplies from "./Pages/PetsAndSupplies.jsx";
import AddListing from "./Pages/AddListing.jsx";
import MyListings from "./Pages/MyListings.jsx";
import MyOrders from "./Pages/MyOrders.jsx";
import Registration from "./Pages/Registration.jsx";
import Login from "./Pages/Login.jsx";
import Provider from "./Provider/Provider.jsx";
import Loading from "./Pages/Loading.jsx";
import Details from "./Pages/Details.jsx";
import PrivateRoute from "../src/Provider/PrivateRoute.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, path: "/", Component: Home },
      {
        path: "/pets&supplies",
        Component: PetsAndSupplies,
      },
      {
        path: "/all/:myId",
        element: (
          <PrivateRoute>
            {" "}
            <Details></Details>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/addlisting",
        Component: AddListing,
      },
      {
        path: "/mylistings",
        Component: MyListings,
      },
      {
        path: "/myorders",
        Component: MyOrders,
      },
      {
        path: "/registration",
        Component: Registration,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/loading",
        Component: Loading,
      },
    ],
  },
  {
    path: "*",
    Component: Error,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
