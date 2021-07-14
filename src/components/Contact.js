import Image from "next/image";
import SectionTitle from "./SectionTitle";

const Contact = () => {
	return (
		<section id="contact" className="font-nuni">
			<SectionTitle title="Contact" />
			<h2 className="mt-8 text-4xl dark:text-white">
				Hi! let{`'`}s talk about
				<br />
				your Project.
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 py-12 items-center">
				<div className="hidden lg:flex">
					<Image src={require("../media/mail.svg")} />
				</div>
				<div>
					<form className="lg:pl-8" onSubmit={(e) => e.preventDefault()}>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Your Name"
							className="mt-0 bg-transparent dark:text-white block w-full px-2 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black dark:focus:border-gray-100 mb-12 font-normal text-lg"
						/>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your Email"
							className="mt-0 bg-transparent dark:text-white block w-full px-2 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black dark:focus:border-gray-100 mb-12 font-normal text-lg"
						/>
						<textarea
							rows="5"
							type="text"
							name="message"
							id="message"
							placeholder="Your Message"
							className="mt-0 bg-transparent dark:text-white block w-full px-2 border-0 border-b-2 border-gray-400 focus:ring-0 focus:border-black dark:focus:border-gray-100 mb-12 font-normal text-lg"
						/>
						<button
							type="submit"
							className="px-4 py-2 font-medium text-lg rounded-lg bg-green-400 text-white float-right"
						>
							Send Message
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
