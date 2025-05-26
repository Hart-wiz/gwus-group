import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages
import Home from "./pages/Home.jsx";
import Thankyou from "./pages/Thankyou.jsx";
import Cobel from "./pages/Cobel.jsx";
import GwusCobel from "./pages/GwusCobel.jsx";
import CobelProject from "./pages/CobelProject.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/thankyou", // ⬅️ paths are lowercase by convention
    element: <Thankyou />,
  },

  {
    path: "/cobel",
    element: <Cobel />,
  },
  {
    path: "/gwuscobel",
    element: <GwusCobel />,
  },

  {
    path: "/cobel/project",
    element: <CobelProject />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
