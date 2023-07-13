import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { successMsg } from "../components/Auth/LoginError";
import { ToastContainer } from "react-toastify";

export const userContext = createContext({
  user: null,
  logIn: () => {},
  logOut: () => {},
});

const initialValue = { name: "Guest", isUserLoggedIn: false };

export const UserContextProvider = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(initialValue);
  const [error, setError] = useState(false);
  const [existingUserData, setExistingUserData] = useState([
    {
      Email: "Madhuraj@gmail.com",
      password: "madhu123",
    },
  ]);

  const logIn = (data) => {
    if (
      existingUserData.some(
        (user) =>
          user.Email === data.Email && user.password === data.password
      )
    ) {
      setUser({ name: data.Email, isUserLoggedIn: true });
      setError(false);
      navigate("/dashboard");
    } else {
      setError(true);
      navigate("/usersDashboard");
    }
  };

  const logOut = () => {
    setUser(initialValue);
    successMsg("User Logged Out Successfully");
    navigate("/");
  };

  const closeAlert = () => {
    setError(false);
  };

  const addUserData = (data) => {
    setExistingUserData([
      ...existingUserData,
      { username: data.Email, password: data.password },
    ]);

    successMsg("Account Created Successfully!");
  };

  return (
    <userContext.Provider
      value={{ user, logIn, logOut, error, closeAlert, addUserData }}
    >
      {props.children}
      <ToastContainer />
    </userContext.Provider>
  );
};

export const useUserContext = () => {
  const { user, logIn, logOut, error, closeAlert, addUserData } =
    useContext(userContext);

  return { user, logIn, logOut, error, closeAlert, addUserData };
};
