import Image from "next/image";
import { motion } from "framer-motion";
import { AiOutlineGithub, AiOutlineEye } from "react-icons/ai";

const Project = ({ title, desc, tags, view_link, code_link }) => {
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
				<h1 className="project-title dark:text-white font-nuni">
					Mern Memories
				</h1>
				<div className="my-2 w-16 h-1 bg-blue-400 mx-auto" />
				<p className="mt-4 pb-2 mx-auto text-lg dark:text-white font-lato">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<div className="py-2 text-left dark:text-gray-200 text-lg">
					<span className="px-2 py-1">#React</span>
					<span className="px-2 py-1">#React</span>
					<span className="px-2 py-1">#React</span>
					<span className="px-2 py-1">#React</span>
				</div>
				<div className="mt-4 flex justify-end">
					{code_link && (
						<a
							href="https://www.google.com"
							target="_blank"
							className="px-4 py-2 text-base rounded-lg text-white dark:text-white mr-2 bg-green-400 hover:bg-green-500 flex items-center"
						>
							<AiOutlineGithub className="mr-2 h-6 w-6" />
							Code
						</a>
					)}
					{view_link && (
						<a
							target="_blank"
							className="px-4 py-2 text-base rounded-lg text-white dark:text-white bg-gray-400 hover:bg-blue-500 flex items-center"
						>
							<AiOutlineEye className="mr-2 h-6 w-6" />
							Visit
						</a>
					)}
				</div>
			</div>
		</motion.div>
	);
};

export default Project;
