import React, { Fragment } from 'react'
import departments from '@/json/department'
import HomeLayer from '@/components/homeLayer'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Swiper from 'react-id-swiper'
import { SwiperOptions } from 'swiper'
import styles from './home.less'
import router from 'umi/router'
import spaceshipPng from '@/assets/img/spaceship.png'

const SpaceShape: React.FC = () => {
  return (
    <div className={styles.spaceship}>
      <img src={spaceshipPng} alt="spaceship" />
    </div>
  )
}

const IndexPage: React.FC = () => {
  const handelDepartmentClick = (index: number) => {
    router.replace({
      pathname: '/department',
      query: {
        index,
      },
    })
    sessionStorage.setItem('initialSlide', String(index))
  }
  const index = sessionStorage.getItem('initialSlide')
  const params: SwiperOptions = {
    // 切换效果
    effect: 'coverflow',
    // 开始图片
    initialSlide: index ? parseInt(index) : 2,
    // 是否有手形
    grabCursor: false,
    // 激活的那个居中
    centeredSlides: true,
    slidesPerView: 'auto',
    loopAdditionalSlides: 3,
    on: {
      tap() {
        // @ts-ignore
        handelDepartmentClick(this.activeIndex % 5)
      },
    },
    loop: true,
    coverflowEffect: {
      rotate: 20,
      stretch: -40,
      depth: -50,
      modifier: 0.6,
      slideShadows: false,
    },
  }
  // @ts-ignore
  return (
    <Fragment>
      <HomeLayer>
        <SpaceShape />
        <div className={styles.swiperWapper}>
          <div className={styles.swiperWapper2}>
            <Swiper {...params} containerClass={styles.swiperContainer}>
              {departments.map((department, index) => (
                <div className={`${styles['item']} ${department.slug}`} key={index} />
              ))}
            </Swiper>
          </div>
        </div>
      </HomeLayer>
    </Fragment>
  )
}

export default IndexPage
