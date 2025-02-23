import React from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout = ({ children }) => {
  return (
    <>
      <div className="flex">
        <div className="w-[300px] p-[30px] flex flex-col gap-[20px] bg-amber-500 h-screen">
          <Link to={"/create-user"}>Create-User</Link>
        </div>
        <div className="p-[30px] grow">
          <Outlet />
        </div>
      </div>
    </>
  );
};
