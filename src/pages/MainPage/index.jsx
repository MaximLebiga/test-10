import style from './MainPage.module.css'
import LeftSide from "./sections/LeftSide"
import RightSide from "./sections/RightSide"

const MainPage = () => {
  return (
    <div className={style.container}>
      <aside className={style.left_side}>
        <LeftSide />
      </aside>
      <aside className={style.right_side}>
        <RightSide />
      </aside>
    </div>
  )
}

export default MainPage