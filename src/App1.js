import React from 'react';
import Team from "./scenes/team";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./scenes/dashboard";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";
import Form from "./scenes/form";
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignUp/SignUp";
import { UserContextProvider } from "../src/Context/userContext";
import AddUserForms from './components/RoomForms/AddUserForms';
import ClientDetailsForm from './components/Booking/ClientDetailsForm';
import DateRoom from './components/Booking/DateRoom';
import MeetingRoom from './components/MeetingRoom/MeetingRoom';
import BtnBook from './components/BtnBook/BtnBook';

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
                <Route path="/clientdetailsform" element={<ClientDetailsForm />} />
                <Route path="/dateroom" element={<DateRoom />} />
                <Route path="/meetingroom" element={<MeetingRoom />} />
                <Route path="/btnbook" element={<BtnBook />} />
               </Routes>
    </UserContextProvider>
  );
}

export default App1;
