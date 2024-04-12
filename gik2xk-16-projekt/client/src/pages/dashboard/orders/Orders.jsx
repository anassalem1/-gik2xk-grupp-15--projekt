import React, { useEffect } from "react";

function Orders({ setSelectedLink, link }) {
  useEffect(() => {
    setSelectedLink(link);
  }, []);
  return <div>Orders</div>;
}

export default Orders;
