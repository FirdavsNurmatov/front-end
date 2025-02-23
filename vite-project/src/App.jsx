import { MainLayout } from "./layout/main-layout";
import { Form } from "./components/form";
import { Route, Routes } from "react-router-dom";
import { UserList } from "./pages/user-list";
import { CreateUser } from "./pages/create-user";
import { EditUser } from "./pages/edit-user";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<UserList />} />
        <Route path="create-user" element={<CreateUser />} />
        <Route path="edit-user/:id" element={<EditUser />} />
      </Route>
    </Routes>
  );
}

export default App;
