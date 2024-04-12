import { Check, Save } from "@mui/icons-material";
import { Box, CircularProgress, Fab } from "@mui/material";
import { green } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { updateUser } from "../../../models/UserModel";

function UsersActions({ params, rowId, setRowId }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  console.log("Params i useractions: ", params.row);
  const { id, first_name, last_name, email, isAdmin } = params.row;
  console.log(id, first_name, last_name, email, isAdmin);

  const handleSubmit = async () => {
    setLoading(true);
    setTimeout(async () => {
      const result = await updateUser({
        id,
        first_name,
        last_name,
        email,
        isAdmin,
      });
      if (result) {
        setSuccess(true);
        setRowId(null);
      }
      setLoading(false);
    }, 1500);
  };

  useEffect(() => {
    if (rowId === params.id && success) setSuccess(false);
  }, [rowId]);

  return (
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
  );
}

export default UsersActions;
