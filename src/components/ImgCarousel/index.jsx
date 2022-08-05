import Carousel from 'react-bootstrap/Carousel'
import img from "../../images/img.png"
import style from "./ImgCarousel.module.css"

const ImgCarousel = () => {
  return (
    <div className={style.wrapper}>
      <Carousel
        controls={false}
      >
        <Carousel.Item>
          <img alt="img" src={img} width={500} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="img" src={img} width={500} />
        </Carousel.Item>
        <Carousel.Item>
          <img alt="img" src={img} width={500} />
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default ImgCarousel
