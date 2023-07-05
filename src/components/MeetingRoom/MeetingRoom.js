import { useState } from 'react';
import './MeetingRoom.css';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";


function MeetingRoom() {

  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [formData, setFormData] = useState({
    title: '',
    image: '',
    capacity: '',
    description: '',
    book:[''],
    priceperday:'',
    status: ['']
  })

  const onChangeHandler = (event) => {
    console.log(event)
      setFormData(() => ({
        ...formData,
        [event.target.name]: event.target.value
      }))
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    console.log(formData)
  }
  return (
    <>
<ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme1}>
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
          <input className="form-control" name="title" onChange={onChangeHandler} value={formData.title} />
        </div>
        <div className="form-group">
          <label htmlFor="image" className="form-label">Image</label>
          <input type='file' className="form-control" name="image" onChange={onChangeHandler} value={formData.image} />
        </div>
        <div className="form-group">
          <label htmlFor="capacity" className="form-label">Capacity</label>
          <input className="form-control" type='number' name="capacity" onChange={onChangeHandler} value={formData.capacity} />
        </div>
        <div className="form-group">
          <label htmlFor="description" className="form-label">Description</label>
          <input className="form-control" name="description" onChange={onChangeHandler} value={formData.description} />
        </div>
        <div className="form-group">
          <label htmlFor="book" className="form-label">Book For</label>
          <div>
            <div>
              <input type="checkbox" name="book" value="Multipledays" onChange={onChangeHandler} checked={formData.book.indexOf('Multipledays') !== -1} />
              <label htmlFor="Multipledays">Multiple days</label>
            </div>
            <div>
              <input type="checkbox" name="book" value="halfday" onChange={onChangeHandler} checked={formData.book.indexOf('halfday') !== -1} />
              <label htmlFor="halfday">Half-Day</label>
            </div>
            <div>
              <input type="checkbox" name="book" value="hour" onChange={onChangeHandler} checked={formData.book.indexOf('hour') !== -1} />
              <label htmlFor="user">Hour</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="priceperday" className="form-label">Price per day</label>
          <input className="form-control" name="priceperday" onChange={onChangeHandler} value={formData.priceperday} />
        </div>
        <div className="form-group">
          <label htmlFor="role" className="form-label">Status</label>
          <div>
            <div>
              <input type="radio" name="status" value="active" onChange={onChangeHandler} checked={formData.status === 'active'} />
              <label htmlFor="male">Active</label>
            </div>
            <div>
              <input type="radio" name="status" value="in-active" onChange={onChangeHandler} checked={formData.status === 'in-active'} />
              <label htmlFor="female">InActive</label>
            </div>
          </div>
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
      </ThemeProvider>
    </ColorModeContext.Provider>

    </>
  );
}

export default MeetingRoom;
