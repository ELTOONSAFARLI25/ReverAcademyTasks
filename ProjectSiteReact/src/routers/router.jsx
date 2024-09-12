import AdminRoot from "../admin/adminRoot";
import Produtcs from "../admin/products";
import Users from "../admin/users";
import Account from "../user/pages/account/index";
import Basket from "../user/pages/basket";
import Contact from "../user/pages/contact";
import Home from "../user/pages/home";
import Login from "../user/pages/login";
import Register from "../user/pages/login/register";
import Wishlist from "../user/pages/wishlist";
import UserRoot from "../user/userRoot";
export let routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/account", element: <Account /> },
      { path: "/contact", element: <Contact /> },
      { path: "/wishlist", element: <Wishlist /> },
      { path: "/basket", element: <Basket /> },
    ],
  },
  {
    path: "/admin",
    element: <AdminRoot />,
    children: [
      {
        path: "/admin/users",
        element: <Users />,
      },
      {
        path: "/admin/products",
        element: <Produtcs />,
      },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];
