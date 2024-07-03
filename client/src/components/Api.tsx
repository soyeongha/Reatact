import { ProductType } from "../type";
import axios, { AxiosResponse } from "axios";
type ReturnType<T> = Promise<AxiosResponse<T>>;

export const getProducts = async (): ReturnType<{
  products: ProductType[];
}> => {
  try {
    const response = await axios.get(`/product`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (
  id: string
): ReturnType<{
  product: ProductType;
}> => {
  try {
    const response = await axios.get(`/product/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const createProduct = async (
  newProduct: Omit<ProductType, "id" | "thumbnail">
): ReturnType<{ product: ProductType }> => {
  try {
    const response = await axios.post(`/product`, newProduct);
    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id: string) => {
  try {
    const response = await axios.delete(`/product/${id}`);
    return response;
  } catch (error) {
    throw error;
  }
};

export const modifyProduct = (updateProduct: ProductType) => {
  return fetch(`/product/${updateProduct.id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateProduct),
  });
};

export const modifyThumbnail = async (
  productId: string,
  thummbnail: File
): ReturnType<{ product: ProductType }> => {
  try {
    const formData = new FormData();
    formData.append("thumbnail", thummbnail);

    const response = axios.patch(`/product/thumbnail/${productId}`, formData);
    return response;
  } catch (error) {
    throw error;
  }
};
