import { Link } from "react-router-dom";
import './NavBar.css';
export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
    </div>
  );
}
