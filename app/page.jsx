import generateMetadata from "../shared/generateMetadata";
import Carousel from "./Carousel/Carousel";
import Image from "next/image";
import ss1 from "./slideshow/1.png";
import ss2 from "./slideshow/2.png";
import ss3 from "./slideshow/3.png";
import ss4 from "./slideshow/4.png";
import ss5 from "./slideshow/5.png";
import ss6 from "./slideshow/6.png";
import ss7 from "./slideshow/7.png";
import ss8 from "./slideshow/8.png";
import ss9 from "./slideshow/9.png";
import ss10 from "./slideshow/10.png";
import ss11 from "./slideshow/11.png";
import ss12 from "./slideshow/12.png";
import ss13 from "./slideshow/13.png";
import ss14 from "./slideshow/14.png";
import ss15 from "./slideshow/15.png";
import ss16 from "./slideshow/16.png";
import ss17 from "./slideshow/17.png";
import ss18 from "./slideshow/18.png";
import ss19 from "./slideshow/19.png";
import ss20 from "./slideshow/20.png";
import ss21 from "./slideshow/21.png";
import ss22 from "./slideshow/22.png";
import ss23 from "./slideshow/23.png";
import ss24 from "./slideshow/24.png";
import ss25 from "./slideshow/25.png";
import ss26 from "./slideshow/26.png";
import ss27 from "./slideshow/27.png";
import ss28 from "./slideshow/28.png";
import ss29 from "./slideshow/29.png";

export default function Page() {
	return (
		<>
			<h1 style={{ textAlign: "center" }}>Xanycki</h1>
			<Carousel style={{ maxHeight: "512px" }}>
				<Image src={ss1} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss2} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss3} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss4} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss5} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss6} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss7} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss8} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss9} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss10} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss11} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss12} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss13} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss14} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss15} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss16} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss17} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss18} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss19} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss20} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss21} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss22} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss23} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss24} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss25} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss26} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss27} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss28} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss29} alt="Xanycki's art." placeholder="blur" />
			</Carousel>
			<h3 style={{ textAlign: "center" }}>Commission information is available on Carrd.</h3>
		</>
	);
}

export const metadata = generateMetadata("Xanycki", "Xanycki's website.", "/favicon.png", "/");
