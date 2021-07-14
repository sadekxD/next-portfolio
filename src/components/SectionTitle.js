import LineDivider from "./lineDivider";

const SectionTitle = ({ title }) => {
	return (
		<div>
			<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold dark:text-white font-nuni">
				{title}
			</h1>
			<LineDivider />
		</div>
	);
};

export default SectionTitle;
