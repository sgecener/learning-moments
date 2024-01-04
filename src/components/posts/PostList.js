import { useEffect, useState } from "react";

import { getAllTopics } from "../../services/topicService";
import { getAllPosts } from "../../services/postalService";
import { Post } from "./Post";
import { TopicFilter } from "./TopicFilter";

export const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([]);

  const [filteredPosts, setFilteredPosts] = useState([]);
  
  const [searchTerm, setSearchTerm] = useState("");
  const [topicSelect, setTopicSelect] = useState({});

  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
    });
  }, []);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
    });
  }, []);

  useEffect(() => {
    const foundPosts = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPosts(foundPosts);
  }, [searchTerm, allPosts]);



  useEffect(() => {
    if (topicSelect !== "0") {
      const filteredPosts = allPosts.filter(
        (post) => parseInt(post.topicId) === parseInt(topicSelect)
      );
      setFilteredPosts(filteredPosts);
    } else {
      setFilteredPosts(allPosts);
    }
  }, [topicSelect, allPosts]);

  return (
    <div className="tickets-container">
      <h2 className="ticket">Posts</h2>
      <div>
        <TopicFilter
          setSearchTerm={setSearchTerm}
          setTopicSelect={setTopicSelect}
          allTopics={allTopics}
        />
      </div>

      <article className="tickets">
        {filteredPosts.map((postObj) => {
          return <Post post={postObj} key={postObj.id} />;
        })}
      </article>
    </div>
  );
};
