import React from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useNavigate } from 'react-router-dom';
import { ColorModeContext, useMode } from "../../theme";
import { useState,useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { useGetUsersQuery, useDeleteUserMutation } from "../../API/rtkQueryApi";
import "./users.css"
import { DeleteForever } from '@mui/icons-material';


const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); 
 const navigate = useNavigate();

 const userFormHandler = () =>{
       navigate("/addUserForm")
 }

   const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [searchUser, setSearchUser] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');

  const {data, error} = useGetUsersQuery();
  const[deleteUser] = useDeleteUserMutation();
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [successMessage]);


let filteredUsers = data;

const handleStatusChange = (status) => {
  setSelectedStatus(status);
};

const handleSearch = (event) => {
  setSearchUser(event.target.value);
};

filteredUsers = filteredUsers?.filter((response) =>
        response.name.includes(searchUser)
    )

if (selectedStatus !== 'All') {
  filteredUsers = filteredUsers.filter((user) => user.status === selectedStatus);
}
const navigateToEditUser = (user) => {
  navigate(`/editUserForms/${user.id}`, { state: { user } });
}
const handleDelete = (userId) => {
  deleteUser(userId).unwrap().then((res)=>{
      setSuccessMessage("User deleted successfully!");
      window.location.reload();
  })
}

  return (
<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme1}>
        <CssBaseline />
        <div className="app">
          <main className="content" style={{ display: "flex" }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>


    <Box m="20px">
      <Header title="Users List" subtitle="Below is a list of all users, You can add new users details and change user status" />
      <Box
        m="40px 0 0 0"
        height="75vh"
         >
<div>
         {successMessage && <div>{successMessage}</div>}
                    <div>
                        <button type="button"  className='btn btn-primary' onClick={userFormHandler}><i className='fa fa-plus' ></i> +Add Users</button>
                        <br /><br /><br />
                        <Box>
                        <input className="search ms-5 p-2 rounded"
                            type="text"
                            value={searchUser}
                            onChange={handleSearch}
                            placeholder="Search"
                        />
                        </Box>
                    </div>
                    <Box
                    m="20px 0 0 0"
                    height="3vh"
                    display="flex"  alignItems="center"
                    >
                    <button
                            type="button"
                            className={`rounded ${selectedStatus === 'All' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('All')}> All
                        </button>
                        <button
                            type="button"
                            className={`rounded ${selectedStatus === 'Active' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Active')}>
                            Active
                        </button>
                        <button
                            type="button"
                            className={`rounded ${selectedStatus === 'InActive' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('InActive')}>
                                InActive
                        </button>  
                        </Box>

                    <div>
                        {filteredUsers?.length === 0 ? (
                            <div>No data found.</div>
                        ) : (
                            <table >
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredUsers?.map((user) => (
                                        <tr key={user.id}>

                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.role}</td>
                                            <td>{user.status}</td>
                                            <td>
                                            <ModeEditOutlineRoundedIcon
                                        color="secondary"
                                        onClick={() => navigateToEditUser(user)}
                                           sx={{ mr: 2, cursor: "pointer" }}
                                             />
                                             <DeleteForever
                                               onClick={() => handleDelete(user.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                    </div>
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
