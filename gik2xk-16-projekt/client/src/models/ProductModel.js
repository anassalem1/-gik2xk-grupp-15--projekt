import api from "../api";

export async function getAllProducts() {
  const result = await api.get("/products");

  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return [];
  }
}

export async function getOne(id) {
  const result = await api.get(`/products/${id}`);

  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return {};
  }
}

export async function updateProduct(body) {
  const result = await api.put(`/products/`, body);
  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return {};
  }
}

export async function createProduct(body) {
  const result = await api.post("/products", body);
  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return {};
  }
}

export async function deleteProduct(id) {
  const result = await api.delete(`/products/${id}`);
  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return {};
  }
}
