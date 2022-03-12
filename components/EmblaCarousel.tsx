import useEmblaCarousel, { UseEmblaCarouselType } from "embla-carousel-react";
import React, { ReactElement } from "react";
import styles from "../styles/embla.module.scss";
import Autoplay from "embla-carousel-autoplay";

type Properties = {
  children?: ReactElement[],
  className?: string,
  [props: string]: any
};

export default function EmblaCarousel({ children, className, ...props }: Properties): JSX.Element {
  const [emblaRef]: UseEmblaCarouselType = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className={`embla ${styles["embla"]} ${className ?? ""}`} ref={emblaRef} {...props}>
      <div className={`embla__container ${styles["embla__container"]}`}>
        {(children ?? []).map((item: ReactElement, index: number): JSX.Element => {
          return (
            <div className={`embla__slide ${styles["embla__slide"]}`} key={index} style={{ display: "flex", justifyContent: "center" }}>
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
