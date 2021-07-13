import Image from "next/image";
import { motion } from "framer-motion";

const Project = () => {
	return (
		<motion.div
			whileHover={{ scale: 1.01 }}
			transition={{ duration: 0.2 }}
			className="shadow-lg dark:shadow-lg-invert rounded-lg w-full overflow-hidden text-center"
		>
			<div className="w-full">
				<Image src={require("../../media/thumbnail.png")} />
			</div>
			<div className="mx-4 md:mx-6 pb-4">
				<h1 className="project-title dark:text-white">Mern Memories</h1>
				<div className="my-2 w-16 h-1 bg-blue-400 mx-auto" />
				<p className="mt-4 pb-8 mx-auto text-lg dark:text-white">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<div className="mt-4 flex justify-end">
					<button className="px-4 py-2 text-base rounded-lg dark:text-white mr-2 bg-green-400">
						Code
					</button>
					<button className="px-4 py-2 text-base rounded-lg dark:text-white bg-gray-400">
						Visit
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default Project;
