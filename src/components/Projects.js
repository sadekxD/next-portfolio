import Project from "./cards/Project";
import LineDivider from "./lineDivider";
import SectionTitle from "./SectionTitle";

const Projects = () => {
	return (
		<section id="projects" className="min-h-screen py-20">
			<SectionTitle title="Projects" />
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
