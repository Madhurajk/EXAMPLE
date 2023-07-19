import { useState } from 'react';
import './MeetingRoom.css';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { useAddRoomsMutation } from '../../API/rtkQueryApi';
import { useNavigate } from "react-router-dom";

function MeetingRoom() {

  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [addRooms, error, isLoading] = useAddRoomsMutation()
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();


    const [title, setTitle] = useState('');
    const [capacity, setCapacity] = useState('');
    const [description, setDescription] = useState('');
    const [bookfor, setBookFor] = useState([]);
    const [priceperday, setPricePerDay] = useState('');
    const [selectedImage, setSelectedImage] = useState(null);

    const [status, setStatus] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    let image = null;
    if (selectedImage) {
        const reader = new FileReader();
        reader.onload = () => {
            image = reader.result;
            saveRoomWithImage(image);
        };
        reader.readAsDataURL(selectedImage);
    } else {
        saveRoomWithImage(image);
    }
};

const saveRoomWithImage = (image) => {
    const newRoom = {
        title,
        capacity: parseInt(capacity),
        description,
        bookfor,
        priceperday,
        status,
        image,
    };

    addRooms(newRoom).unwrap().then((res) => {
            window.location.reload();
        });
};

const handleCheckboxChange = (event) => {
  const value = event.target.value;
  if (event.target.checked) {
      setBookFor((prevSelectedOptions) => [...prevSelectedOptions, value]);
  } else {
      setBookFor((prevSelectedOptions) =>
          prevSelectedOptions.filter((option) => option !== value)
      );
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
        
        <div className="form-group">
                                <label className="form-label">Image</label>
                            </div>
                            <div className="form-control">
                                <input
                                    type="file"
                                    accept="/*"
                                    onChange={handleImageChange}
                                />
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
          <button className="btn" onClick={onSubmitHandler} >Save</button> 
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

export default MeetingRoom;
