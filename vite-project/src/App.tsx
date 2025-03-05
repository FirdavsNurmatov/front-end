import { Route, Routes } from "react-router-dom";
import { MainLayout } from "./layout/main-layout";
import { appRoutes } from "./router/app.routes";
import { SignIn } from "./pages/auth/signIn/sign-in";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/app" element={<MainLayout />}>
        {appRoutes.map(({ comp: AppPage, path }, index) => (
          <Route
            key={index}
            index={!path ? true : false}
            path={path}
            element={<AppPage />}
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
