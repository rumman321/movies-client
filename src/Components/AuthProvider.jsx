import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword,  GoogleAuthProvider,  onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile,} from "firebase/auth";
import { auth } from '../Firebase/firebase.init';

export const AuthContext=createContext()
const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)
    console.log(user)


    // google
    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{

        }).catch(err=> alert("ERROR ", err.message))
    }

    const userNewCreate=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

     // user signIn
     const userSignIn=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const upDateUserProfile=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth)
              
    }

    useEffect(()=>{
        const onSubscribe=onAuthStateChanged(auth,(currentUser)=>{
            if(currentUser){
                setUser(currentUser)
                setLoading(false)
            }
            else{
                setLoading(false)
            }
            return ()=>onSubscribe()
        })

        
    },[user])

   const authInfo ={
        user,
        setUser,
        loading,
        userSignIn,
        userNewCreate,
        logOut,
        handleGoogleSignIn,
        upDateUserProfile
    }
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;