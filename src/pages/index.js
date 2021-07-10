import Head from "next/head";
import Image from "next/image";
import Projects from "../components/Projects";
import Hero from "../components/Hero";
import Layout from "../layout/Layout";
import Technologies from "../components/Technologies";
import About from "../components/About";
import Contact from "../components/Contact";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<Projects />
			<Technologies />
			<About />
			<Contact />
		</Layout>
	);
}
