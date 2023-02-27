import Logo from "./utils/Logo";
import "../index.css";
import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div>
      <header>
        <nav className="navbar">
          <Logo />
          <nav id="main-nav">
            <ul className="nav">
              <li>
                <Link to="/tutorials">Tutorials</Link>
              </li>
              <li>
                <Link to="/post">Post</Link>
              </li>
            </ul>
          </nav>
        </nav>
      </header>
      <Outlet />
    </div>
  );
}

export default MainLayout;
