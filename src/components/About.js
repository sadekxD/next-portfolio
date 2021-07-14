import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
	moveRightAnim1,
	moveRightAnim2,
	moveRightAnim3,
	easing,
} from "../animations/aboutAnim";
import SectionTitle from "./SectionTitle";

const About = () => {
	const [ref, inView] = useInView({
		triggerOnce: true,
	});
	const controls = useAnimation();

	useEffect(() => {
		if (inView) {
			controls.start("animate");
		} else {
			controls.start("initial");
		}
	}, [controls, inView]);

	return (
		<section id="about" className="pb-32 font-nuni" ref={ref}>
			<SectionTitle title="About" />
			<motion.div
				variants={{
					animate: {
						transition: {
							delayChildren: 0.2,
							staggerChildren: 0.01,
							easing,
						},
					},
				}}
				initial="initial"
				animate={controls}
				className="mt-28 grid grid-cols-1 md:grid-cols-2 gap-8"
			>
				<div className="flex flex-col justify-center items-center md:pr-6 md:border-r-4 border-blue-400">
					<motion.div whileTap={{ scale: 0.9 }} className="relative h-48 w-48">
						<motion.div
							variants={moveRightAnim1}
							className="absolute top-0 right-0 left-0 bottom-0 rounded-md bg-blue-200"
						></motion.div>
						<motion.div
							variants={moveRightAnim2}
							className="absolute top-0 right-0 left-0 bottom-0 rounded-md bg-blue-300"
						></motion.div>
						<motion.div
							variants={moveRightAnim3}
							className="absolute top-0 right-0 left-0 bottom-0 rounded-md bg-blue-400"
						></motion.div>
						<Image
							className="rounded-md"
							alt="Mountains"
							src={require("../media/profile.jpg")}
							layout="fill"
							objectFit="cover"
						/>
					</motion.div>
					<h2 className="mt-4 text-xl sm:text-2xl font-bold dark:text-white font-sans">
						IRFAN SADEK
					</h2>
					<hr className="w-28 h-2 bg-gray-900 dark:bg-gray-50 mt-2" />
				</div>
				<div>
					<p className="text-lg sm:text-xl md:text-2xl dark:text-gray-400">
						The purpose of JavaScript Mastery is to help aspiring and
						established developers to take their development skills to the next
						level and build awesome apps.
					</p>
					<button className="mt-8 px-4 py-2 border dark:border-opacity-0 text-xl sm:text-xl float-right md:float-left rounded-md flex-center dark:bg-blue-400 dark:text-white">
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
			</motion.div>
		</section>
	);
};

export default About;
