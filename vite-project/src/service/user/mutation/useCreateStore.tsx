import { useMutation } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useCreateStore = () => {
  return useMutation({
    mutationFn: (data: { username: string; password: string }) =>
      request.post("/admin/signin", data).then((res) => res.data),
  });
};
