import { createUserWithEmailAndPassword } from "firebase/auth";
import { createContext } from "react";
import { auth } from "../../firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const newUserWithEmailPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const userData = {}

    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;