import Image from "next/image";
import LineDivider from "./lineDivider";

const Contact = () => {
	return (
		<section id="contact">
			<h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">Contact</h2>
			<LineDivider />
			<h2 className="mt-8 text-4xl">
				Hi! let{`'`}s talk about
				<br />
				your Project.
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 py-12 items-center">
				<div className="hidden md:flex">
					<Image src={require("../media/mail.svg")} />
				</div>
				<div>
					<form className="md:pr-8" onSubmit={(e) => e.preventDefault()}>
						<input
							type="text"
							name="username"
							id="username"
							placeholder="Your Name"
							className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black mb-12 font-normal text-lg"
						/>
						<input
							type="email"
							name="email"
							id="email"
							placeholder="Your Email"
							className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black mb-12 font-normal text-lg"
						/>
						<textarea
							rows="5"
							type="text"
							name="message"
							id="message"
							placeholder="Your Message"
							className="mt-0 block w-full px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-black mb-12 font-normal text-lg"
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
