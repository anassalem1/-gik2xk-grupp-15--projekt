import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import CloseIcon from "@mui/icons-material/Close";

export default function FeedbackAlert({
  severity,
  setSuccess,
  message,
  width,
}) {
  const [open, setOpen] = React.useState(true);

  return (
    <Box
      sx={{
        width: {
          xs: "100%",
          sm: "100%",
          md: width,
        },
      }}
    >
      <Collapse in={open}>
        <Alert
          severity={severity}
          action={
            <IconButton
              aria-label="close"
              size="small"
              onClick={() => {
                setOpen(false);
                if (setSuccess) {
                  setSuccess(false);
                }
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
