import Image from "next/image";

const Project = () => {
	return (
		<div className="shadow-lg rounded-lg w-full overflow-hidden text-center">
			<div className="w-full">
				<Image src={require("../../media/thumbnail.png")} />
			</div>
			<div className="mx-4 md:mx-6">
				<h1 className="project-title">Mern Memories</h1>
				<hr className="my-2 w-16 h-1 bg-blue-400 mx-auto" />
				<p className="mt-4 pb-8 mx-auto text-lg sm:text-xl">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat.
				</p>
				<div className="mt-4 flex justify-end">
					<button>View</button>
					<button>Visit</button>
				</div>
			</div>
		</div>
	);
};

export default Project;
