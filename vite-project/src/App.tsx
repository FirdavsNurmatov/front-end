import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { authRoutes } from "./router/auth.routes";
import { appRoutes } from "./router/app.routes";
import { SignIn } from "./pages/auth/signIn/sign-in";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />}>
        <Route path="/auth">
          {authRoutes.map(({ comp: Page, path }, index) => (
            <Route
              key={index}
              index={!path ? true : false}
              path={path}
              element={<Page />}
            />
          ))}
        </Route>
        <Route path="/app" element={<MainLayout />}>
          {appRoutes.map(({ comp: Page, path }, index) => (
            <Route
              key={index}
              index={!path ? true : false}
              path={path}
              element={<Page />}
            />
          ))}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
