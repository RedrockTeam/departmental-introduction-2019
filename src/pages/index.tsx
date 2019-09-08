import React, { useState, Fragment, useEffect } from 'react'
import styles from './index.less'
import router from 'umi/router'
import spaceshipPng from '@/assets/img/spaceship.png'
import useWord from '@/utilites/useWord'
import TapMp3 from '@/assets/mp3/tap.mp3'

const Content: React.FC = () => {
  const words = ['欢迎来到红岩网校空间站', '我是Redrocker.AI', '1942年2月14日 世界上第一台电子计算机在美国宾夕法大学问世', '2019年9月 加入我们 探索信息时代的星辰大海']
  const pTexts = [useWord(words[0], 0.02, 100),useWord(words[1], 0.02, 1000), useWord(words[2], 0.02, 2000), useWord(words[3], 0.02, 4000)]
  const setTimeoutRef: any = React.useRef();
  useEffect(()=>{
    setTimeoutRef.current = setTimeout(()=>{
      router.replace({
        pathname: '/gate'
      })
    }, 7500)
    return () => {
      clearTimeout(setTimeoutRef.current)
    }
  }, [])

  const Word: React.FC<{ text: string, pText: string }> = ({text, pText}) => {
    return (<Fragment>
      <p style={{ display: pText.length < text.length ? '' : 'none' }}>{pText}</p>
      <p style={{ display: pText.length < text.length ? 'none' : '' }}>{text}</p>
    </Fragment>)
  }
  return (
    <Fragment>
      <div className={styles.spaceship}>
        <img src={spaceshipPng} alt="spaceship" />
      </div>
      <div className={styles.word}>
        { words.map((word, index)=><Word text={word} pText={pTexts[index]} key={index}/>) }
      </div>
    </Fragment>
  )
}

const IndexPage: React.FC = () => {
  const [isOk, setOk] = useState(false)
  window.addEventListener('orient', () => {
    setOk(true)
  })
  return <div className={styles.background}>{isOk ? <Fragment><Content /><audio src={TapMp3} autoPlay loop /></Fragment> : ''}</div>
}

export default IndexPage
