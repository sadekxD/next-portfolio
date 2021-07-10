import Image from "next/image";
import LineDivider from "./lineDivider";

const Hero = () => {
	return (
		<section className="grid grid-cols-1 md:grid-cols-2 py-16 md:py-32">
			<div>
				<h1
					className="font-bold text-3xl sm:text-4xl md:text-5xl"
					style={{ lineHeight: "72px" }}
				>
					Welcome to <br />
					My Personal Portfolio
				</h1>
				<p className="text-lg sm:text-xl md:text-2xl mt-5">
					The purpose of JavaScript Mastery is to help aspiring and established
					developers to take their development skills to the next level and
					build awesome apps
				</p>
				<button className="mt-5 px-4 py-2 bg-blue-400 text-xl sm:text-xl md:text-2xl text-white rounded-full">
					Read More
				</button>
				<LineDivider />
			</div>
			<div className="mt-8 md:pl-6 md:mt-0">
				<Image src={require("../media/website_builder.svg")} />
			</div>
		</section>
	);
};

export default Hero;
