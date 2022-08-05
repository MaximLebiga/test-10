import style from "./StoreButton.module.css"

const StoreButton = ({ comingSoon, icon, mainText, secondaryText, extraStyles }) => {
  return (
    <div className={`${extraStyles} ${style.wrapper}`}>
      {comingSoon && <p className={style.text}>Coming soon</p>}
      <button className={style.button}>
        {icon}
        <span className={style.text_wrapper}>
          <span className={style.text_secondary}>{secondaryText}</span>
          <span className={style.text_main}>{mainText}</span>
        </span>
      </button>
    </div>
  )
}

export default StoreButton