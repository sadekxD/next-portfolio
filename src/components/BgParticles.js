import Particles from "react-particles-js";

const BgParticles = () => {
	return (
		<Particles
			className="fixed top-0 right-0 left-0 bottom-0 bg-white dark:bg-gray-900 -z-1"
			params={{
				particles: {
					number: {
						value: 160,
						density: {
							enable: false,
						},
					},
					size: {
						value: 3,
						random: true,
						anim: {
							speed: 4,
							size_min: 0.3,
						},
					},
					line_linked: {
						enable: false,
					},
					move: {
						random: true,
						speed: 1,
						direction: "top",
						out_mode: "out",
					},
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: "bubble",
						},
						onclick: {
							enable: true,
							mode: "repulse",
						},
					},
					modes: {
						bubble: {
							distance: 250,
							duration: 2,
							size: 0,
							opacity: 0,
							color: "black",
						},
						repulse: {
							distance: 400,
							duration: 4,
						},
					},
				},
			}}
		/>
	);
};

export default BgParticles;
