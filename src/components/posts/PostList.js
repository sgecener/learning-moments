import { useEffect, useState } from "react";

import { getAllPosts } from "../../services/postalService";
import { Post } from "./Post";
import { TopicFilter } from "./TopicFilter";
import { getAllTopics } from "../../services/topicService";


export const PostList = () => {
    const [allPosts, setAllPosts] = useState([]);
    const [allTopics, setAllTopics] = useState([])
    // const [showEmergency, setShowEmergency] = useState(false);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [topicSelect, setTopicSelect] = useState([])
  
    useEffect(() => {
        getAllPosts().then((postsArray) => {
          setAllPosts(postsArray);
          console.log("tix set");
        });
      }, []);

      useEffect(() => {
        getAllTopics().then((topicsArray) => {
          setAllTopics(topicsArray);
        });
      }, []);
  
    useEffect(() => {
      const foundPosts = allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(foundPosts);
    }, [searchTerm, allPosts]);
  
    // useEffect(() => {
    //     const foundTopics = allTopics.find((topic) =>
    //       topic.name
    //     );
    //     setFilteredPosts(foundTopics);
    //   }, [topicSelect, allTopics]);

    return (
      <div className="tickets-container">
        <h2>Posts</h2>
        <TopicFilter
          setSearchTerm={setSearchTerm}
        //   setTopicSelect={setTopicSelect}
        />
  
        <article className="tickets">
          {filteredPosts.map((postObj) => {
            return <Post post={postObj} key={postObj.id} />;
          })}
        </article>
      </div>
    );
  };
  