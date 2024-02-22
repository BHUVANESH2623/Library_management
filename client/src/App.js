import Home from "./Home";
import { RouterProvider, Outlet, createBrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";
import { Books } from "./Books";
import { Addbooks } from "./Addbooks";
import { Login } from "./Login";
import { Register } from "./Register";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
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
        path: "/book",
        element: <Books />,
      },
      {
        path: "/add",
        element: <Addbooks />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
