import {
	AiFillInstagram,
	AiFillLinkedin,
	AiFillGithub,
	AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
	return (
		<section className="border-t border-gray-300 dark:border-gray-600 pt-14 pb-6">
			<div className="flex flex-col md:flex-row mb-5">
				<div className="pr-12 mb-4 md:mb-0">
					<div className="uppercase mb-4 text-gray-600 font-medium">call</div>
					<div className="text-gray-500 dark:text-blue-200 transition-all duration-150 text-lg font-mono transform hover:translate-x-2">
						<a href="tel:+8801878520101">+8801878520101</a>
					</div>
				</div>
				<div>
					<div className="uppercase mb-4 text-gray-600 font-medium">Email</div>
					<div className="text-gray-500 dark:text-blue-200 transition-all duration-150 text-lg font-mono transform hover:translate-x-2">
						<a href="mailto:sadekirfan3@gmail.com">sadekirfan3@gmail.com</a>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row justify-between">
				<p className="text-lg mb-5 md:mb-0 text-gray-500 font-nuni font-semibold">
					Innovating one project at a time
				</p>
				<div className="flex text-blue-800 dark:text-white">
					<a href="https://github.com/sadekXd" target="_blank">
						<AiFillGithub className="h-10 w-10 mr-4 hover:text-blue-300" />
					</a>
					<a href="https://www.linkedin.com/in/irfan-sadek77" target="_blank">
						<AiFillLinkedin className="h-10 w-10 mr-4 hover:text-blue-300" />
					</a>
					<a href="">
						<AiFillInstagram className="h-10 w-10 mr-4 hover:text-blue-300" />
					</a>
					<a href="https://www.facebook.com/sadekirfan77">
						<AiFillFacebook className="h-10 w-10 hover:text-blue-300" />
					</a>
				</div>
			</div>
		</section>
	);
};

export default Footer;
