const Logout = () => {
    localStorage.removeItem("access_token");
    window.location.href = "/login";
}
 
export default Logout;