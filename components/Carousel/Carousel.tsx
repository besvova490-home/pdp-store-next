import { useRef, useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Product from "../Product";
import { classNames } from "coax-ui-lib-0";

//styles
import styles from "../../assets/scss/components/Carousel.module.scss";


function Carousel({ title }: any): JSX.Element {
  const [disabledDirection, setDisabledDirection] = useState<string>("");
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carouselRef.current && (carouselRef.current.clientWidth + 20 === carouselRef.current.scrollLeft)) setDisabledDirection("next");
    else if (carouselRef.current && (carouselRef.current.scrollLeft === 0)) setDisabledDirection("prev");
    else setDisabledDirection("");
  }, []);


  const handleScroll = (scrollStepX: number): void => {
    carouselRef.current && carouselRef.current.scrollBy({ left: scrollStepX, behavior: "smooth" });

    if (carouselRef.current && (carouselRef.current.clientWidth + 20 <= carouselRef.current.scrollLeft + scrollStepX)) setDisabledDirection("next");
    else if (carouselRef.current && (carouselRef.current.scrollLeft + scrollStepX <= 0)) setDisabledDirection("prev");
    else setDisabledDirection("");
  };

  const prevArrowClass = classNames(
    styles["renoshop-carousel__control"],
    styles["renoshop-carousel__control-prev"],
    {
      [styles["renoshop-carousel__control_disabled"]]: disabledDirection === "prev"
    }
  );

  const nextArrowClass = classNames(
    styles["renoshop-carousel__control"],
    styles["renoshop-carousel__control-next"],
    {
      [styles["renoshop-carousel__control_disabled"]]: disabledDirection === "next"
    }
  );


  return (
    <div className={styles["renoshop-carousel"]}>
      <div className={styles["renoshop-carousel__header"]}>
        <span className={styles["renoshop-carousel__header-title"]}>{ title }</span>
        <div className={styles["renoshop-carousel__controls"]}>
          <div
            className={prevArrowClass}
            onClick={() => handleScroll(-290)}
          >
            <BsArrowLeft className={styles["renoshop-carousel__control-icon"]}/>
          </div>
          <div className={nextArrowClass} onClick={() => handleScroll(290)}>
            <BsArrowRight className={styles["renoshop-carousel__control-icon"]}/>
          </div>
        </div>
      </div>
      <div className={styles["renoshop-carousel__content"]} ref={carouselRef}>
        <div className={styles["renoshop-carousel__item"]}>
          <Product title="Lorem" shortDescription="Lorem" id={0} amount={1}/>
        </div>
        <div className={styles["renoshop-carousel__item"]}>
          <Product title="Lorem" shortDescription="Lorem" id={0} amount={1}/>
        </div>
        <div className={styles["renoshop-carousel__item"]}>
          <Product title="Lorem" shortDescription="Lorem" id={0} amount={1}/>
        </div>
        <div className={styles["renoshop-carousel__item"]}>
          <Product title="Lorem" shortDescription="Lorem" id={0} amount={1}/>
        </div>
        <div className={styles["renoshop-carousel__item"]}>
          <Product title="Lorem" shortDescription="Lorem" id={0} amount={1}/>
        </div>
        <div className={styles["renoshop-carousel__item"]}>
          <Product title="Lorem" shortDescription="Lorem" id={0} amount={1}/>
        </div>
        <div className={styles["renoshop-carousel__item"]}>
          <Product title="Lorem" shortDescription="Lorem" id={0} amount={1}/>
        </div>
        <div className={styles["renoshop-carousel__item"]}>
          <Product title="Lorem" shortDescription="Lorem" id={0} amount={1}/>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
