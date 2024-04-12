import { Button, Modal, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../App";
import { getOneUser } from "../../models/UserModel";
import FeedbackAlert from "../feedback/FeedbackAlert";

function LoginModal() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [failed, setFailed] = useState(false);
  const [userNotFound, setUserNotFound] = useState(false);
  const { setIsLoggedIn, setCurrentUser } = useContext(AuthContext);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginSubmit = () => {
    setFailed(false);
    setUserNotFound(false);
    getOneUser(email).then((user) => {
      if (user) {
        if (user.email === email && user.password === password) {
          setCurrentUser(user);
          setIsLoggedIn(true);
          setFailed(false);
          setUserNotFound(false);
          handleClose();
        } else {
          setFailed(true);
        }
      } else {
        setUserNotFound(true);
      }
    });
  };

  return (
    <>
      <Button variant="contained"  onClick={handleOpen}>
        Login
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          {userNotFound && (
            <FeedbackAlert severity="error" message="User not found." />
          )}
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            margin="normal"
            value={email}
            onChange={handleEmailChange}
          />
          {failed && (
            <FeedbackAlert severity="error" message="Wrong password." />
          )}
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleLoginSubmit}
              sx={{ ml: 2 }}
            >
              Login
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

export default LoginModal;
