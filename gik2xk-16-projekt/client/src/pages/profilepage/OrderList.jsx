import * as React from "react";

import List from "@mui/material/List";

import OrderListItem from "./OrderListItem";

function OrderList({ orders }) {
  return (
    <List sx={{ width: "100%" }}>
      {orders &&
        orders.map((order) => (
          <OrderListItem key={order.ordernummer} order={order} />
        ))}
    </List>
  );
}

export default OrderList;
