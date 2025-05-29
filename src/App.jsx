import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import your pages
import Home from "./pages/Home.jsx";
import Thankyou from "./pages/Thankyou.jsx";
import Cobel from "./pages/Cobel.jsx";
import GwusCobel from "./pages/GwusCobel.jsx";
import CobelProject from "./pages/CobelProject.jsx";
import CobelCallOff from "./pages/CobelCallOff.jsx";
import CobelConstruction from "./pages/CobelConstruction.jsx";
import CobelShutdown from "./pages/CobelShutdown.jsx";
import CobelHse from "./pages/CobelHse.jsx";
import GwusCobelProject from "./pages/GwusCobelProject.jsx";
import GwusCobelConsult from "./pages/GwusCobelConsult.jsx";
import GwusCobelAgency from "./pages/GwusCobelAgency.jsx";
import GwusQatar from "./pages/GwusQatar.jsx";
import GwusTrading from "./pages/GwusTrading.jsx";
import GwusTradingOilProduct from "./pages/GwusTradingOilProduct.jsx";
import GwusTradingbuilding from "./pages/GwusTradingbuilding.jsx";
import GwusTradinggeneral from "./pages/GwusTradinggeneral.jsx";
import GwusTradingstaffing from "./pages/GwusTradingStaffing.jsx";

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
  {
    path: "/cobel/calloff",
    element: <CobelCallOff />,
  },
  {
    path: "/cobel/construction",
    element: <CobelConstruction />,
  },
  {
    path: "/cobel/shutdown",
    element: <CobelShutdown />,
  },
  {
    path: "/cobel/hse",
    element: <CobelHse />,
  },
  {
    path: "/gwuscobel/project",
    element: <GwusCobelProject />,
  },
  {
    path: "/gwuscobel/consult",
    element: <GwusCobelConsult />,
  },
  {
    path: "/gwuscobel/agency",
    element: <GwusCobelAgency />,
  },
  {
    path: "/gwusqatar",
    element: <GwusQatar />,
  },
  {
    path: "/gwustrading",
    element: <GwusTrading />,
  },
  {
    path: "/gwustrading/oilproduct",
    element: <GwusTradingOilProduct />,
  },
  {
    path: "/gwustrading/building",
    element: <GwusTradingbuilding />,
  },
  {
    path: "/gwustrading/general",
    element: <GwusTradinggeneral />,
  },
  {
    path: "/gwustrading/staffing",
    element: <GwusTradingstaffing />,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
