"use client";

import Autoplay from "embla-carousel-autoplay";
import type { JSX } from "react";
import multiclass from "util/multiclass";
import style from "./styles/carousel.module.scss";
import useEmblaCarousel from "embla-carousel-react";

export default function Carousel({
	children,
	className,
	...props
}: JSX.IntrinsicElements["div"]): JSX.Element {
	// eslint-disable-next-line new-cap
	const [carouselRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

	const childList = children
		? typeof children === "object" && Symbol.iterator in children
			? [...children]
			: [children]
		: [];

	return (
		<div
			className={multiclass(style["base"], className)}
			ref={carouselRef}
			{...props}
		>
			<div>
				{childList.map((item, index) => (
					<div key={index}>{item}</div>
				))}
			</div>
		</div>
	);
}
