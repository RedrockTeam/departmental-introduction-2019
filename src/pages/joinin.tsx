import React, { useEffect } from 'react'
import styles from './joinin.less'
import JoinInPng from '@/assets/img/joinin.png'

const JoinInPage: React.FC = () => {
  const event = new Event('exitFullscreen1');
  useEffect(()=>{
    window.dispatchEvent(event)
  }, [])

  return (
    <div className={styles.wapper}>
      <img src={JoinInPng} alt='JoinInPng' className={styles.joinInPng}/>
    </div>
  )
}

export default JoinInPage
