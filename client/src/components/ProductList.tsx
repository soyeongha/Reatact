import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import { ProductType } from "../type";
import { CircularProgress, Grid } from "@mui/material";
import { getProducts } from "./Api";

// 상품 리스트
const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
   getProducts()
      .then((response) => setProducts(response.data.products))
      .finally(() => setIsLoading(false));
  }, []);

  // 상품 삭제
  // const handleDelete = (id: string) => {
  //   fetch(`/product/${id}`, { method: "DELETE" }).then((res) => {
  //     if (res.ok) {
  //       setProducts(products.filter((product) => product.id !== id));
  //     }
  //   });
  // };

  // 상품수정
  // const handleUpdate = (updateProduct: ProductType) => {
  //   fetch(`/product/${updateProduct.id}`, {
  //     method: "PATCH",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(updateProduct),
  //   }).then((res) => {
  //     if (res.ok) {
  //       setProducts(
  //         products.map((product) =>
  //           product.id === updateProduct.id ? updateProduct : product
  //         )
  //       );
  //     }
  //   });
  // };

  if (isLoading)
    return (
      <CircularProgress sx={{ position: "fixed", left: "50%", top: "50%" }} />
    );

  return (
    <>
      <h2>상품목록</h2>
      <Grid container spacing={3}>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </Grid>
    </>
  );
};

export default ProductList;
