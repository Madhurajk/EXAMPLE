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
import { useBookingsQuery, useDeleteRoomMutation, useEditRoomMutation, useRoomsQuery, } from '../../API/rtkQueryApi';
import ModeEditOutlineRoundedIcon from "@mui/icons-material/ModeEditOutlineRounded";
import { DeleteForever } from '@mui/icons-material';
import InputBase from "@mui/material/InputBase";
import { IconButton} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from 'react-router-dom';


const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [searchRoom, setSearchRoom] = useState('');
   const { data, error } = useRoomsQuery();
  const [deleteRoom] = useDeleteRoomMutation();
  const [editroom] = useEditRoomMutation();
  const { data: bookingData, error: bookingError } = useBookingsQuery();
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [selectedStatus, setSelectedStatus] = useState('All');
  let  filteredRooms;


  const userFormHandler = () =>{
    navigate("/meetingroom")
     }
  

 const handleSearch = (event) => {
     setSearchRoom(event.target.value);
 };
 const handleStatusChange = (status) => {
  setSelectedStatus(status);
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

filteredRooms = data?.map((response)=> {
  const bookingsCount = bookingData?.filter((booking) => booking.title === response.title).length;
  return { ...response, bookingsCount };
})?.filter((response) =>
  response.title.toLowerCase().includes(searchRoom.toLowerCase())
)

 const navigateToEditRoom = (room) => {
     navigate(`/editmeetingroom/${room.id}`, { state: { room } })
 }

 const handleDelete = (roomId) => {
     deleteRoom(roomId).unwrap().then((res) => {
         setSuccessMessage("Room deleted successfully!");
         window.location.reload();
     })
 }
const editStatus = (room, newStatus) => {
        const updatedRoom = { ...room, status: newStatus };
        return editroom(updatedRoom);
      };
      if (selectedStatus !== 'All') {
        filteredRooms = filteredRooms.filter((room) => room.status === selectedStatus);
    }


      const handleEditStatus = async (room, newStatus) => {
        try {
          await editStatus(room, newStatus);
          setSuccessMessage("Status updated successfully!");
        } catch (error) {
        }
      };


  return (
<ColorModeContext.Provider value={colorMode}>
      {/* <ThemeProvider theme={theme1}> */}
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
                        <Box display="flex" justifyContent="space-between" p={2}>
                          <Box
        display="flex"
        backgroundColor={colors.greenAccent[700]}
        borderRadius="1px"
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" value={searchRoom}
                            onChange={handleSearch}/>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      </Box>
      </div>
              <div class="d-grid gap-2 d-md-flex justify-content-md-end">&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
              &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                <button

                            type="button"
                             style={{
                              backgroundColor:"aliceblue"
                            }}
                            className={`rounded btn-lg p-2 ${selectedStatus === 'All' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('All')}> All
                        </button>&emsp;&emsp;
                        <button
                            type="button"
                            style={{
                              backgroundColor:"pink"
                            }}
                            className={`rounded ${selectedStatus === 'Active' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('Active')}>
                            Active
                        </button>&emsp;&emsp;
                        <button
                            type="button"
                            style={{
                              backgroundColor:"red"
                            }}
                            className={`rounded ${selectedStatus === 'InActive' ? 'active' : ''}`}
                            onClick={() => handleStatusChange('InActive')}>
                                InActive
                        </button>&emsp;&emsp;
                       
                    </div>
                    <br />
                    <div className='card shadow bg-body rounded mt-5 p-3'>
                        {filteredRooms?.length === 0 ? (
                            <div>No data found.</div>
                        ) : (
                            <table className="table table-striped border">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Room</th>
                                        <th>Capacity</th>
                                        <th>Bokings</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredRooms?.map((room) => (
                                        <tr>
                                            <td><center><img src={room.image} width={"150px"}/></center></td>
                                            <td>{room.title}</td>
                                            <td>{room.capacity}</td>
                                            <td><Link to="/invoices" style={{textDecoration:"none", fontWeight:"bold"}}>{room.bookingsCount}</Link></td>
                                            <td contentEditable="true"  onBlur={(e) => handleEditStatus(room, e.target.textContent)}>{room.status}</td>
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
      {/* </ThemeProvider> */}
    </ColorModeContext.Provider>
  );
};

export default Contacts;
