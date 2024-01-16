import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import Root from "./pages/Root";
import SetOne from './pages/SetOne'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      // { path: "/", element: <Home /> },
      { path: "/", element: <SetOne /> },
      { path: "/posts", element: <Posts /> },
    ],
  },
]);

const Router = () => <RouterProvider router={router} />;

export default Router;
