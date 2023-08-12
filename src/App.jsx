// import "./App.css";
import Homepage from "./components/Homepage/Homepage";
import "./assets/css/style.css";
import "./assets/css/reset.css";
import "./assets/css/fonts.css";
import ServicePage from "./components/ServicePage/ServicePage";
import { RouterProvider } from "react-router-dom";
import router from "./router/router";

function App() {
	return (
		<div className="container">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
