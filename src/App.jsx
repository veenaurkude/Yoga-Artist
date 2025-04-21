import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import { AnimatePresence } from "framer-motion";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home/Home"));
const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));

// Wrapper for routing and AnimatePresence
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div style={{ textAlign: "center", color: "#333" }}>Loading...</div>}>
        <AnimatedRoutes />
      </Suspense>
    </Router>
  );
};

export default App;


// import { Suspense, lazy } from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import MainLayout from "./layout/MainLayout";
// import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
// import { AnimatePresence } from "framer-motion";
// import { useLocation } from "react-router-dom";

// // Lazy-loaded components
// const Home = lazy(() => import("./pages/Home/Home"));
// const Gallery = lazy(() => import("./pages/Gallery/Gallery"));
// const About = lazy(() => import("./pages/About/About"));
// const Contact = lazy(() => import("./pages/Contact/Contact"));

// const App = () => {
//   const location = useLocation();

//   return (
//     <>
//       <Router>
//         <ScrollToTop />
//         <Suspense
//           fallback={<div style={{ textAlign: "center" }}>Loading...</div>}
//         >
//           <AnimatePresence mode="wait">
//             <Routes location={location} key={location.pathname}>
//               <Route path="/" element={<MainLayout />}>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/gallery" element={<Gallery />} />
//                 <Route path="/about" element={<About />} />
//                 <Route path="/contact" element={<Contact />} />
//               </Route>
//             </Routes>
//           </AnimatePresence>
//         </Suspense>
//       </Router>
//     </>
//   );
// };

// export default App;
