import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import { useState } from "react";
import Chat from "./components/Chat";
import PostListProvider from "./store/post-list-store";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
      <div className="app-container">
        <Sidebar
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        ></Sidebar>
        <div className="content">
          <Header
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          ></Header>
          {selectedTab == "Home" ? (
            <Home
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            ></Home>
          ) : selectedTab == "Posts" ? (
            <PostList></PostList>
          ) : selectedTab == "Create Post" ? (
            <CreatePost></CreatePost>
          ) : selectedTab == "Chat" ? (
            <Chat></Chat>
          ) : selectedTab == "Login" ? (
            <Login></Login>
          ) : (
            <SignUp></SignUp>
          )}
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
