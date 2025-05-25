import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages
import Home from "./pages/Home.jsx";
// import About from "./pages/About.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./components/Services.jsx";
import Thankyou from "./pages/Thankyou.jsx";
// import Cobol from "./pages/Cobol.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/thankyou", // ⬅️ paths are lowercase by convention
    element: <Thankyou />,
  },

  // {
  //   path: "/cobol",
  //   element: <Cobol />,
  // },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}
