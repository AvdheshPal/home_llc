import React, {createContext, useState} from "react";

const AuthContext = createContext();

const ContextProvider = ({children})=>{
    const [token,setToken] = useState();
    const [uname,setUname] = useState();
return <> <AuthContext.Provider value={{token,setToken,uname,setUname}} >{children}</AuthContext.Provider> </>
}

export {AuthContext, ContextProvider}