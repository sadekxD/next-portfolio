import Image from "next/image";
import { animateScroll as scroll } from "react-scroll";

const Hero = () => {
	return (
		<section className="grid grid-cols-1 lg:grid-cols-2 py-16 lg:py-32">
			<div>
				<h1 className="font-bold font-nuni text-3xl sm:text-4xl md:text-5xl leading-42 md:leading-72 dark:text-white">
					Welcome to <br />
					My Personal{" "}
					<span className="text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue-400 to-yellow-500 uppercase">
						Portfolio
					</span>
				</h1>
				<p className="text-lg sm:text-xl md:text-2xl mt-5 font-nuni dark:text-gray-400">
					The purpose of JavaScript Mastery is to help aspiring and established
					developers to take their development skills to the next level and
					build awesome apps
				</p>
				<button
					onClick={() => scroll.scrollTo(800)}
					className="mt-5 px-4 py-2 bg-blue-400 text-xl text-white rounded-full"
				>
					Read More
				</button>
			</div>
			<div className="mt-12 lg:pl-6 lg:mt-0">
				<Image src={require("../media/website_builder.svg")} />
			</div>
		</section>
	);
};

export default Hero;
