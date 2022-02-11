import jwtDecode from "jwt-decode";

const getCurrentUser = () => {
    try{
        const jwt = localStorage.getItem("access_token");
        return jwtDecode(jwt);
    } catch(error) {
        return null;
    }
}

export default getCurrentUser;