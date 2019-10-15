import React, { Fragment } from 'react'
import styles from './Vback.less'
import router from 'umi/router';

const VBack: React.FC = () => {
  const handelBackClick = () => {
    router.replace({
      pathname: '/home'
    })
  }

  return (
    <>
      <div className={styles.content} onClick={handelBackClick}>
        <span>返回</span>
      </div>
      <div className={styles.divider}>
        <div/>
      </div>
      <div className={styles.divider}>
        <div/>
      </div>
    </>
  )
}

export default VBack
