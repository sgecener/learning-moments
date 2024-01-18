import { useState, useEffect } from "react";
import { getAllUsers } from "../../services/userService"






export const Post = ({ post }) => {

  // const [authors, setAuthors] = useState([]);
  // const [assignedAuthor, setAssignedAuthor] = useState({});

  // useEffect(() => {
  //   getAllUsers().then((userArr) => {
  //     setAuthors(userArr);
  //   });
  // }, []);


  return (
    <section className="ticket">
      <header className="ticket-info"><h2>{post.title}</h2></header>
      <div>{post.body}</div>
      <div>{post.date}</div>
      
    </section>
    
  );
};
