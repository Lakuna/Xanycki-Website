"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import style from "./carousel.module.scss";

export default function Carousel({ children, className, ...props }) {
	const [carouselRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	return (
		<div className={`embla ${style["base"]} ${className ?? ""}`} ref={carouselRef} {...props}>
			<div className={`embla__container ${style["container"]}`}>
				{(children ?? []).map((item, index) => {
					return (
						<div className={`embla__slide ${style["slide"]}`} key={index}>
							{item}
						</div>
					);
				})}
			</div>
		</div>
	);
}
