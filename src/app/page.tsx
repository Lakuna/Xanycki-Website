import Carousel from "components/Carousel";
import Image from "components/Image";
import type { Metadata } from "next";
import ss01 from "./opengraph-image.png";
import ss02 from "./slideshow/2.png";
import ss03 from "./slideshow/3.png";
import ss04 from "./slideshow/4.png";
import ss05 from "./slideshow/5.png";
import ss06 from "./slideshow/6.png";
import ss07 from "./slideshow/7.png";
import ss08 from "./slideshow/8.png";
import ss09 from "./slideshow/9.png";
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
import style from "./page.module.scss";

export default function Page() {
	return (
		<div className={style["content"]}>
			<h1>{"Xanycki"}</h1>
			<Carousel>
				<Image src={ss01} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss02} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss03} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss04} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss05} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss06} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss07} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss08} alt="Xanycki's art." placeholder="blur" />
				<Image src={ss09} alt="Xanycki's art." placeholder="blur" />
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
			<p>{"Commission information is available on Carrd."}</p>
		</div>
	);
}

export const metadata: Metadata = {
	description: "Xanycki's website.",
	openGraph: { url: "/" },
	title: "Xanycki"
};
