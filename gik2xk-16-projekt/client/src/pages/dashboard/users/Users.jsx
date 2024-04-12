import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useMemo, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getAll } from "../../../models/UserModel";
import moment from "moment";
import { gridClasses } from "@mui/system";
import { grey } from "@mui/material/colors";
import UsersActions from "./UsersActions";

function Users({ setSelectedLink, link }) {
  const [users, setUsers] = useState();
  const [pageSize, setPageSize] = useState(5);
  const [rowId, setRowId] = useState(null);
  useEffect(() => {
    setSelectedLink(link);
    getAll().then((result) => setUsers(result));
  }, []);

  const columns = useMemo(
    () => [
      {
        field: "photoUrl",
        headerName: "Avatar",
        width: 60,
        renderCell: (params) => <Avatar src={params.row.photoUrl} />,
        filterable: false,
      },
      {
        field: "first_name",
        headerName: "First name",
        width: 200,
        editable: true,
      },
      {
        field: "last_name",
        headerName: "Last name",
        width: 200,
        editable: true,
      },
      { field: "email", headerName: "E-mail", width: 350 },
      {
        field: "isAdmin",
        headerName: "Admin",
        width: 100,
        type: "boolean",
        editable: true,
      },
      {
        field: "createdAt",
        headerName: "Created at",
        width: 220,
        renderCell: (params) =>
          moment(params.row.createdAt).format("YYYY-MM-DD H:mm"),
      },
      { field: "id", headerName: "ID", width: 60 },
      {
        field: "actions",
        headerName: "Actions",
        type: "actions",
        renderCell: (params) => (
          <UsersActions {...{ params, rowId, setRowId }} />
        ),
      },
    ],
    [rowId]
  );

  return (
    <Box sx={{ height: 500, widht: "100%" }}>
      <Typography
        variant="h3"
        component="h3"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Manage Users
      </Typography>
      {users && (
        <DataGrid
          columns={columns}
          rows={users}
          getRowId={(row) => row.id}
          rowsPerPageOptions={[5, 10, 20]}
          pageSize={pageSize}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          getRowSpacing={(params) => ({
            top: params.isFirstVisible ? 0 : 5,
            bottom: params.isLastVisible ? 0 : 5,
          })}
          sx={{
            [`& .${gridClasses.row}`]: {
              bgcolor: (theme) =>
                theme.palette.mode === "light" ? grey[200] : grey[900],
            },
          }}
          onCellEditCommit={(params) => setRowId(params.id)}
        />
      )}
    </Box>
  );
}

export default Users;
