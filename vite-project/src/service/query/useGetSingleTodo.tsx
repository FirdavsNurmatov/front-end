import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";
import { Todos } from "./useGetTodo";

export const useGetSingleTodo = (id: number) => {
  return useQuery({
    queryKey: ["todo", id],
    queryFn: () => request.get<Todos>(`/todos/${id}`).then((res) => res.data),
  });
};
