import { Group, ShoppingBasket, Storefront } from "@mui/icons-material";
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { getAll } from "../../../models/UserModel";
import moment from "moment";
import { getAllOrders } from "../../../models/OrderModel";
import AreaOrdersSums from "./AreaOrdersSums";

function Main({ setSelectedLink, link }) {
  const [users, setUsers] = useState();
  const [orders, setOrders] = useState();
  useEffect(() => {
    setSelectedLink(link);
    getAll().then((user) => setUsers(user));
    getAllOrders().then((result) => setOrders(result));
  }, []);
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "grid" },
        gridTemplateColumns: "repeat(3,1fr)",
        gridAutoRows: "minmax(100px, auto)",
        gap: 3,
        textAlign: "center",
        flexDirection: "column",
      }}
    >
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total users</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Group sx={{ height: 100, widht: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">{users && users.length}</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4">Total Products</Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Storefront sx={{ height: 100, widht: 100, opacity: 0.3, mr: 1 }} />
          <Typography variant="h4">245</Typography>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, gridColumn: 3, gridRow: "1/4" }}>
        <Box>
          <Typography>Recently added users</Typography>
          <List>
            {users &&
              users.slice(-4).map((user, i) => (
                <Box key={user.id}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar alt={user.first_name} src={user.photoUrl} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={`${user.first_name} ${user.last_name}`}
                      secondary={`Time Created: ${moment(user.createdAt).format(
                        "YYYY-MM-DD H:mm:ss"
                      )}`}
                    />
                  </ListItem>
                  {i !== 3 && <Divider variant="inset" />}
                </Box>
              ))}
          </List>
        </Box>
        <Divider sx={{ mt: 3, mb: 3, opacity: 0.7 }} />
        <Box>
          <Typography>Recent orders</Typography>
          <List>
            {orders
              ? orders.slice(-4).map((order, i) => (
                  <Box key={order.ordernummer}>
                    <ListItem>
                      <ListItemAvatar>
                        <ShoppingBasket />
                      </ListItemAvatar>
                      <ListItemText
                        primary={`Order no: ${order.ordernummer} `}
                        secondary={`Time Created: ${moment(
                          order.createdAt
                        ).format("YYYY-MM-DD H:mm:ss")} \n Status: ${
                          order.status ? "Completed" : "Pending"
                        } - Sum: ${order.sum} SEK`}
                      />
                    </ListItem>
                    {i !== 3 && <Divider variant="inset" />}
                  </Box>
                ))
              : "No orders found"}
          </List>
        </Box>
      </Paper>
      <Paper elevation={3} sx={{ p: 2, gridColumn: "1/3" }}>
        <AreaOrdersSums />
      </Paper>
    </Box>
  );
}

export default Main;
