import { useState } from 'react';
import './AddUserForms.css';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";


function AddUserForms() {

  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    registationDateTime: '',
    status: '',
    role: ['']
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
           <center> <h2>Add user details </h2></center>
    <div className="addUser">
      <form>
        <div className="form-group">
          <label htmlFor="Name" className="form-label">Name</label>
          <input className="form-control" name="name" onChange={onChangeHandler} value={formData.name} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" onChange={onChangeHandler} value={formData.email} />
        </div>
        <div className="form-group">
          <label htmlFor="DateTime" className="form-label">Registrati Date/Time</label>
          <input className="form-control" type='date' onChange={onChangeHandler} value={formData.registationDateTime} />
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
          <label htmlFor="role" className="form-label">Role</label>
          <div>
            <div>
              <input type="checkbox" name="role" value="administration" onChange={onChangeHandler} checked={formData.role.indexOf('administration') !== -1} />
              <label htmlFor="administration">Administration</label>
            </div>
            <div>
              <input type="checkbox" name="role" value="manager" onChange={onChangeHandler} checked={formData.role.indexOf('manager') !== -1} />
              <label htmlFor="manager">Manager</label>
            </div>
            <div>
              <input type="checkbox" name="role" value="user" onChange={onChangeHandler} checked={formData.role.indexOf('user') !== -1} />
              <label htmlFor="user">User</label>
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

export default AddUserForms;
