import { Button, Rating } from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";

function Product({ product, updateCartHandler }) {
  const { id, title, imageUrl, price, ratings } = product;
  const [rating, setRating] = useState(0);

  useEffect(() => {
    let values = 0;
    ratings.forEach((rating) => {
      values += rating.rating;
    });
    setRating(values / ratings.length);
  }, [ratings]);

  const formatter = new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
  });
  return (
    <>
    <Card
      className="flex flex-col"
      sx={{ flexBasis: { xs: "100%", sm: "45%", md: "30%", lg: "22%" }, p: 1 }}
    >
      <Link
        to={`/products/${id}`}
        className="px-2 flex flex-col justify-between min-h-[350px]"
      >
        <img src={imageUrl} />
        <h2>{title}</h2>
        <h3>{formatter.format(price)}</h3>
        <Rating
          name="read-only"
          value={rating}
          precision={1.0}
          size="small"
          readOnly
          className="mb-2"
        />
      </Link>
      <Button
        onClick={() => updateCartHandler(product)}
        variant="contained"
        
      >
        Add to cart
      </Button>
    </Card>
  
    
    </>
  );
}

export default Product;
