import api from "../api";

export async function getAll() {
  const result = await api.get("/users");

  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return [];
  }
}

export async function getOneUser(email) {
  const result = await api.get(`/users/${email}`);

  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return {};
  }
}

export async function updateUser(body) {
  const result = await api.put(`/users/`, body);
  if (result.status == 200) return result.data;
  else {
    console.log(result.status, " ", result.data);
    return {};
  }
}
