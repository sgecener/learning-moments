

export const Post = ({ post }) => {
  // const [topics, setTopic] = useState([]);
  // const [assignedTopic, setAssignedTopic] = useState({});

  // useEffect(() => {
  //   getAllTopics().then((topicsArr) => {
  //     setTopic(topicsArr);
  //   });
  // }, []);

  // useEffect(() => {
  //   const foundTopic = topics.find(
  //     (topic) => topic.id === post.topicId
  //   );
  //   setAssignedTopic(foundTopic);
  // }, [topics, post]);

  return (
    <section className="ticket">
      <header className="ticket-info"><h2>{post.title}</h2></header>
      <div>{post.body}</div>
      <div>{post.date}</div>
      {/* <footer>
        <div>
          <div className="ticket-info">Assignee</div>
          <div>
            {assignedEmployee ? assignedEmployee.user?.fullName : "none"}
          </div>
          <div>
            <div className="ticket-info">Emergency</div>
            <div>{ticket.emergency ? "yes" : "no"}</div>
          </div>
        </div>
      </footer> */}
    </section>
  );
};
