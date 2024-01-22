import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPostByPostId } from "../../services/postalService";

import './Posts.css'
import { likePost } from "../../services/likeService";

export const PostDetails = ({ currentUser }) => {
  
    const [post, setPost] = useState({});
    const { postId } = useParams();

    const navigate = useNavigate()
  
    const getAndSetPosts = () => {
      getPostByPostId(postId).then( (data) => 
      { const postObj = data[0]
        setPost(postObj)}
      );
    }

    useEffect(() => {
      getPostByPostId(postId).then( (data) => 
      { const postObj = data[0]
        setPost(postObj)}
      );
    }, [postId]);

    const addLike = () => {
      const foundLike = post.likes.filter(
        (like) => like.userId === currentUser.id
      )
      if (foundLike.length === 0) {
        handleLike()
      }
    }
  
    const handleLike = () => {
      const newLike = {
        userId: currentUser.id,
        postId: post.id,
      }
      likePost(newLike).then(() => {
        getAndSetPosts()
      })
    }
  
    return (
      
      <section className="post">
        <header className="employee-header">{post.title
        }</header>
        <div>
          {post.user?.name}
        </div>
        <div>
          {post.body}
        </div>
        <div>
          {post.date}
        </div>

        <div> Likes: {post.likes?.length}</div>
        {currentUser.id === post.userId ? <button onClick={() => {
          navigate("/editPost")
        }}>Edit Post</button> : ""}

        <div className="btn-container">
        
        <button className="btn-secondary" onClick={addLike}>Like</button>
      
        </div>


      </section>
    );
  };