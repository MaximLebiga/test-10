import { ReactComponent as GoogleIcon } from "../../icons/google.svg"
import style from "./LoginButton.module.css"

const LoginButton = ({ extraStyles }) => {
  return (
    <button className={`${style.button} ${extraStyles}`}>
      <GoogleIcon className={style.icon} width={49} />
      <span className={style.text_wrapper}>
        <span className={style.text_main}>Continue with Google</span>
        <span className={style.text_secondary}>Secured log-in</span>
      </span>
    </button>
  )
}

export default LoginButton