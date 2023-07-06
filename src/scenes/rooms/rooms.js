import React from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";
import { useState } from 'react';

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const navigate = useNavigate();
  const userFormHandler = () =>{
    navigate("/meetingroom")
     }

  const columns = [    { field: "id", headerName: "ID", flex: 0.5 },    { field: "registrarId", headerName: "Image",  flex: 1,      cellClassName: "name-column--cell no-border-bottom", },    {      field: "name",      headerName: "Room",      flex: 1,      cellClassName: "name-column--cell no-border-bottom",    },    {      field: "age",      headerName: "Capacity",      type: "number",      headerAlign: "left",      align: "left",    },    { field: "phone", headerName: "Booking", flex: 1 }, { field: "address", headerName: "Status", flex: 1 }, { field: "zipCode", headerName: "", flex: 1 },  ];

  return (
<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme1}>
        <CssBaseline />
        <div className="app">
          <main className="content" style={{ display: "flex" }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>


    <Box m="20px">
      <Header
        title="Meeting Rooms"

        subtitle="Below is a list of all meeting rooms, You can add and edit rooms, change their status and see all bokings for each room"
      />
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
          "& .no-border-bottom": {
            borderBottom: "none !important",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[100],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[900]} !important`,
          },
        }}
      >

     <button onClick= {userFormHandler}>+ Add Room</button>
        <br /> <br />      
        <DataGrid
          rows={mockDataContacts}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
      </Box>
    </Box>
    
    </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default Contacts;
