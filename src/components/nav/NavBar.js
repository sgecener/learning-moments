import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './NavBar.css'

export const NavBar = () => {
  const navigate = useNavigate();

  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/posts" className="navbar-link">Posts</Link>
      </li>
      <li className="navbar-item">
        <Link to="/newPost" className="navbar-link">New Post</Link>
      </li>
      <li className="navbar-item">
        <Link to="/myPosts" className="navbar-link">My Posts</Link>
      </li>
      <li className="navbar-item">
        <Link to="/favorites" className="navbar-link">My Favorites</Link>
      </li>
      {localStorage.getItem("learning_user") ? (
        <li className="navbar-item navbar-logout">
          <Link
          className="navbar-link"
            to=""
            onClick={() => {
              localStorage.removeItem("learning_user");
              navigate("/login", { replace: true });
            }}
          >
            Logout
          </Link>
        </li>
      ) : (
        ""
      )}
    </ul>
  );
};
