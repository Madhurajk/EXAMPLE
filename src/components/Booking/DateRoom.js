import { useState } from 'react';
import './DateRoom.css';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import Equipment from './Equipment';
import Food from './Food';


function DateRoom() {

  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const currDate = new Date().toLocaleDateString();

  const [ip, setIp] = useState();
  const getIp = async () => {
    const response = await fetch("https://ipapi.co/json/")
    const data = await response.json()
    setIp(data.ip)
  }


  const [formData, setFormData] = useState({

    createdOn:'',
    ipAddress:'',
    date:'',
    attendees:'6',
    room:['fullday'],
    duration:'',
    payment:'1000.00',
    roomprice:'2000.00',
    equipmentprice:'100.00',
    foodprice:'250.00',
    subtotal:'2580.00',
    tax:'28.23',
    total:'10000.01',
    deposit:'500.00',
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
           <center> <h2>Add a new booking </h2></center>
    <div className="DateRoom">
      <form>
        <div className="form-group">
          <label htmlFor="createdOn" className="form-label">Created On </label>
          <input className="form-control" name="createdOn" onChange={onChangeHandler} value={currDate} />
        </div>
        <div className="form-group">
          <label htmlFor="ipAddress" className="form-label">IP Address </label>
          <input className="form-control" name="ipAddress" onChange={onChangeHandler} value={ip} />
        </div>
        <div className="form-group">
          <label htmlFor="DateTime" className="form-label">Date</label>
          <input className="form-control" type='date' onChange={onChangeHandler} value={formData.date} />
        </div>
        <div className="form-group">
          <label htmlFor="attendees" className="form-label">Attendees</label>
          <input className="form-control" name="attendees" onChange={onChangeHandler} value={formData.attendees} />
        </div>
        <div className="form-group">
          <label htmlFor="room" className="form-label">Room</label>
          <div>
            <div>
              <input type="checkbox" name="room" value="LargeConferenceRoom" onChange={onChangeHandler} checked={formData.room.indexOf('LargeConferenceRoom') !== -1} />
              <label htmlFor="LargeConferenceRoom">Large Conference Room</label>
            </div>
            <div>
              <input type="checkbox" name="room" value="SmallConferenceRoom" onChange={onChangeHandler} checked={formData.room.indexOf('SmallConferenceRoom') !== -1} />
              <label htmlFor="SmallConferenceRoom">Small Conference Room</label>
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="duration" className="form-label">Duration</label>
          <div>
            <div>
              <input type="radio" name="duration" value="fullday" onChange={onChangeHandler} checked={formData.duration === 'fullday'} />
              <label htmlFor="fullday">Full Day</label>
            </div>
            <div>
              <input type="radio" name="duration" value="halfdaye" onChange={onChangeHandler} checked={formData.duration === 'in-active'} />
              <label htmlFor="halfday">Half Day</label>
            </div>
          </div>
        </div>
        <div className="payment">
        <div className="form-group">
          <label htmlFor="payment" className="form-label">Payment </label>
          <input className="form-control" name="payment" onChange={onChangeHandler} value={formData.payment} />
        </div>
        <div className="form-group">
          <label htmlFor="roomprice" className="form-label">Room Price </label>
          <input className="form-control" name="roomprice" onChange={onChangeHandler} value={formData.roomprice} />
        </div>
        <div className="form-group">
          <label htmlFor="equipmentprice" className="form-label">Equipment Price </label>
          <input className="form-control" name="equipmentprice" onChange={onChangeHandler} value={formData.equipmentprice} />
        </div>
        <div className="form-group">
          <label htmlFor="foodprice" className="form-label">Food & Drinks Price </label>
          <input className="form-control" name="foodprice" onChange={onChangeHandler} value={formData.foodprice} />
        </div>
        <div className="form-group">
          <label htmlFor="subtotal" className="form-label">Sub-total  </label>
          <input className="form-control" name="subtotal" onChange={onChangeHandler} value={formData.subtotal} />
        </div>
        <div className="form-group">
          <label htmlFor="tax" className="form-label">Tax </label>
          <input className="form-control" name="tax" onChange={onChangeHandler} value={formData.tax} />
        </div>
        <div className="form-group">
          <label htmlFor="total" className="form-label">Total </label>
          <input className="form-control" name="total" onChange={onChangeHandler} value={formData.total} />
        </div>
        <div className="form-group">
          <label htmlFor="deposit" className="form-label">Deposit </label>
          <input className="form-control" name="deposit" onChange={onChangeHandler} value={formData.deposit} />
        </div>
        </div>

        <div className="form-group">
          <button className="btn" onClick={onSubmitHandler} >Save</button> 
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="btn" type="clear" >Clear</button>
        </div>
      </form>
      <br /><br />
      <Equipment />
      <br /><br />
    <Food />
    </div>
    </Box>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>

    </>
  );
}

export default DateRoom;
