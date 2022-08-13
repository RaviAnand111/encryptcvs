import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import styles from "../styles/brandcarousel.module.css";

function BrandCarousel() {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Our Partners</h2>
      <Carousel
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        interval={2000}
      >
        <div>
          <Image src="/gfg.png" width="300" height="300" />
        </div>
        <div>
          <Image src="/coding_ninjas.png" width="300" height="300" />
        </div>
        <div>
          <Image src="/competitor_gen.png" width="400" height="400" />
        </div>
        <div>
          <Image src="/du_beat.png" width="300" height="300" />
        </div>
        <div>
          <Image src="/du_club.png" width="300" height="300" />
        </div>
        <div>
          <Image src="/du_express.png" width="300" height="300" />
        </div>
        <div>
          <Image src="/du_vibes.png" width="300" height="300" />
        </div>
      </Carousel>
    </div>
  );
}

export default BrandCarousel;
