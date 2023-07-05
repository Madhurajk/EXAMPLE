import React from "react";
import { useUserContext } from "../../Context/userContext";
import Dashboard from "../Dashboard/Dashboard";

const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

export const HomePage = () => {
  const { user, logOut } = useUserContext();

  return(
    <>
    <Dashboard />
    <p>{currTime}</p>
    <p>{currDate}</p>
    
  </>
  )
};
