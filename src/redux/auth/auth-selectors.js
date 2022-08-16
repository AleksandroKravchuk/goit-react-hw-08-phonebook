const getIsLoggedIn = state => state.auth.isLoggedIn;
const getUserName = state => state.auth.userName;
const authSelectors = { getIsLoggedIn, getUserName };

export default authSelectors;
