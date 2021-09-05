import { useRef } from "react";
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
          <img src={"https://picsum.photos/200/300"} alt={""} className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <img src={"https://picsum.photos/200/300"} alt={""} className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <img src={"https://picsum.photos/200/300"} alt={""} className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <img src={"https://picsum.photos/200/300"} alt={""} className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <img src={"https://picsum.photos/200/300"} alt={""} className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <img src={"https://picsum.photos/200/300"} alt={""} className="custom-img"/>
        </div>
        <div className={styles["renoshop-carousel-siple__content-image"]}>
          <img src={"https://picsum.photos/200/300"} alt={""} className="custom-img"/>
        </div>
      </div>
      <div className={`${styles["renoshop-carousel-siple__control"]} ${styles["renoshop-carousel-siple__control-next"]}`} onClick={() => handleScroll(85)}>
        <BsChevronDoubleRight className={styles["renoshop-carousel-siple__chevron"]}/>
      </div>
    </div>
  );
}

export default CarouselSimple;
