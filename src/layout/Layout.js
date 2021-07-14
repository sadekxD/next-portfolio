import Header from "../components/header/Header";
import { ModeProvider } from "../contexts/mode.provider";
import BgParticles from "../components/BgParticles";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
	return (
		<ModeProvider>
			<div className="layout">
				<BgParticles />
				<Header />
				<main className="mt-24 z-10">{children}</main>
				<Footer />
			</div>
		</ModeProvider>
	);
};

export default Layout;
