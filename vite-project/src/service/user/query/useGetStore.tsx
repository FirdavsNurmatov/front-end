import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const useGetStores = () => {
  useQuery({
    queryKey: ["users_list"],
    queryFn: () => request.get("/admin"),
  });
};
