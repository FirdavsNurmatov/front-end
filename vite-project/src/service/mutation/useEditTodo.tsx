import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useEditTodo = () => {
  return useMutation({
    mutationFn: (data: { id: number; title: string; des: string }) =>
      request
        .put(`/todos/${data.id}`, { title: data.title, des: data.des })
        .then((res) => res.data),
  });
};
