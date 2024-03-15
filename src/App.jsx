import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

const DashboardPage = lazy(() => import("./components/Dashboard"));
const LandingPage = lazy(() => import("./components/Landing"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"...loading"}>
                <DashboardPage />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"...loading"}>
                <LandingPage />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Appbar = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Landing Page
      </button>
      <button
        onClick={() => {
          navigate("/dashboard");
        }}
      >
        Dashboard
      </button>
    </div>
  );
};

export default App;
