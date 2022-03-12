import EmblaCarousel from "../components/EmblaCarousel";
import Image from "next/image";
import Navbar from "../components/Navbar";

import imageSlideshow1 from "../public/images/slideshow/1.png";
import imageSlideshow2 from "../public/images/slideshow/2.png";
import imageSlideshow3 from "../public/images/slideshow/3.png";
import imageSlideshow4 from "../public/images/slideshow/4.png";
import imageSlideshow5 from "../public/images/slideshow/5.png";
import imageSlideshow6 from "../public/images/slideshow/6.png";
import imageSlideshow7 from "../public/images/slideshow/7.png";
import imageSlideshow8 from "../public/images/slideshow/8.png";
import imageSlideshow9 from "../public/images/slideshow/9.png";
import imageSlideshow10 from "../public/images/slideshow/10.png";
import imageSlideshow11 from "../public/images/slideshow/11.png";
import imageSlideshow12 from "../public/images/slideshow/12.png";
import imageSlideshow13 from "../public/images/slideshow/13.png";
import imageSlideshow14 from "../public/images/slideshow/14.png";
import imageSlideshow15 from "../public/images/slideshow/15.png";
import imageSlideshow16 from "../public/images/slideshow/16.png";
import imageSlideshow17 from "../public/images/slideshow/17.png";
import imageSlideshow18 from "../public/images/slideshow/18.png";
import imageSlideshow19 from "../public/images/slideshow/19.png";
import imageSlideshow20 from "../public/images/slideshow/20.png";
import imageSlideshow21 from "../public/images/slideshow/21.png";
import imageSlideshow22 from "../public/images/slideshow/22.png";
import imageSlideshow23 from "../public/images/slideshow/23.png";
import imageSlideshow24 from "../public/images/slideshow/24.png";
import imageSlideshow25 from "../public/images/slideshow/25.png";
import imageSlideshow26 from "../public/images/slideshow/26.png";
import imageSlideshow27 from "../public/images/slideshow/27.png";

export default function Index(): JSX.Element {
  return (
    <>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Xanycki</h1>
      <EmblaCarousel style={{ maxHeight: "512px" }}>
        <Image src={imageSlideshow1} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow2} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow3} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow4} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow5} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow6} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow7} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow8} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow9} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow10} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow11} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow12} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow13} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow14} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow15} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow16} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow17} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow18} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow19} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow20} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow21} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow22} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow23} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow24} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow25} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow26} alt="Xanycki's art." quality="100" placeholder="blur" />
        <Image src={imageSlideshow27} alt="Xanycki's art." quality="100" placeholder="blur" />
      </EmblaCarousel>
      <h3 style={{ textAlign: "center" }}>Commission information is available on Carrd.</h3>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      title: "Xanycki",
      description: "The index for Xanycki's art website."
    }
  };
}
