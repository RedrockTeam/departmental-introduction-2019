import React, { Fragment, useState } from 'react'
import styles from './departmentLayer.less'
import useProcess from '@/utilites/useProcess'
import flashMp3 from '@/assets/mp3/flash.mp3'

const DepartmentLayer: React.FC = ({ children }) => {
  const isShow = useProcess(1000)
  const isShowDetal = useProcess(1500)
  if (isShowDetal) {
    sessionStorage.setItem('isWordShow', 'true')
  } else {
    sessionStorage.setItem('isWordShow', 'false')
  }

  return (
    <Fragment>
      <div className={styles.backgroundDyeing} />
      <audio src={flashMp3} autoPlay />
      <div
        className={styles.backgroundGrid}
        style={{
          clipPath: isShow ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
          WebkitClipPath: isShow ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
        }}
      />
      <div
        className={styles.backgroundOrigin}
        style={{
          clipPath: isShow ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)',
          WebkitClipPath: isShow ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)',
        }}
      />
      {isShow ? (
        <div className={styles.children} style={{ opacity: isShowDetal ? 1 : 0 }}>
          {children}
        </div>
      ) : (
        ''
      )}
    </Fragment>
  )
}

export default DepartmentLayer
