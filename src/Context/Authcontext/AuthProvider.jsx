import React, { useEffect } from 'react';
import AuthContext from './AuthContext';
import { useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../../Firebase/firebase.init';


// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {
   const [user,setuser]=useState(null)
   const [loader,setloader]=useState(true)

   const googleProvider = new GoogleAuthProvider()

   const CreateUser =(email,password)=>{
    setloader(true)
    return createUserWithEmailAndPassword(auth,email,password)
   }
   const LogInUser =(email,password)=>{
    setloader(true)
    return signInWithEmailAndPassword(auth,email,password) 
   }

   const googleSignIn =()=>{
      return signInWithPopup(auth,googleProvider)
   }
   const SignOut =()=>{
    setloader(true)
    return signOut(auth)
   }
    const authInfo ={
       user,
       loader,
       CreateUser,
       LogInUser,
       SignOut,
       googleSignIn
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setuser(currentUser);  
          console.log("state capture",currentUser);
          setloader(false);      
        });
      
        return () => {
          unsubscribe(); 
        };
      }, []);
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;