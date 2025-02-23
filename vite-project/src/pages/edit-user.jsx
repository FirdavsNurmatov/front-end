import React from "react";
import { useParams } from "react-router-dom";
import { CrudContextProvider } from "../context/crud-context";
import { Form } from "../components/form";

export const EditUser = () => {
  const { id } = useParams();
  const { data, dispatch } = React.useContext(CrudContextProvider);

  const defValue = data.usersList.find((item) => item.id === id);

  return (
    <div>
      <h1>EditUser</h1>
      <button
        className="block cursor-pointer mb-[20px]"
        onClick={() => router(-1)}
      >
        {"<="}
      </button>
      <Form defValue={defValue} />
    </div>
  );
};
