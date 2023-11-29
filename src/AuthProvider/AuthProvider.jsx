import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
   const [user, setUser] = useState()
   const [loading, setLoading] = useState(true)

   const createUser = (email, password) => {
      setLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const login = (email, password) => {
      setLoading(true)
      return signInWithEmailAndPassword(auth, email, password)
   }

   const logOut = () => {
      setLoading(true)
      return signOut(auth)
   }

   const updateUserProfile = (name, photo, imageURL) => {
      return updateProfile(auth.currentUser, {
         displayName: name,
         photoURL: photo,
      })
      .then(() => {
         // Add logic to update the image URL
         return updateProfile(auth.currentUser, {
            photoURL: imageURL,
         });
      })
      .catch((error) => {
         throw error;
      });
   } 

   useEffect(() => { 
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         setLoading(false);
      })
      return () => {
         return unsubscribe();
      }
   }, [])
   

   
   const authInfo = {
      user,
      loading,
      createUser,
      updateUserProfile,
      login,
      logOut
   }

   return (
      <AuthContext.Provider value={authInfo}>
         {children}      
      </AuthContext.Provider>
   );
};

export default AuthProvider;