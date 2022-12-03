import React, { useState, useContext } from "react";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
export const AuthContext = React.createContext();
//custom hook that allows components to access context data

export function useAuth() {
  return useContext(AuthContext);
}
// sync -> if you have a user or not on login and logout
// It also exposes you lossley coupled auth functions
//
function AuthProvider({ children }) {
  // const history = useHistory();
  const [user, userSet] = useState("");
  const [loading, setLoading] = useState(false);

  const [forgetEmail, setForgetEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const error = () => toast.error("Email not registered with us !");
  const success = () =>
    toast.success("Successfully LoggedOut !", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  async function signUp(name, password, email, confirm) {
    let flag = false;
    try {
      let res = await axios.post("/api/v1/auth/signup", {
        name: name,
        password: password,
        confirmPassword: confirm,
        email,
      });

      userSet(res.data);
      flag = true;

      return flag;
    } catch (err) {
      let status = err.response.status;
      let statusText = err.response.statusText;

      if (status == 400) {
        console.log(statusText);
      } else if (status == 500) {
        console.log(statusText);
      }
      return flag;
    }
  }
  async function login(email, password) {
    let flag = false;
    try {
      setLoading(true);
      const res = await axios.post("/api/v1/auth/login", {
        email: email,
        password: password,
      });

      // console.log(res); // it have pasword
      // console.log(res.data);
      localStorage.setItem("omnifood_user", JSON.stringify(res.data));

      const lastUser = localStorage.getItem("omnifood_user");
      // console.log(JSON.parse(lastUser));

      // alert(res.data.result);
      userSet(res.data);
      flag = true;

      setLoading(false);
      return flag;
    } catch (err) {
      // console.log(err);
      const status = err.response.status;
      const statusMessage = err.response.statusText;
      if (status == 400) {
        // alert(res.data.result);
        // console.log(statusMessage);
      } else if (status == 401) {
        // it have both wrond paswword and emial or password is not entered
        // alert(res.data.result);
        // console.log(statusMessage);
      } else if (status == 404) {
        // console.log(statusMessage);
      } else if (status == 500) {
        // console.log(statusMessage);
      }
      setLoading(false);
      return flag;
    }
  }
  async function forgetPassword(email) {
    try {
      const res = await axios.patch("/api/v1/auth/forgetPassword", {
        email: email,
      });
      // console.log(res);
      setForgetEmail(email);

      return res;
    } catch (err) {
      let status = err.response.status;
      console.log(status);
      if (status == 400) {
        // console.log("sdkjfkjdfsdf");
        error();
        return false;
      }
    }
  }
  async function resetPassword(email, otp, password, confirmPassword) {
    try {
      const res = await axios.patch("/api/v1/auth/resetPassword", {
        email: email,
        otp: otp,
        password: password,
        confirmPassword: confirmPassword,
      });
      if (res) {
        setForgetEmail("");
        return res;
      }
    } catch (err) {
      // console.log(err.message);
    }
  }
  async function logout() {
    try {
      const res = await axios.post("/api/v1/auth/logout");
      console.log(user);
      localStorage.removeItem("user");
      localStorage.removeItem("omnifood_user");

      userSet(null);
      success();
    } catch (err) {
      console.log(err.message);
    }
  }
  async function letterSignup(data) {
    try {
      let res = await axios.post("/api/v1/newsLetter/signup", data);
      console.log(res);
    } catch (err) {
      console.log(err.message);
    }
  }

  function fEmail(e) {
    setForgetEmail(e.target.value);
  }

  function fOTP(e) {
    setOTP(e.target.value);
  }

  function fPassword(e) {
    setPassword(e.target.value);
  }
  function fconfirmPassword(e) {
    setConfirmPassword(e.target.value);
  }

  function setUser(val) {
    userSet(val);
  }
  const value = {
    user,
    login,
    signUp,
    logout,
    forgetPassword,
    resetPassword,
    forgetEmail,
    fEmail,
    fOTP,
    otp,
    fPassword,
    password,
    fconfirmPassword,
    confirmPassword,
    setUser,
    letterSignup,
  };
  return (
    <AuthContext.Provider value={value}>
      {/* if not loading show childrens  */}
      {/* {!loading && children} */}
      {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;
