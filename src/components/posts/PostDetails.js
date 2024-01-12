import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPostByPostId } from "../../services/postalService";
import './Posts.css'
import { assignLike } from "../../services/postalService";

export const PostDetails = ({ currentUser }) => {
    const [post, setPost] = useState({});
    const { postId } = useParams();
  
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

    const handleLike = () => {


      const newLike = {
        id: post.id,
        userId: post.userId,
        topicId: post.topicId,
        title: post.title,
        body: post.body,
        date: post.date,
        likes: post.likes + 1
      }
  
      assignLike(newLike).then(() => {
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

        <div> Likes: {post.likes}</div>
        {currentUser.id === post.userId ? <button>Edit Post</button> : ""}

        <div className="btn-container">
        
        <button className="btn-secondary" onClick={handleLike}>Like</button>
      
        </div>


      </section>
    );
  };