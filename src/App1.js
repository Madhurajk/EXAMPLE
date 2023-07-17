import React from 'react';
import Team from "./scenes/users/users";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard/dashboard";
import Contacts from "./scenes/rooms/rooms";
import Invoices from "./scenes/booking/booking";
import Form from "./scenes/form";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { UserContextProvider } from "../src/Context/userContext";
import AddUserForms from './components/RoomForms/AddUserForms';
import DateRoom from './components/Booking/DateRoom';
import MeetingRoom from './components/MeetingRoom/MeetingRoom';
import EditUserForms from './components/RoomForms/EditUserForm';
import EditMeetingRoom from './components/MeetingRoom/EditMeetingRoom';
import EditDateBookingRoom from './components/Booking/EditDateBookingRoom';
import UserBookRoom from './userMadule/bookRoom/UserBookRoom';
import UserDashboard from './userMadule/userDashboard/UserDashboard';
import UserConfirmation from './userMadule/UserConfirmation';

function App1() {
  return (
    <UserContextProvider>
              <Routes>
                <Route path="/" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/addUserForm" element={<AddUserForms />} />
                <Route path="/dateroom" element={<DateRoom />} />
                <Route path="/meetingroom" element={<MeetingRoom />} />
                <Route path="/editUserForms/:id" element={<EditUserForms />}></Route>
                <Route path="/editmeetingroom/:id" element={<EditMeetingRoom />}></Route>
                <Route path="/editdatebookingroom/:id" element={<EditDateBookingRoom />}></Route>
                <Route path="/bookroom/:id" element={<UserBookRoom />}></Route>
                <Route path="/usersDashboard" element={<UserDashboard />}></Route>
                <Route path="/userconfirmation" element={<UserConfirmation />}></Route>

               </Routes>
    </UserContextProvider>
  );
}

export default App1;
