import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";


const UserInfoContext = createContext();

export const UserInfoContextProvider = ({ children }) => {
  const [userinfo, setUserinfo] = useState();


  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setUserinfo(res.data))
      .catch((error) => console.log(error));
  }, []);

      

  const values = {
    userinfo,
    setUserinfo,
  };
  return <UserInfoContext.Provider value={values}>{children}</UserInfoContext.Provider>;
};


export const useUserInfo=()=>{
    const context= useContext(UserInfoContext)

    if(context===undefined){
        throw new Error("useUserInfo must be used within a UserInfoProvider")
    }

    return context
};