import Carousel from "nuka-carousel";
import Image from "next/image";
import HeroImg from "../images/heroImg.jpg";

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
        src={HeroImg}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",
          height: "100%",

          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",

          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",

          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <Image
        src={HeroImg}
        width={600}
        height={450}
        alt={""}
        style={{
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
    </Carousel>
  );
};
export default Carouselslider;
