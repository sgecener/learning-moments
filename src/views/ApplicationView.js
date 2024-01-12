import { PostList } from "../components/posts/PostList";
import { Route, Routes, Outlet } from "react-router-dom";
import { NavBar } from "../components/nav/NavBar";
import { useState, useEffect } from "react";
import { PostDetails } from "../components/posts/PostDetails";
import { NewPost } from "../components/posts/NewPost";
import { MyPosts } from "../components/posts/MyPosts";

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
        <Route path="posts">
          <Route index element={<PostList />} />
          <Route path=":postId" element={<PostDetails currentUser={currentUser}  />} />
        </Route>
        <Route path="newPost" element={<NewPost currentUser={currentUser} />} />
        <Route path="myPosts" element={<MyPosts currentUser={currentUser} />}/>
      </Route>
    </Routes>
  );
};
