import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";
import AddUserForms from '../../components/RoomForms/AddUserForms';
import { useNavigate } from 'react-router-dom';
import { ColorModeContext, useMode } from "../../theme";
import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 

   const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);


 const navigate = useNavigate();

  const userFormHandler = () =>{
        navigate("/addUserForm")
  }

  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // {
    //   field: "phone",
    //   headerName: "Phone Number",
    //   flex: 1,
    // },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { role } }) => {
        return (          
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              role === "admin"
                ? colors.greenAccent[600]
                : role === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="2px"
          >
            {role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {role === "manager" && <SecurityOutlinedIcon />}
            {role === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {role}
            </Typography>
          </Box>
        );
      },
    },
    {
      field: "status",
      headerName: "Status",
      type: "string",
      headerAlign: "left",
      align: "left",
    },
    {
      headerName: "Edit",
      headerAlign: "left",
      align: "left",
      flex: 1,
      renderCell: ({ row: { Edit } }) => {
        return (          
          <ModeEditOutlineRoundedIcon
          color="secondary"
          onClick={() => {
            editUsers(mockDataTeam);
          }}
          sx={{ mr: 2, cursor: "pointer" }}
        />
        );
     },
    },

  ];

  return (
<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme1}>
        <CssBaseline />
        <div className="app">
          <main className="content" style={{ display: "flex" }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>


    <Box m="20px">
      <Header title="Users" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[500],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[300],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[500],
          },
          "& .MuiDataGrid-row": {
            borderBottom: "none !important",
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[500]} !important`,
          },
        }}
      >
        
        <button onClick= {userFormHandler}>Add User</button>

        <br /> <br />

        <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} />
      </Box>
    </Box>
    </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
};

export default Team;
