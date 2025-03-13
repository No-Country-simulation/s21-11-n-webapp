import { AddCategoryModel } from "@/_domain/models/category/AddCategoryModel";
import http from "../http";
import { CategoryResponse } from "@/_domain/models/category/CategoryResponse";

export const addCategory = async (category: AddCategoryModel) => {
  const { data } = await http.post("/categories", category);
  return data;
};

export const getAllCategories = async ({
  pageParam = 0,
}): Promise<CategoryResponse> => {
  const { data } = await http.get("/categories", {
    params: {
      page: pageParam,
      size: 5,
    },
  });
  return data;
};
