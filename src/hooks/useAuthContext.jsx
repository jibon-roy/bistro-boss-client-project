import { useContext } from "react";
import { AuthContext } from "../utilities/AuthProvider/AuthProvider";


const useAuthContext = () => {
    return useContext(AuthContext);
};

export default useAuthContext;