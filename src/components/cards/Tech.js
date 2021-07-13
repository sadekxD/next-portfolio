import Image from "next/image";

const Tech = () => {
	return (
		<div className="h-20 w-20 flex-center transition-all cursor-pointer shadow-lg dark:shadow-lg-invert hover:shadow-none dark:hover:shadow-none mr-2 rounded-md dark:bg-white">
			<Image
				src={require("../../media/icons/next.svg")}
				height={60}
				width={60}
			/>
		</div>
	);
};

export default Tech;
