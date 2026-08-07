import {createBrowserRouter,} from "react-router-dom";

import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/Gallery";
import Feedback from "../pages/Feedback";
import Contact from "../pages/Contact";
import HybridCourse from "../pages/courses/HybridCourse";
import ACPcbCourse from "../pages/courses/ACPcbCourse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "services", element: <Services /> },
      { path: "gallery", element: <Gallery /> },
      { path: "feedback", element: <Feedback /> },
      { path: "contact", element: <Contact /> },
      {
        path: "courses/hybrid",
        element: <HybridCourse />,
      },
      {
        path: "courses/ac-pcb",
        element: <ACPcbCourse />,
      },
    ],
  },
]);

export default router;