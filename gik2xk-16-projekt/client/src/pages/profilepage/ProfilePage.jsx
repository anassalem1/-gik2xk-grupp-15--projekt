import React, { useContext } from "react";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import OrderList from "./OrderList";
import profileBg from "../../assets/img/bg-img/breadcumb2.jpg";
import { AuthContext } from "../../App";
import LoginModal from "../../components/login/LoginModal";
import moment from "moment";

function ProfilePage() {
  const { currentUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const { orders } = currentUser;

  return (
    <>
      {currentUser ? (
        <Box
          sx={{
            flexGrow: 1,
            p: 2,
            backgroundImage: `url(${profileBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "100vh",
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Paper sx={{ p: 2 }}>
                <Avatar
                  alt={`${currentUser.first_name} ${currentUser.last_name}`}
                  src={currentUser.photoUrl ? currentUser.photoUrl : ""}
                  sx={{ width: "15rem", height: "15rem" }}
                />
                <Typography variant="h5">{`${currentUser.first_name} ${currentUser.last_name}`}</Typography>
                <Typography variant="subtitle1">{currentUser.email}</Typography>
                <Typography variant="subtitle1">
                  Joined on {moment(currentUser.createdAt).format("YYYY-MM-DD")}
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => {
                    navigate("/products");
                  }}
                >
                  Back to shop
                </Button>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={8}>
              <Paper sx={{ p: 2 }}>
                <Typography variant="h5" gutterBottom>
                  My orders
                </Typography>
                <OrderList orders={orders} />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Box
          sx={{
            height: "100vh",
            backgroundImage: `url(${profileBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoginModal />
        </Box>
      )}
    </>
  );
}

export default ProfilePage;
