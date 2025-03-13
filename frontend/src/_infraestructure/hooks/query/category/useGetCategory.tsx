import { getAllCategories } from "@/_infraestructure/http/category";
import { useInfiniteQuery } from "@tanstack/react-query";

const useGetCategory = () => {
  return useInfiniteQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.last ? undefined : allPages.length;
    },
  });
};

export default useGetCategory;

export interface ErrorResponse {
  message: string;
  statusCode: number;
  details: string;
  errors: null;
}
