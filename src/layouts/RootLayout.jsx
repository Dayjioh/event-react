import React from "react";
import Menu from "../components/Menu/Menu";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
	return (
		<>
			<Outlet />
		</>
	);
};

export default RootLayout;
