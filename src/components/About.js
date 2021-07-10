import LineDivider from "./lineDivider";
import Image from "next/image";

const About = () => {
	return (
		<section className="pb-32">
			<div>
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About</h1>
				<LineDivider />
			</div>
			<div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="flex flex-col justify-center items-center md:pr-6 md:border-r-4 border-blue-400">
					<div className="relative h-48 w-48">
						<div className="absolute top-0 right-0 left-0 bottom-0 transform -translate-x-5 -translate-y-5 rounded-md bg-blue-200"></div>
						<div className="absolute top-0 right-0 left-0 bottom-0 transform -translate-x-3 -translate-y-3 rounded-md bg-blue-300"></div>
						<div className="absolute top-0 right-0 left-0 bottom-0 transform -translate-x-1 -translate-y-1 rounded-md bg-blue-400"></div>
						<Image
							className="rounded-md"
							alt="Mountains"
							src={require("../media/profile.jpg")}
							layout="fill"
							objectFit="cover"
						/>
					</div>
					<h2 className="mt-4 text-xl sm:text-2xl font-bold">IRFAN SADEK</h2>
					<hr className="w-28 h-2 bg-gray-900 mt-2" />
				</div>
				<div>
					<p className="text-lg sm:text-xl md:text-2xl">
						The purpose of JavaScript Mastery is to help aspiring and
						established developers to take their development skills to the next
						level and build awesome apps.
					</p>
					<button className="mt-8 px-4 py-2 border text-xl sm:text-xl float-right md:float-left text-black rounded-md flex-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 mr-2"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
							/>
						</svg>
						Resume
					</button>
				</div>
			</div>
		</section>
	);
};

export default About;
