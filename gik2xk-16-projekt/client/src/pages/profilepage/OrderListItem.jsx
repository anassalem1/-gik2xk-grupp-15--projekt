import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import moment from "moment";
import { InsertEmoticon, LocalShipping } from "@mui/icons-material";

function OrderListItem({ order }) {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "SEK",
  });
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <LocalShipping />
        </ListItemIcon>
        <ListItemText primary={`Order ID: ${order.ordernummer} `} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <InsertEmoticon />
            </ListItemIcon>
            <ListItemText
              primary={`Ordered at: ${moment(order.createdAt).format(
                "YYYY-MMM-DD"
              )}`}
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <InsertEmoticon />
            </ListItemIcon>
            <ListItemText primary={`${formatter.format(order.sum)}`} />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <InsertEmoticon />
            </ListItemIcon>
            <ListItemText
              primary={`Status: ${order.status ? "Delivered" : "Pending"}`}
            />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
}

export default OrderListItem;
