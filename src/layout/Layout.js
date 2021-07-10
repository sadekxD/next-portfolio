import React from "react";
import Header from "../components/Header";

const Layout = ({ children }) => {
	return (
		<div className="layout bg-white">
			<Header />
			<main>{children}</main>
			{/* footer */}
		</div>
	);
};

export default Layout;
