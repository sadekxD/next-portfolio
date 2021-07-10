import Project from "./cards/Project";
import LineDivider from "./lineDivider";

const Projects = () => {
	return (
		<section className="min-h-screen py-20">
			<div>
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Projects</h1>
				<LineDivider />
			</div>
			<div className="mt-24 grid grid-cols-1 md:grid-cols-2 px-4 md:px-12 lg:px-20 gap-4 md:gap-6 lg:gap-8">
				<Project />
				<Project />
				<Project />
				<Project />
			</div>
		</section>
	);
};

export default Projects;
