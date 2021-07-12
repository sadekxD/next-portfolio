import Image from "next/image";

const Tech = () => {
	return (
		<div className="h-20 w-20 flex-center transition-all cursor-pointer shadow-lg hover:shadow-none mr-2 rounded-md">
			<Image
				src={require("../../media/icons/next.svg")}
				height={60}
				width={60}
			/>
		</div>
	);
};

export default Tech;
