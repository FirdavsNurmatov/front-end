import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={<h1 className="text-4xl text-red-500">Page not found!</h1>}
        />
      </Routes>
    </>
  );
}

export default App;
