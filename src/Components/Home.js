import React from "react";

const Home = ({
  userName,
  setUserName,
  profileImage,
  setProfileImage,
  isLoggedIn,
  setIsLoggedIn,
}) => {
  return (
    <div className="App">
      <h2>Welcome, Please Sign In!</h2>
      <div id="input-container">
        <input
          type="text"
          id="username"
          value={userName}
          placeholder="Username"
          onChange={(event) => {
            const newUserName = event.target.value;
            setUserName(newUserName);
          }}
        ></input>
        <input
          type="text"
          value={profileImage}
          placeholder="Profile Image URL"
          onChange={(event) => {
            const newProfileImage = event.target.value;
            setProfileImage(newProfileImage);
          }}
        ></input>
        <button
          type="submit"
          id="sign-in-button"
          onClick={() => {
            setIsLoggedIn(true);
            console.log(
              "username: ",
              userName,
              "profile image: ",
              profileImage
            );
          }}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Home;
