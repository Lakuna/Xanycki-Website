import "./global.scss";
import style from "./style.module.scss";
import Gtag from "./Gtag.jsx";
import Topnav from "./Topnav/index.jsx";
import { Arvo, Ubuntu, Ubuntu_Mono } from "next/font/google";

// TODO: Improve font quality?
const arvo = Arvo({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-serif",
	fallback: ["Times New Roman", "serif"]
});

const ubuntu = Ubuntu({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-sans-serif",
	fallback: ["Arial", "sans-serif"]
});

const ubuntuMono = Ubuntu_Mono({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-monospace",
	fallback: ["Courier New", "monospace"]
});

export default ({ children }) => <html lang="en-US" className={`${arvo.variable} ${ubuntu.variable} ${ubuntuMono.variable}`}>
	<body>
		<div className={style["spacer"]}>
			<header>
				<Topnav />
			</header>
			<main>
				{children}
			</main>
			<footer className={style["footer"]} />
		</div>
	</body>
	<Gtag id="G-HHPHD31E3M" />
</html>;
