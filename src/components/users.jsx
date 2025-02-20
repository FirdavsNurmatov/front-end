import React from "react";
import { request } from "../config/request";

export const Users = ({ id, title }) => {
  const deleteData = (e) => {
    e.preventDefault();

    console.log(e.target.id);

    request.delete("/todos", { id: e.target?.id });

    request.get("/todos").then((res) => {
      setUsers(res.data);
    });
  };

  React.useEffect(() => {
    deleteData;
  }, []);

  const updateData = (e) => {
    e.preventDefault();
  };

  return (
    <div className="item border-1 p-6">
      <h1 key={id} className="">
        {title}
      </h1>
      <button
        id={id}
        className="delete__btn mr-2 border-2 border-red-500 cursor-pointer"
        onClick={deleteData}
      >
        delete
      </button>
      <button
        id={id}
        className="edit__btn mr-2 border-2 border-red-500 cursor-pointer"
        onClick={updateData}
      >
        edit
      </button>
    </div>
  );
};
