import { useMutation } from "@tanstack/react-query";
import { request } from "../../config/request";

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: (data: { title: string; des: string }) =>
      request
        .post("/todos", { id: Math.round(Math.random() * 1000), ...data })
        .then((res) => res.data),
  });
};
