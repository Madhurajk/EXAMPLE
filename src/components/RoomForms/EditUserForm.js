import { useState, useEffect } from 'react';
import './AddUserForms.css';
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import Sidebar from "../../scenes/global/Sidebar";
import { Box, Typography, useTheme } from "@mui/material";
import { useEditUserMutation } from '../../API/rtkQueryApi';
import { useLocation, useNavigate } from "react-router-dom";



function EditUserForms() {

  const [theme1, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const [successMessage, setSuccessMessage] = useState("");

  const location = useLocation();
 const { user } = location.state;


  useEffect(() => {
    let timer;
    if (successMessage) {
      timer = setTimeout(() => {
        setSuccessMessage("");
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [successMessage]);

  const [edituser, { isLoading }] = useEditUserMutation();

    const [name, setName] = useState(user?.name);
    const [email, setEmail] = useState(user?.email);
    const [role, setRole] = useState(user?.role);
    const [status, setStatus] = useState(user?.status);

const onSubmitHandler = (event) => {
  event.preventDefault();
  const upadtUser = {
   ...user, name,email,role,status};
  edituser(upadtUser).unwrap().then((res) => {
      console.log("Users", res)
      setSuccessMessage("User updated successfully!");
      window.location.reload();
  })
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
          <input className="form-control" name="name" value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input className="form-control" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="role" className="form-label">Role</label>
          <input className="form-control" name="role" value={role} onChange={(event) => setRole(event.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="status" className="form-label">Status</label>
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
      </ThemeProvider>
    </ColorModeContext.Provider>

    </>
  );
}

export default EditUserForms;
