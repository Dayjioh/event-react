import { Link } from "react-router-dom";
import "./Menu.css"

export default function Menu() {
	return (
		<nav className="menu">
			<Link to={'/'}>home</Link>
			<Link to={'/services'}>services</Link>
			<Link to="projects.html">projects</Link>
			<Link to="blog.html">blog</Link>
			<Link to="#">contact</Link>
		</nav>
	);
}
