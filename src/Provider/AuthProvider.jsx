import { createContext } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../Firebase/Firebase.config";

export const AuthContext= createContext();
const auth = getAuth(app);

// eslint-disable-next-line react/prop-types
const AuthProvider = ({children}) => {


const createUser=( email, password)=>{
    return createUserWithEmailAndPassword(auth, email, password)
}
const loginUser=(email,password)=>{
    
}

    const authInfo={
        createUser,
    }



    return (
        <AuthContext.Provider value={authInfo}>
           {children} 
        </AuthContext.Provider >
    );
};

export default AuthProvider;