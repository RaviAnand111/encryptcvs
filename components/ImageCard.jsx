import Image from "next/image";
import styles from "../styles/image_card.module.css";

function ImageCard({ src }) {
  return (
    <>
      <div className={styles.card}>
        <Image
          className={styles.img}
          src={src}
          height="100"
          width="100"
          layout="responsive"
          loading="lazy"
          sizes="(min-width: 66em) 33vw,
                 (min-width: 44em) 50vw,
                 100vw"
        />
      </div>
    </>
  );
}

export default ImageCard;
