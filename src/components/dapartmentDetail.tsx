import React, { Fragment, useState } from 'react'
import styles from './dapartmentDetail.less'
import useWord from '@/utilites/useWord'
import TapMp3 from '@/assets/mp3/tap.mp3'

const DepartmentDetail: React.FC = ({ children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const P: React.FC<{ text: string }> = ({text}) => {
    let delay = 1000
    if (sessionStorage.getItem('isWordShow') === 'true') {
      delay = 0
    }
    const pText = useWord(text, 0.2, delay)
    return (<Fragment>
      <p style={{ opacity: pText.length < text.length ? 1 : 0, position: 'absolute' }}>{pText}</p>
      <p style={{ opacity: pText.length < text.length ? 0 : 1 }}>{text}</p>
    </Fragment>)
  }

  return (
    <div className={styles.wapper}>
      <P text={children as string}/>
      <audio src={TapMp3} autoPlay />
    </div>
  )
}

export default DepartmentDetail
