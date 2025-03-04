import { Link, Outlet } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <div className="bg-amber-400 p-[30px] flex justify-center gap-[40px]">
        <Link to={"/"}>Home</Link>
        <Link to={"/create-todo"}>Create Todo</Link>
      </div>
      <Outlet />
    </>
  );
};
