import React from 'react';
import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../global/Sidebar";
import { useState,useEffect } from 'react';
import { useDeleteRoomMutation, useRoomsQuery } from '../../API/rtkQueryApi';
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { DeleteForever } from '@mui/icons-material';


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [searchRoom, setSearchRoom] = useState('');
   const { data, error } = useRoomsQuery();
  const [deleteRoom] = useDeleteRoomMutation();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");


  const userFormHandler = () =>{
    navigate("/meetingroom")
     }
     const filteredRooms = data?.filter((response) =>
     response.title.toLowerCase().includes(searchRoom.toLowerCase())
 )
 const handleSearch = (event) => {
     setSearchRoom(event.target.value);
 };

 useEffect(() => {
  let timer;
  if (successMessage) {
      timer = setTimeout(() => {
          setSuccessMessage("");
      }, 1000);
  }
  return () => clearTimeout(timer);
}, [successMessage]);

 const navigateToEditRoom = (room) => {
     navigate(`/editmeetingroom/${room.id}`, { state: { room } })
 }

 const handleDelete = (roomId) => {
     deleteRoom(roomId).unwrap().then((res) => {
         setSuccessMessage("Room deleted successfully!");
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
      <Header
        title="Meeting Rooms"

        subtitle="Below is a list of all meeting rooms, You can add and edit rooms, change their status and see all bokings for each room"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
      >                  
      
       {successMessage && <div className="mt-3 alert alert-danger">{successMessage}</div>}

             <div className='d-flex flex-row p-2 mt-5'>
                        <button type="button" className='btn btn-primary' onClick= {userFormHandler}><i className='fa fa-plus'></i>  + Add Room</button>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input className="search ms-5 p-2 rounded"
                            type="text"
                            value={searchRoom}
                            onChange={handleSearch}
                            placeholder="Search"
                        />
                    </div>
                    <br /><br />

                    <div className='card shadow bg-body rounded mt-5 p-3'>
                        {filteredRooms?.length === 0 ? (
                            <div>No data found.</div>
                        ) : (
                            <table className="table table-striped border">
                                <thead>
                                    <tr>
                                        <th>Room</th>
                                        <th>Capacity</th>
                                        <th>Bokings</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredRooms?.map((room) => (
                                        <tr>
                                            <td>{room.title}</td>
                                            <td>{room.capacity}</td>
                                            <td>2</td>
                                            <td>{room.status}</td>
                                            <td><ModeEditOutlineRoundedIcon
                                        color="secondary"
                                        onClick={() => navigateToEditRoom(room)}
                                           sx={{ mr: 2, cursor: "pointer" }}
                                             />
                                             <DeleteForever
                                               onClick={() => handleDelete(room.id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
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

export default Contacts;
