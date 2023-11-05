import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import User from "./pages/user/User";
import Product from "./pages/Product";
import HomeLayout from "./home-layout/HomeLayout";
import {
  Form,
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
  useActionData,
  useFetcher,
  useLocation,
  useNavigate,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Category from "./pages/Category";
import UserCreate from "./pages/user/UserCreate";
import UserPage from "./pages/user/UserView"

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "product",
        Component: Product,
      },
      {
        path: "category",
        Component: Category,
      },
      {
        path: "user",
        Component: UserPage,
      },
      {
        path: "user/create",
        Component: UserCreate,
      },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
]);

function App() {

  return (
    <>
      <div className="container">
        <RouterProvider
          router={router}
          fallbackElement={<p>Initial Load...</p>}
        />
      </div>
    </>
  );
}

export default App;
