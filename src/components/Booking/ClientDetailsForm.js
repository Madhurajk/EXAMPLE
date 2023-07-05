import { useState } from 'react';
import './ClientDetailsFrom.css';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";


function ClientDetailsForm() {

    const [theme1, colorMode] = useMode();
    const [isSidebar, setIsSidebar] = useState(true);
  
  const [formData, setFormData] = useState({
    name: 'Madhuraj K',
    email: 'Madhu@lucidatechnologies.com',
    phone: '1234567890',
    notes: '',
    company : 'Lucida Technology Pvt Ltd',
    address:'',
    city: 'Bangalore',
    state:'Karnataka',
    zipcode:'',
    country:'India',
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
    <center> <h2>Client details </h2></center>
    <div className="ClientDetails">
      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <label htmlFor="name" className="form-label">Name</label>
          <input className="form-control" name="name" onChange={onChangeHandler} value={formData.name} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-label">Phone</label>
          <input className="form-control" name="phone" onChange={onChangeHandler} value={formData.phone} />
        </div>
        <div className="form-group">
          <label htmlFor="text" className="form-label">Text</label>
          <input className="form-control" name="text" onChange={onChangeHandler} value={formData.text} />
        </div>
        <div className="form-group">
          <label htmlFor="company" className="form-label">Company</label>
          <input className="form-control" name="company" onChange={onChangeHandler} value={formData.company} />
        </div>
        <div className="form-group">
          <label htmlFor="address" className="form-label">Address</label>
          <input className="form-control" name="address" onChange={onChangeHandler} value={formData.address} />
        </div>
        <div className="form-group">
          <label htmlFor="city" className="form-label">City</label>
          <input className="form-control" name="city" onChange={onChangeHandler} value={formData.city} />
        </div>
        <div className="form-group">
          <label htmlFor="state" className="form-label">State</label>
          <input className="form-control" name="state" onChange={onChangeHandler} value={formData.state} />
        </div>
        <div className="form-group">
          <label htmlFor="zipcode" className="form-label">ZipCode</label>
          <input className="form-control" name="zipcode" onChange={onChangeHandler} value={formData.zipcode} />
        </div>
        <div className="form-group">
          <label htmlFor="country" className="form-label">Country</label>
          <input className="form-control" name="country" onChange={onChangeHandler} value={formData.country} />
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

export default ClientDetailsForm;
