import Image from "next/image";
import { DrawerProvider } from "../../contexts/drawer.provider";
import MobileDrawer from "./mobileDrawer";
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {
	return (
		<DrawerProvider>
			<nav className="h-24 flex-between sticky top-0 bg-white z-50">
				<div className="flex-center">
					<Image src={require("../../media/logo/logo.svg")} />
					<span className="font-semibold text-xl ml-2">Portfolio</span>
				</div>
				<div className="hidden md:flex items-center justify-center">
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
				</div>
				<Link
					to="contact"
					spy={true}
					smooth={true}
					offset={-96}
					duration={500}
					className="hidden md:flex items-center justify-center px-4 py-2 rounded-full text-white bg-blue-400 font-medium text-lg cursor-pointer"
				>
					Contact me
				</Link>
				<MobileDrawer />
			</nav>
		</DrawerProvider>
	);
};

export default Header;
