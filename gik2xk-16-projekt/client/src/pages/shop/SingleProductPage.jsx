import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RenderProduct from "../../components/product/RenderProduct";
import { Typography } from "@mui/material";

import { getOne } from "../../models/ProductModel";

function SingleProductPage({ updateCartHandler }) {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = () => {
    getOne(id).then((product) => setProduct(product));
  };

  if (!product) {
    return <Typography>No product found with id {id}</Typography>;
  }

  return (
    <>
      <RenderProduct
        fetchProduct={fetchProduct}
        product={product}
        updateCartHandler={updateCartHandler}
      />
    </>
  );
}

export default SingleProductPage;
