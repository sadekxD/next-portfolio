import Tech from "./cards/Tech";
import SectionTitle from "./SectionTitle";
import LineDivider from "./lineDivider";

const Technologies = () => {
	return (
		<section id="technologies" className="py-20">
			<SectionTitle title="Technologies" />
			<p className="text-lg sm:text-xl md:text-2xl mt-4 dark:text-white">
				I{`'`}ve worked with a range a technologies in the web development
				world.
				<br />
				From Back-end To Front-end
			</p>
			<div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8">
				<div>
					<h1 className="text-2xl sm:text-3xl font-bold dark:text-white">
						Frontend
					</h1>
					<LineDivider />
					<div className="flex mt-5">
						<Tech />
						<Tech />
						<Tech />
						<Tech />
						<Tech />
					</div>
				</div>
				<div>
					<h1 className="text-2xl sm:text-3xl font-bold dark:text-white">
						Backend
					</h1>
					<LineDivider />
					<div className="flex mt-5">
						<Tech />
						<Tech />
						<Tech />
						<Tech />
						<Tech />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
