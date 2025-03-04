import { useNavigate } from "react-router-dom";
import { useDeleteTodo } from "../../service/mutation/useDeleteTodo";
import { useGetTodo } from "../../service/query/useGetTodo";
import { useQueryClient } from "@tanstack/react-query";

export const Home = () => {
  const { data, isLoading } = useGetTodo();
  const client = useQueryClient();

  const { mutate, isPending } = useDeleteTodo();
  const deleteTodo = (buttonData: any) => {
    const id = +buttonData.target.id;

    mutate(id, {
      onSuccess: () => {
        client.invalidateQueries({ queryKey: ["todo_list"] });
      },
    });
  };

  const navigate = useNavigate();

  const editTodo = (buttonElement: any) => {
    const id = +buttonElement.target.id;

    navigate("/edit-todo", { state: { id } });
  };

  return (
    <>
      <div className="container">
        <div>
          {isLoading ? (
            <h2>Loading...</h2>
          ) : (
            <div>
              {data?.map((item) => (
                <div
                  className="flex bg-amber-100 justify-between m-[20px]"
                  key={item.id}
                >
                  <p className="p-3">
                    <span className=" text-red-700 font-bold">
                      {item.title}
                    </span>{" "}
                    - {item.des}
                  </p>
                  <div className="flex gap-[10px] items-center">
                    <button
                      id={`${item.id}`}
                      onClick={editTodo}
                      className="h-[30px] px-[4px] bg-green-600"
                    >
                      edit
                    </button>
                    <button
                      disabled={isPending}
                      id={`${item.id}`}
                      onClick={deleteTodo}
                      className={`${item.title} h-[30px] px-[4px] bg-orange-400`}
                    >
                      delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
