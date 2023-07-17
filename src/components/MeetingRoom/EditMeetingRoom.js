import { useState } from 'react';
import './MeetingRoom.css';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { useEditRoomMutation } from '../../API/rtkQueryApi';
import { useLocation } from "react-router-dom";


function EditMeetingRoom() {

  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [editroom, { isLoading }] = useEditRoomMutation();
  const location = useLocation();
  const { room } = location.state;


    const [title, setTitle] = useState(room?.title);
    const [capacity, setCapacity] = useState(room?.capacity);
    const [description, setDescription] = useState(room?.description);
    const [bookfor, setBookFor] = useState(room.bookfor || []);
    const [priceperday, setPricePerDay] = useState(room?.priceperday);
    const [status, setStatus] = useState(room?.status);
    const [selectedImage, setSelectedImage] = useState(null);


const onSubmitHandler = (event) => {
    event.preventDefault();
    const updatedRoom = {  ...room, title, capacity, description, bookfor, priceperday, status,
      image: selectedImage ? URL.createObjectURL(selectedImage) : room.image, };
    editroom(updatedRoom).unwrap().then((response) => {
        window.location.reload();
    })

}
const handleCheckboxChange = (event) => {
    const optionValue = event.target.value;
    if (event.target.checked) {
        setBookFor([...bookfor, optionValue]);
    } else {
        setBookFor(bookfor.filter((option) => option !== optionValue));
    }
};
const handleImageChange = (e) => {
  const file = e.target.files[0];
  setSelectedImage(file);
};
  return (
    <>
<ColorModeContext.Provider value={colorMode}>
      {/* <ThemeProvider theme={theme1}> */}
        <CssBaseline />
        <div className="app">
          <main className="content" style={{ display: "flex" }}>
            {isSidebar && <Sidebar isSidebar={isSidebar} />}
            <Box flexGrow={1}>
          <br />
           <center> <h2>Add a new meeting room </h2></center>
    <div className="MeetingRoom">
      <form>
        <div className="form-group">
          <label htmlFor="title" className="form-label">Title</label>
          <input className="form-control" name="title" value={title} onChange={(event) => setTitle(event.target.value)} />
        </div>
        <div className="col-2 mb-4">
                                <label className="fs-5">Image</label>
                            </div>
                            <div className="col-10 mb-4">
                                {room.image && (
                                    <img src={room.image} alt="Room" className="img-fluid" width={"200px"} style={{ marginBottom: '10px' }}/>
                                )}
                                <input type="file" onChange={handleImageChange} accept="image/*" className="mx-4" />
                            </div>
        <div className="form-group">
          <label htmlFor="capacity" className="form-label">Capacity</label>
          <input className="form-control" type='number' name="capacity" value={capacity} onChange={(event) => setCapacity(event.target.value)} />
        </div>
        <div className="form-group">
        <label htmlFor="title" className="form-label">Description</label>
        <textarea class="form-control form-control-lg" id="exampleFormControlTextarea1" rows="3" value={description} onChange={(event) => setDescription(event.target.value)}></textarea>
         </div>

         <div className="form-group">
          <label htmlFor="book" className="form-label">Book For</label>
          <div>
            <div>
              <input type="checkbox" name="book" value="Multipledays" checked={bookfor.includes("multipledays")}
                                onChange={handleCheckboxChange} />
              <label htmlFor="Multipledays">Multiple days</label>
            </div>
            <div>
              <input type="checkbox" name="book" value="halfday" checked={bookfor.includes("halfday")}
                                onChange={handleCheckboxChange} />
              <label htmlFor="halfday">Half-Day</label>
            </div>
            <div>
              <input type="checkbox" name="book" value="hour" checked={bookfor.includes("hour")}
                                onChange={handleCheckboxChange} />
              <label htmlFor="user">Hour</label>
            </div>
          </div>
        </div>

         <div className="form-group">
          <label htmlFor="priceperday" className="form-label">Price per day</label>
          <input className="form-control" name="priceperday" value={priceperday} onChange={(event) => setPricePerDay(event.target.value)} />
        </div>

        <div className="form-group">
        <label htmlFor="priceperday" className="form-label">Status</label>
          <input className="form-control" name="status" value={status} onChange={(event) => setStatus(event.target.value)} />
        </div>        
        <div className="form-group">
          <button className="btn" onClick={onSubmitHandler} >Update</button> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn" type="clear" >Clear</button>
        </div>
      </form>
    </div>
    </Box>
          </main>
        </div>
      {/* </ThemeProvider> */}
    </ColorModeContext.Provider>

    </>
  );
}

export default EditMeetingRoom;
