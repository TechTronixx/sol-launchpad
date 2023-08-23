import Carousel from "nuka-carousel";
import Image from "next/image";
import { HeroImg1, HeroImg2, HeroImg3 } from "@images";
const Carouselslider = () => {
  return (
    <Carousel
      autoplay
      wrapAround
      withoutControls={true}
      dragThreshold={0.25}
      style={{ borderRadius: "10px", aspectRatio: "16/9" }}
    >
      <Image
        src={HeroImg1}
        alt={""}
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg2}
        alt={""}
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg3}
        alt={""}
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg1}
        alt={""}
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg1}
        alt={""}
        style={{
          objectFit: "cover",
          width: "100%",
          borderRadius: "10px",
        }}
      />
    </Carousel>
  );
};
export default Carouselslider;
