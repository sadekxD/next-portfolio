import Drawer from "../Drawer";
import { Link } from "react-scroll";
import { DrawerContext } from "../../contexts/drawer.context";
import { useCallback, useContext } from "react";

const MobileDrawer = () => {
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
			<li className="text-center py-3 text-lg list-none">
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
			<li className="text-center py-3 text-lg list-none">
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
			<li className="text-center py-3 text-lg list-none">
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
			<Link
				to="contact"
				spy={true}
				smooth={true}
				offset={-96}
				duration={500}
				className="flex items-center justify-center px-4 py-2 rounded-full text-white bg-blue-400 font-medium text-lg cursor-pointer"
			>
				Contact me
			</Link>
		</Drawer>
	);
};

export default MobileDrawer;
