import api from "../api";

export async function getAllOrders() {
  const result = await api.get("/orders");

  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return [];
  }
}

export async function getOrder(id) {
  const result = await api.get(`orders/${id}`);

  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return [];
  }
}

export async function createOrder(body) {
  const result = await api.post("/orders", body);
  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return {};
  }
}

export async function updateOrder(id, body) {
  const result = await api.put(`/orders/${id}`, body);
  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return {};
  }
}
