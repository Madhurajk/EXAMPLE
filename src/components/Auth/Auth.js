import React from "react";
import { useUserContext } from "../../Context/userContext";
import { HomePage } from "../HomePage/HomePage";
import SignIn from "../SignIn/SignIn";

const Auth = () => {
  const { user } = useUserContext();
  return <div>{user.isUserLoggedIn ? <HomePage /> : <SignIn />}</div>;
};

export default Auth;
