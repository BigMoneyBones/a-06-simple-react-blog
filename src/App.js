import "./App.css";
import { useState } from "react";
import Home from "./Components/Home";
import Blogs from "./Components/Blogs";

function App() {
  const [userName, setUserName] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [blog, setBlog] = useState("");
  const [blogArray, setBlogArray] = useState([]);

  if (isLoggedIn === false) {
    return (
      <Home
        userName={userName}
        setUserName={setUserName}
        profileImage={profileImage}
        setProfileImage={setProfileImage}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />
    );
  }
  if (isLoggedIn === true) {
    return (
      <Blogs
        userName={userName}
        profileImage={profileImage}
        blog={blog}
        setBlog={setBlog}
        blogArray={blogArray}
        setBlogArray={setBlogArray}
      />
    );
  }
}

export default App;
