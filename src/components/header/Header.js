import { useCallback, useContext, useEffect } from "react";
import { DrawerProvider } from "../../contexts/drawer.provider";
import { ModeContext } from "../../contexts/mode.context";
import MobileDrawer from "./mobileDrawer";
import { Link } from "react-scroll";
import Switch from "react-switch";

const Header = () => {
	const { state, dispatch } = useContext(ModeContext);

	useEffect(() => {
		if (state.darkMode) {
			localStorage.theme = "dark";
			document.documentElement.classList.add("dark");
		}
	}, [state]);

	const toggleMode = useCallback(() => {
		if (localStorage.theme === undefined) {
			localStorage.theme = "dark";
		}

		localStorage.theme === "light"
			? (localStorage.theme = "dark")
			: (localStorage.theme = "light");
		if (
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) &&
				window.matchMedia("(prefers-color-scheme: dark)").matches)
		) {
			document.documentElement.classList.add("dark");
		} else {
			document.documentElement.classList.remove("dark");
		}
		dispatch({ type: "TOGGLE" });
	}, [dispatch]);

	return (
		<DrawerProvider>
			<nav className="h-24 flex-between sticky top-0 bg-white dark:bg-gray-800 z-50">
				<div className="flex-center dark:text-gray-50">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="45"
						height="45"
						viewBox="0 0 45 45"
					>
						<path
							id="Exclusion_1"
							data-name="Exclusion 1"
							d="M32,42a12.962,12.962,0,0,1-11.564-7.054,19.1,19.1,0,0,0,17.51-17.51A12.857,12.857,0,0,0,32,16,13.015,13.015,0,0,0,19,29a12.858,12.858,0,0,0,1.437,5.947c-.482.036-.965.054-1.437.054A19,19,0,0,1,0,16,19,19,0,0,1,19-3a19.833,19.833,0,0,1,3.765.373A18.511,18.511,0,0,1,33.586,3.787,19.061,19.061,0,0,1,38,16c0,.478-.018.961-.054,1.437A13,13,0,0,1,32,42Z"
							transform="translate(0 3)"
							fill={state.darkMode ? "#fff" : "#421212"}
						/>
					</svg>
					<span className="font-semibold text-xl ml-2">Portfolio</span>
				</div>
				<div className="hidden lg:flex items-center justify-center dark:text-white">
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
					<Link
						to="contact"
						spy={true}
						smooth={true}
						offset={-96}
						duration={500}
						className="px-4 md:px-6 py-2 cursor-pointer text-lg font-medium"
					>
						Contact
					</Link>
				</div>
				<Switch onChange={toggleMode} checked={state.darkMode} />
				<MobileDrawer />
			</nav>
		</DrawerProvider>
	);
};

export default Header;
