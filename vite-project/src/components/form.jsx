import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { CrudContextProvider } from "../context/crud-context";
import { crudAction } from "../context/crud-reducer";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";

export const Form = ({ defValue }) => {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      userName: defValue?.userName,
      password: defValue?.password,
    },
  });

  const { dispatch } = useContext(CrudContextProvider);

  const navigate = useNavigate();

  const submit = (data) => {
    if (!defValue) {
      dispatch({
        type: crudAction.CREATE_USER,
        value: {
          ...data,
          id: nanoid(),
        },
      });
    } else {
      dispatch({
        type: crudAction.EDIT_USER,
        value: { ...data, id: defValue.id },
      });
    }
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div>
        <input
          {...register("userName", {
            required: true,
            minLength: { value: 3, message: "Eng kam qiymat 3 ta" },
          })}
          type="text"
          className=" bg-blue-300 border-2"
        />
      </div>
      {errors.userName && (
        <p className="text-[red]">{errors.userName.message}</p>
      )}
      <div className="py-[10px]">
        <input
          {...register("password", {
            required: true,
            minLength: { value: 3, message: "Eng kam qiymat 3 ta" },
          })}
          type="text"
          className=" bg-blue-300 border-2"
        />
      </div>
      {errors.password && (
        <p className="text-[red]">{errors.password.message}</p>
      )}
      <button className="boder bg-amber-400 p-2 cursor-pointer">send</button>
    </form>
  );
};
