import Home from "./pages/home/home.component";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/users.component";
import Products from "./pages/products/products.component";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "Products",
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
