// import useContext hook
import React, { useContext } from "react";
import { ThemeContext } from "../context/theme";
// import the UserContext we created 
import { UserContext } from "../context/user";
import Interests from "./Interests";

function Profile() {
  // call useContext with our UserContent
  const { user } = useContext(UserContext);
  const { theme } = useContext(ThemeContext)

  // now, we can use the user object just like we would if we passed it as a prop!
  if (!user) return <h2>Please Login To View Profile</h2>;
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <Interests interests={user.interests} theme={theme} />
    </div>
  );
}

export default Profile;
