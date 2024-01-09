import { PostList } from "../components/posts/PostList";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { useState, useEffect } from "react";

export const ApplicationView = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const localLearningUser = localStorage.getItem("learning_user");
    const learningUserObject = JSON.parse(localLearningUser);
    setCurrentUser(learningUserObject);
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
    
        <Route path="posts" element={<PostList />} currentUser={currentUser} />
      </Route>
    </Routes>
  );
};
