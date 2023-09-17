import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import Home from "./pages/home/home.component";
import Users from "./pages/users/users.component";
import Products from "./pages/products/products.component";
import { Footer } from "./components/footer/footer.component";
import { Navbar } from "./components/navbar/navbar.component";
import { Menu } from "./components/menu/menu.component";

import "./styles/global.scss";
import User from "./pages/user/user.component";
import Product from "./pages/product/product.component";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
