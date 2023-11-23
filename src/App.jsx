import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import routes from "./routes";

function App() {
  return (
    <Router>
      <React.Suspense fallback={<div>loading...</div>}>
        <Routes>
          {routes.map(
            ({ label, exact, path, component: Component }) => (
              <Route
                key={label}
                path={path}
                exact={exact}
                element={
                  <MainLayout>
                    <Component />
                  </MainLayout>
                }
              />
            )
          )}
        </Routes>
      </React.Suspense>
    </Router>
  );
}

export default App;
