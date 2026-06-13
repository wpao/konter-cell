import { useMutation, useQueryClient } from "@tanstack/react-query";

import { productApi } from "../api/productApi";

export const useProductMutation = () => {
  const queryClient = useQueryClient();

  const invalidate = () =>
    queryClient.invalidateQueries({
      queryKey: ["products"],
    });

  const createProduct = useMutation({
    mutationFn: productApi.create,
    onSuccess: invalidate,
  });

  const updateProduct = useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) =>
      productApi.update(id, data),
    onSuccess: invalidate,
  });

  const deleteProduct = useMutation({
    mutationFn: productApi.remove,
    onSuccess: invalidate,
  });

  return {
    createProduct: createProduct.mutateAsync,
    updateProduct: updateProduct.mutateAsync,
    deleteProduct: deleteProduct.mutateAsync,

    isCreating: createProduct.isPending,
    isUpdating: updateProduct.isPending,
    isDeleting: deleteProduct.isPending,
  };
};
