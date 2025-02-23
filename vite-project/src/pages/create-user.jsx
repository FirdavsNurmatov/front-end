import React from "react";
import { useNavigate } from "react-router-dom";
import { Form } from "../components/form";

export const CreateUser = () => {
  const router = useNavigate();

  return (
    <div>
      <button className="block cursor-pointer mb-2" onClick={() => router(-1)}>
        {"<="}
      </button>
      <Form />
    </div>
  );
};
