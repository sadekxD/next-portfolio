import React from "react";
import Image from "next/image";

const Header = () => {
	return (
		<nav className="h-24 flex-between">
			<div className="flex-center">
				<Image src={require("../media/logo/logo.svg")} />
				<span className="font-semibold text-xl ml-2">Portfolio</span>
			</div>
			<div className="hidden md:flex items-center justify-center">
				<li className="px-4 md:px-6 py-2 list-none text-lg font-medium">
					Projects
				</li>
				<li className="px-4 md:px-6 py-2 list-none text-lg font-medium">
					Technologies
				</li>
				<li className="px-4 md:px-6 py-2 list-none text-lg font-medium">
					About
				</li>
			</div>
			<button className="hidden md:flex items-center justify-center px-4 py-2 rounded-full text-white bg-blue-400 font-medium text-lg">
				Contact me
			</button>
		</nav>
	);
};

export default Header;
