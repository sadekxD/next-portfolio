import { useCallback, useContext } from "react";
import { Link } from "react-scroll";
import Switch from "react-switch";
import Image from "next/image";

import { DrawerContext } from "../../contexts/drawer.context";
import Drawer from "../Drawer";

const MobileDrawer = ({ toggleMode, darkMode }) => {
	const { state, dispatch } = useContext(DrawerContext);

	// Toggle Drawer
	const toggleHandler = useCallback(() => {
		dispatch({ type: "TOGGLE" });
	}, [dispatch]);

	return (
		<Drawer
			width="320px"
			drawerHandler={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-8 w-8 dark:text-white"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16m-7 6h7"
					/>
				</svg>
			}
			closeButton={
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-6 w-6"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				</svg>
			}
			open={state.isOpen}
			toggleHandler={toggleHandler}
		>
			<li className="text-center py-3 list-none">
				<Link
					to="projects"
					spy={true}
					smooth={true}
					offset={-96}
					duration={500}
					className="px-4 md:px-6 py-2 cursor-pointer text-lg font-medium"
				>
					Projects
				</Link>
			</li>
			<li className="text-center py-3 list-none">
				<Link
					to="technologies"
					spy={true}
					smooth={true}
					offset={-96}
					duration={500}
					className="px-4 md:px-6 py-2 cursor-pointer text-lg font-medium"
				>
					Technologies
				</Link>
			</li>
			<li className="text-center py-3 list-none">
				<Link
					to="about"
					spy={true}
					smooth={true}
					offset={-96}
					duration={500}
					className="px-4 md:px-6 py-2 cursor-pointer text-lg font-medium"
				>
					About
				</Link>
			</li>
			<li className="text-center py-3 list-none">
				<Link
					to="contact"
					spy={true}
					smooth={true}
					offset={-96}
					duration={500}
					className="px-4 md:px-6 py-2 cursor-pointer text-lg font-medium"
				>
					Contact me
				</Link>
			</li>
			<div className="py-4 px-4 flex-between absolute left-0 right-0 bottom-0 dark:bg-gray-800">
				<h1 className="text-lg font-medium">Theme</h1>
				<div className="flex-center">
					<Switch
						onChange={toggleMode}
						onColor="#60A5FA"
						offColor="#34D399"
						checked={darkMode}
					/>
					<div className="pl-2">
						{darkMode ? (
							<Image
								src={require("../../media/mode/night.svg")}
								height="36"
								width="36"
							/>
						) : (
							<Image
								src={require("../../media/mode/sunny.svg")}
								height="36"
								width="36"
							/>
						)}
					</div>
				</div>
			</div>
			{/* <div className="py-2 px-4 flex-between"></div> */}
		</Drawer>
	);
};

export default MobileDrawer;
