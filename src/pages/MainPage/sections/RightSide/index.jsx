import LoginButton from '../../../../components/LoginButton'
import StoreButton from '../../../../components/StoreButton'
import style from './RightSide.module.css'
import {ReactComponent as AppleIcon} from "../../../../icons/apple.svg"

const RightSide = () => {
  return (
    <div>
      <div className={style.content}>
        <h1 className={style.title}>Welcome to HeyLife!</h1>
        <div className={style.wrapper}>
          <p className={style.text}>Give HeyLife a try for free.</p>
          <LoginButton extraStyles={style.login_button} />
          <p className={style.privacyText}>
            We value your <a href="#">privacy</a>, all of your information
            remains your own.
          </p>
          <div className={style.benefits_wrapper}>
            <p className={style.benefits_google}>
              <span className={style.benefits_google_span}>
                <span>G</span>
                <span>o</span>
                <span>o</span>
                <span>g</span>
                <span>l</span>
                <span>e</span>
              </span>
              Trusted
            </p>
            <p className={style.benefits_cc}>
              <span className={style.benefits_cc_span}>No CC</span>Needed
            </p>
          </div>
        </div>
      </div>
      <StoreButton
        secondaryText="Download on the"
        mainText="App Store"
        icon={<AppleIcon width={40} height={40} />}
        comingSoon
        extraStyles={style.StoreButton}
      />
    </div>
  )
}

export default RightSide