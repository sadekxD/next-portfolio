import React from "react";
import Header from "../components/header/Header";
import { ModeProvider } from "../contexts/mode.provider";

const Layout = ({ children }) => {
	return (
		<ModeProvider>
			<div className="layout">
				<Header />
				<main className="mt-24">{children}</main>
				{/* footer */}
			</div>
		</ModeProvider>
	);
};

export default Layout;
