import ImgCarousel from "../../../../components/ImgCarousel"
import StoreButton from "../../../../components/StoreButton"
import style from "./LeftSide.module.css"
import {ReactComponent as GooglePlayIcon} from "../../../../icons/googlePlay.svg"

const LeftSide = () => {
  return (
    <div className={style.content}>
      <a href="#" className={style.logo}>
        Hey Life
      </a>
      <div className={style.wrapper}>
        <h2 className={style.title}>
          Hello, <span>style!</span>
        </h2>
        <ImgCarousel />
      </div>
      <StoreButton
        secondaryText="Get it now"
        mainText="Google Play"
        icon={<GooglePlayIcon width={40} height={40} />}
        extraStyles={style.StoreButton}
      />
    </div>
  )
}

export default LeftSide