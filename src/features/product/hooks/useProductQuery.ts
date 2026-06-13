import { useQuery } from "@tanstack/react-query";
import { productApi } from "../api/productApi";

export const useProductQuery = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: productApi.getAll,
  });
};
