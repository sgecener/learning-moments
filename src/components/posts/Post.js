

export const Post = ({ post }) => {
  // const [users, setUser] = useState([]);
  // const [assignedUser, setAssignedUser] = useState({});

  // useEffect(() => {
  //   getAllUsers().then((usersArr) => {
  //     setUser(usersArr);
  //   });
  // }, []);

  // useEffect(() => {
  //   const foundUser = users.find(
  //     (user) => user.id === post.userId[0]?
  //   );
  //   setAssignedEmployee(foundEmployee);
  // }, [employees, ticket]);

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
