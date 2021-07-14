export const easing = [0.6, -0.05, 0.01, 0.99];

export const animationContainer = {
	initial: {
		transition: {
			staggerChildren: 0.01,
			easing,
		},
	},
};

export const moveRightAnim1 = {
	initial: { x: 0, y: 0 },
	animate: { x: -20, y: -20 },
	transition: {
		duration: 0.2,
	},
};

export const moveRightAnim2 = {
	initial: { x: 0, y: 0 },
	animate: { x: -12, y: -12 },
	transition: {
		duration: 0.2,
	},
};

export const moveRightAnim3 = {
	initial: { x: 0, y: 0 },
	animate: { x: -4, y: -4 },
	transition: {
		duration: 0.2,
	},
};
