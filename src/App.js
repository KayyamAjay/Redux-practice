import Counter from "./components/Counter";
import React from "react";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";

import Header from "./components/Header";
import Auth from "./components/Auth";
function App() {
  const isAuth = useSelector((state) => state.Auth.Auth);
  return (
    <React.Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </React.Fragment>
  );
}

export default App;
