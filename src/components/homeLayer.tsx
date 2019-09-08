import React, { Fragment } from 'react'
import styles from './homeLayer.less'
const HomeLayer: React.FC = ({ children }) => {
  return (
    <Fragment>
      <div className={styles.wapper}>
        <div className={styles.children}>
          <div className={styles.wapper2} />
          {/*<div className={styles.wapper1} />*/}
          {children}
        </div>
      </div>
    </Fragment>
  )
}

export default HomeLayer
