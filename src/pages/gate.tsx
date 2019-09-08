import React from 'react'
import styles from './gate.less'
import router from 'umi/router'
import useProcess from '@/utilites/useProcess'

const IndexPage: React.FC = () => {
  const isProcess = useProcess()
  const isProcessText = useProcess(5000)
  const handelEnterClick = () => {
    if (isProcessText) {
      router.replace({
        pathname: '/home'
      })
    }
  }
  return (
    <div>
      <div className={styles.backGround} style={{ backgroundSize: isProcess ? '170%': '100%' }}/>
      <div className={styles.text} style={{ opacity: isProcessText ? 1: 0 }}>
        推开这扇大门<br/>
        我们将带领你解析我们的多元构成
      </div>
      <div className="spinner" onClick={handelEnterClick} style={{ opacity: isProcessText ? 1: 0 }}>
        <div className="double-bounce1"/>
        <div className="double-bounce2"/>
      </div>
    </div>
  )
}

export default IndexPage
