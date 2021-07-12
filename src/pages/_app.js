import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="bg-white dark:bg-gray-800">
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
