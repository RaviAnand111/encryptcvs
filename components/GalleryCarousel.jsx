import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "../styles/gallerycarousel.module.css";

function GalleryCarousel() {
  let src_arr = [];
  for (let i = 1; i <= 111; i++) {
    src_arr.push("/gallery_images/" + i + ".jpg");
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Events Gallery</h2>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        interval={1000}
      >
        {src_arr.map((src, index) => (
          <div key={index}>
            <Image src={src} width="850" height="650" className={styles.img} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default GalleryCarousel;
