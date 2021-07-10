import Tech from "./cards/Tech";
import LineDivider from "./lineDivider";

const Technologies = () => {
	return (
		<section className="py-20">
			<div>
				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
					Technologies
				</h1>
				<LineDivider />
			</div>
			<p className="text-lg sm:text-xl md:text-2xl mt-4">
				I've worked with a range a technologies in the web development world.
				<br />
				From Back-end To Front-end
			</p>
			<div className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-8">
				<div>
					<h1 className="text-2xl sm:text-3xl font-bold">Frontend</h1>
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
					<h1 className="text-2xl sm:text-3xl font-bold">Backend</h1>
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
