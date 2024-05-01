const doLogIn = (username) => {
  localStorage.setItem("username", username);
  localStorage.setItem("isLoggedIn", true);
};

const isLoggedIn = () => {
  return Boolean(localStorage.getItem("isLoggedIn"));
};


const logOut = () =>{
  localStorage.removeItem("username");
  localStorage.removeItem("isLoggedIn");
};

export default {
  doLogIn,
  isLoggedIn,
  logOut
};
