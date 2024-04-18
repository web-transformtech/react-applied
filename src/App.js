import { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
const HomePage = lazy(() => import("./pages/HomePage"));
const ThankYou = lazy(() => import("./components/ThankYou"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));
const Loader = lazy(() => import("./components/Loader"));
// import ThankYou from './components/ThankYou';
// import PageNotFound from './components/PageNotFound';
// import Loader from './components/Loader';
function App() {
  return (
    <div>
      <BrowserRouter basename="/react-applied">
        <Routes>
          {/* <Route path="/" element={<HomePage />} /> */}
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          {!localStorage.Mbadm ? (
            <></>
          ) : (
            <Route path="/thankyou" element={<ThankYou />} />
          )}
          {/* <Route path="/thankyou" element={<ThankYou />} /> */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
