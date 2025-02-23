import React from "react";
import { useNavigate } from "react-router-dom";
import { CrudContextProvider } from "../context/crud-context";
import { crudAction } from "../context/crud-reducer";

export const UserCard = ({ id, userName, password }) => {
  const navigate = useNavigate();
  const { dispatch } = React.useContext(CrudContextProvider);

  const editData = () => {
    navigate(`/edit-user/${id}`);
  };

  const deleteData = () => {
    dispatch({
      type: crudAction.DELETE_USER,
      value: {
        id,
      },
    });
  };

  return (
    <div
      key={id}
      className="rounded-lg flex justify-between mb-5 w-full border  border-blue-500 p-[20px]"
    >
      <div>
        <h1 className="text-4xl text-blue-400">{userName}</h1>
        <p>{password}</p>
      </div>
      <div>
        <button
          onClick={editData}
          className=" px-3 bg-green-400 cursor-pointer block"
        >
          Edit
        </button>
        <button
          onClick={deleteData}
          className="px-3 mt-5 bg-red-500 cursor-pointer"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
