import { addCategory } from "@/_infraestructure/http/category";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const useAddCategory = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationKey: ["addCcategory"],
    mutationFn: addCategory,
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["products"] });
    },
  });
};

export default useAddCategory;
