import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword,  signInWithEmailAndPassword,} from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)

    const userNewCreate=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

     // user signIn
     const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
   const authInfo ={
        user,
        setUser,
        loading,
        userSignIn,
        userNewCreate
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;