import { useQuery } from "@tanstack/react-query";
import { request } from "../../config/request";

export interface Todos {
  id: number;
  title: string;
  des: string;
}

export const useGetTodo = () => {
  return useQuery({
    queryKey: ["todo_list"],
    queryFn: () => request.get<Todos[]>("/todos").then((res) => res.data),
  });
};
