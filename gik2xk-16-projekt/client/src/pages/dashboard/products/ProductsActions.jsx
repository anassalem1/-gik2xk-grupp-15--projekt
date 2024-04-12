import { Check, Delete, Save, ThumbDown, ThumbUp } from "@mui/icons-material";
import { Box, CircularProgress, Fab } from "@mui/material";
import { green, red } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { deleteProduct, updateProduct } from "../../../models/ProductModel";

function ProductsActions({ refreshProductList, params, rowId, setRowId }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [deleteConfirm, setDeleteConfirm] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  const { id, title, description, price, imageUrl } = params.row;

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      const result = await updateProduct({
        id,
        title,
        description,
        price,
        imageUrl,
      });
      if (result) {
        setSuccess(true);
        setRowId(null);
      }
      refreshProductList();
      setLoading(false);
    }, 1500);
  };

  const handleConfirmDelete = async () => {
    setDeleteConfirm(false);
    setDeleteSuccess(true);
    await deleteProduct(id);
    setTimeout(() => {
      refreshProductList();
    }, 1000);
  };
  const handleAbortDelete = () => {
    setDeleteConfirm(false);
    setDeleteSuccess(false);
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
    <>
      <Box sx={{ m: 1, position: "relative" }}>
        {success ? (
          <Fab
            color="primary"
            sx={{
              widht: 40,
              height: 40,
              bgcolor: green[500],
              "&:hover": { bgcolor: green[700] },
            }}
          >
            <Check />
          </Fab>
        ) : (
          <Fab
            color="primary"
            sx={{
              widht: 40,
              height: 40,
            }}
            disabled={params.id !== rowId || loading}
            onClick={handleSubmit}
          >
            <Save />
          </Fab>
        )}
        {loading && (
          <CircularProgress
            size={52}
            sx={{
              color: green[500],
              position: "absolute",
              top: -6,
              left: 2,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1 }}>
        {deleteSuccess && !deleteConfirm ? (
          <Fab color="primary" sx={{ width: 40, height: 40 }}>
            <Check />
          </Fab>
        ) : (
          <Fab color="primary" sx={{ width: 40, height: 40 }}>
            {!deleteConfirm ? (
              <Delete onClick={() => setDeleteConfirm(true)} />
            ) : (
              <>
                <ThumbUp
                  sx={{ "&:hover": { color: green[700] } }}
                  onClick={handleConfirmDelete}
                />

                <ThumbDown
                  sx={{ "&:hover": { color: red[700] } }}
                  onClick={handleAbortDelete}
                />
              </>
            )}
          </Fab>
        )}
      </Box>
    </>
  );
}

export default ProductsActions;
