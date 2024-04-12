import { Avatar, Box, Paper, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";

import moment from "moment";
import { gridClasses } from "@mui/system";
import { grey } from "@mui/material/colors";
import ProductsActions from "./ProductsActions";
import { getAllProducts } from "../../../models/ProductModel";
import AddProduct from "./AddProduct";
import FeedbackAlert from "../../../components/feedback/FeedbackAlert";

function Products({ setSelectedLink, link }) {
  const [products, setProducts] = useState();
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setSelectedLink(link);
    refreshProductList();
  }, []);

  const refreshProductList = () => {
    getAllProducts().then((result) => setProducts(result));
  };

  const columns = useMemo(
    () => [
      {
        field: "imageUrl",
        headerName: "Image URL",
        width: 150,
        renderCell: (params) => <Avatar src={params.row.imageUrl} />,
        filterable: false,
        editable: true,
      },
      {
        field: "title",
        headerName: "Title",
        width: 300,
        editable: true,
      },
      {
        field: "description",
        headerName: "Description",
        width: 300,
        editable: true,
      },
      { field: "price", headerName: "Price (SEK)", width: 200 },

      {
        field: "createdAt",
        headerName: "Created at",
        width: 200,
        renderCell: (params) =>
          moment(params.row.createdAt).format("YYYY-MM-DD H:mm"),
      },
      { field: "id", headerName: "ID", width: 100 },
      {
        field: "actions",
        headerName: "Actions",
        width: 200,
        type: "actions",
        renderCell: (params) => (
          <ProductsActions
            {...{ refreshProductList, params, rowId, setRowId }}
          />
        ),
      },
    ],
    [rowId]
  );

  return (
    <Box sx={{ height: 500, widht: "100%" }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Manage Products
      </Typography>
      {products && (
        <DataGrid
          columns={columns}
          rows={products}
          getRowId={(row) => row.id}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? grey[200] : grey[900],
            },
          }}
          onCellEditCommit={(params) => setRowId(params.id)}
        />
      )}
      {success ? (
        <FeedbackAlert
          setSuccess={setSuccess}
          severity="success"
          message="Success! New amazing bike added."
          width="50%"
        />
      ) : (
        <Typography
          variant="h4"
          component="h4"
          sx={{ textAlign: "center", mt: 5, mb: 3 }}
        >
          Add new products
        </Typography>
      )}

      <AddProduct
        sx={{ mb: 15 }}
        setSuccess={setSuccess}
        refreshProductList={refreshProductList}
      />
    </Box>
  );
}

export default Products;
