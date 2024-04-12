import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { createProduct } from "../../../models/ProductModel";

function AddProduct({ setSuccess, refreshProductList }) {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    imageUrl: "",
  });

  const submitProductHandler = async () => {
    await createProduct(product).then((result) => console.log("crp: ", result));
    setProduct({
      title: "",
      description: "",
      price: null,
      imageUrl: "",
    });
    refreshProductList();
    setSuccess(true);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Paper elevation={3} sx={{ p: 3, width: { xs: "100%", md: "50%" } }}>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="title"
            label="Title"
            value={product.title}
            variant="outlined"
            fullWidth
            onChange={(event) => {
              setProduct({ ...product, title: event.target.value });
            }}
          />
          <TextField
            id="description"
            label="Description"
            value={product.description}
            multiline
            rows={4}
            fullWidth
            onChange={(event) => {
              setProduct({ ...product, description: event.target.value });
            }}
          />
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="price">Price</InputLabel>
            <OutlinedInput
              id="price"
              startAdornment={
                <InputAdornment position="start">SEK</InputAdornment>
              }
              label="Amount"
              onChange={(event) => {
                setProduct({ ...product, price: parseInt(event.target.value) });
              }}
              value={product.price}
            />
          </FormControl>
          <TextField
            id="image"
            label="Image URL"
            variant="outlined"
            value={product.imageUrl}
            fullWidth
            onChange={(event) => {
              setProduct({ ...product, imageUrl: event.target.value });
            }}
          />
          <Button variant="outlined" onClick={submitProductHandler}>
            Add product
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default AddProduct;
