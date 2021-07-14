import { DiReact } from "react-icons/di";
import { FaDatabase } from "react-icons/fa";
import Tech from "./cards/Tech";
import SectionTitle from "./SectionTitle";
import LineDivider from "./lineDivider";
import { frontEnd, backend } from "../constants/constants";

const Technologies = () => {
	return (
		<section id="technologies" className="py-20">
			<SectionTitle title="Technologies" />
			<p className="text-lg sm:text-xl md:text-2xl mt-4 dark:text-gray-400">
				I{`'`}ve worked with a range a technologies in the web development
				world.
				<br />
				From Back-end To Front-end
			</p>
			<div className="mt-28 grid grid-cols-1 lg:grid-cols-2 gap-8 text-center lg:text-left">
				<div>
					<h1 className="text-2xl sm:text-3xl font-bold dark:text-white flex items-center">
						<DiReact className="h-8 w-8 mr-2" />
						Frontend
					</h1>
					<LineDivider />
					<div className="mt-5">
						{frontEnd.map((item) => (
							<Tech key={item.label} title={item.value} />
						))}
					</div>
				</div>
				<div>
					<h1 className="text-2xl sm:text-3xl font-bold dark:text-white flex items-center">
						<FaDatabase className="h-7 w-7 mr-2" />
						Backend
					</h1>
					<LineDivider />
					<div className="mt-5">
						{backend.map((item) => (
							<Tech key={item.label} title={item.value} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Technologies;
