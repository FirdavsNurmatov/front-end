import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useCreateTodo } from "../service/mutation/useCreateTodo";
import { useNavigate } from "react-router-dom";
import { useEditTodo } from "../service/mutation/useEditTodo";

interface Todo {
  title: string;
  des: string;
}

interface Is {
  data?: { id: number; title: string; des: string };
}

export const Form = ({ data }: Is) => {
  const {
    handleSubmit,
    reset,
    register,
    setError,
    formState: { errors },
  } = useForm<Todo>();

  const client = useQueryClient();
  const navigate = useNavigate();
  const { mutate, isPending } = useCreateTodo();
  const { mutate: editMutate, isPending: editPending } = useEditTodo();

  const submit = (submitData: Todo) => {
    if (data?.id) {
      editMutate(
        { id: data.id, title: submitData.title, des: submitData.des },
        {
          onSuccess: () => {
            reset();
            client.invalidateQueries({ queryKey: ["todo", data.id] });
          },
          onError: (error) => {
            setError("title", { message: error?.message });
            setError("des", { message: error?.message });
          },
          onSettled: () => {},
        }
      );
    } else {
      mutate(submitData, {
        onSuccess: () => {
          reset();
          client.invalidateQueries({ queryKey: ["todo_list"] });
        },
        onError: (error) => {
          setError("title", { message: error?.message });
          setError("des", { message: error?.message });
        },
        onSettled: () => {},
      });
    }

    navigate("/");
  };

  return (
    <div className="w-[300px] p-[10px]">
      <form onSubmit={handleSubmit(submit)} className="flex flex-col gap-3">
        <input
          {...register("title", { required: true, minLength: 2 })}
          type="text"
          defaultValue={data ? data.title : ""}
          placeholder="Title"
          className="p-[5px] border-1"
        />
        {errors.title && (
          <p className="text-[12px] text-red-500">{errors.title.message}</p>
        )}
        <input
          {...register("des", { required: true, minLength: 2 })}
          type="text"
          defaultValue={data ? data.des : ""}
          placeholder="Description"
          className="p-[5px] border-1"
        />
        {errors.des && <p>{errors?.des.message}</p>}
        <button
          disabled={isPending || editPending}
          type="submit"
          className=" p-[5px]  bg-green-500"
        >
          Add
        </button>
      </form>
    </div>
  );
};
