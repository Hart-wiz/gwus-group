import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./components/Nav.jsx";
import Services from "./pages/Services.jsx";
import Thankyou from "./pages/Thankyou.jsx";
// import Cobol from "./pages/Cobol.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about", // ⬅️ paths are lowercase by convention
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/thankyou",
    element: <Thankyou />,
  },
  {
    path: "/cobol",
    element: <Cobol />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}
