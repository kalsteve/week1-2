import { Link } from "react-router-dom";
import './NavBar.css';
export default function NavBar() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <label for="checkbox">
        <input type="checkbox" id="checkbox" hidden/>
        <svg t="1689815540548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2271"><path d="M742.4 101.12A249.6 249.6 0 0 0 512 256a249.6 249.6 0 0 0-230.72-154.88C143.68 101.12 32 238.4 32 376.32c0 301.44 416 546.56 480 546.56s480-245.12 480-546.56c0-137.92-111.68-275.2-249.6-275.2z" fill="#231F20" p-id="2272" id="heart"></path></svg>
        <span></span>
    </label>
      <Link to="/resume">Resume</Link>
    </div>
  );
}
