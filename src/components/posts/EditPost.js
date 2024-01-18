import { useState, useEffect } from "react";
import { updatePost, getPostByUserId } from "../../services/postalService";
import { useNavigate } from "react-router-dom";



export const EditPost = ({ currentUser }) => {
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        getPostByUserId(currentUser.id).then( (data) => 
        { const postObj = data[0]
          setPost(postObj)}
        );
      }, [currentUser]);

    const handleSave = (event) => {
        event.preventDefault()
    
        const editPost =  {
            id: post.id,
            title: post.title,
            body: post.body,
            userId: post.userId,
            topicId: post.topicId,
            date: post.date,
            likes: post.likes
            
        }
    
        updatePost(editPost).then(() => {
            navigate(`/myPosts`)
        })
      } 

    return (
    <form className="tickets-container">
        
        <h2>Edit Post</h2>
        
        <fieldset>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            value={post.title}
            onChange={(event) => {
              const copy = { ...post };
              copy.title = event.target.value;
              setPost(copy);
            }}
            
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>Body:</label>
          <textarea
            type="text"
            value={post.body}
            onChange={(event) => {
                const copy = { ...post };
                copy.body = event.target.value
                setPost(copy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-primary" onClick={handleSave}>Save Post</button>
        </div>
      </fieldset>
    </form>
    )
}