import { useRef } from "react";
import Image from "next/image";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

//styles
import styles from "../../assets/scss/components/CarouselSimple.module.scss";


function CarouselSimple(): JSX.Element {
  const carouselRef = useRef<HTMLDivElement>(null);


  const handleScroll = (scrollStepX: number): void => {
    carouselRef.current && carouselRef.current.scrollBy({ left: scrollStepX, behavior: "smooth" });
  };

  return (
    <div className={styles["renoshop-carousel-siple"]}>
      <div className={`${styles["renoshop-carousel-siple__control"]} ${styles["renoshop-carousel-siple__control-prew"]}`} onClick={() => handleScroll(-85)}>
        <BsChevronDoubleLeft className={styles["renoshop-carousel-siple__chevron"]}/>
      </div>
      <div className={styles["renoshop-carousel-siple__content"]} ref={carouselRef}>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <Image loader={() => "https://picsum.photos/200/300"} src={"https://picsum.photos/200/300"} alt={""} layout="fill" className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <Image loader={() => "https://picsum.photos/200/300"} src={"https://picsum.photos/200/300"} alt={""} layout="fill" className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <Image loader={() => "https://picsum.photos/200/300"} src={"https://picsum.photos/200/300"} alt={""} layout="fill" className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <Image loader={() => "https://picsum.photos/200/300"} src={"https://picsum.photos/200/300"} alt={""} layout="fill" className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <Image loader={() => "https://picsum.photos/200/300"} src={"https://picsum.photos/200/300"} alt={""} layout="fill" className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <Image loader={() => "https://picsum.photos/200/300"} src={"https://picsum.photos/200/300"} alt={""} layout="fill" className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <Image loader={() => "https://picsum.photos/200/300"} src={"https://picsum.photos/200/300"} alt={""} layout="fill" className="custom-img"/>
        </div>
      </div>
      <div className={`${styles["renoshop-carousel-siple__control"]} ${styles["renoshop-carousel-siple__control-next"]}`} onClick={() => handleScroll(85)}>
        <BsChevronDoubleRight className={styles["renoshop-carousel-siple__chevron"]}/>
      </div>
    </div>
  );
}

export default CarouselSimple;
