import { useNavigate } from 'react-router-dom';
import DateRoom from '../Booking/DateRoom';
import Grid from "@mui/material/Grid";
import { Box, IconButton, useTheme } from "@mui/material";

const BtnBook = () => {
  const navigate = useNavigate();


const userFormHandler = () =>{
        navigate("/clientdetailsform")
  }

    const dateRoomFormHandler = () =>{
    navigate("/dateroom")
      }

  return (
    <>
    <Box display="flex" justifyContent="space-between" p={5}>
    <Grid direction='row' container spacing={1}>
     <button onClick= {dateRoomFormHandler}>Booking Details</button>
     <button onClick= {userFormHandler}>Client Details</button>
     <Box display="flex" justifyContent="space-between" p={5}>
     <DateRoom />
     </Box>
        </Grid>
        </Box>
     </>
  );
};

export default BtnBook;
