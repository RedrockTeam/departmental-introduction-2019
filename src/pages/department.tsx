import React, { Fragment } from 'react'
import { RCProps } from '@/interface/router'
import departments from '@/json/department'
import styles from './department.less'
import { IRouterQuery, IDetailBoxProps } from '@/interface/department'

import DepartmentLayer from '@/components/departmentLayer'
import VBack from '@/components/Vback'
import DepartmentButton from '@/components/departmentButton'
import DepartmentTitle from '@/components/departmentTitle'
import DepartmentDetail from '@/components/dapartmentDetail'

import IconBrain from '@/assets/img/departmentIconBrain.png'
import IconArt from '@/assets/img/departmentIconArt.png'
import IconPhone from '@/assets/img/departmentIconPhone.png'
import IconEarth from '@/assets/img/departmentIconEarth.png'
import IconSre from '@/assets/img/departmentIconSre.png'
import DepartmentSlider from '@/components/departmentSlider'
import useRouter from '@/utilites/useRouter'
import { router } from 'umi'
import TapMp3 from '@/assets/mp3/tap.mp3'

const SelectionControl: React.FC = () => {
  const Urouter = useRouter<{ index: string }>()
  const index = parseInt(Urouter.param.index)
  const handelDepartmentButtonClick = (index: number) => {
    router.replace({
      pathname: '/department',
      query: {
        index
      }
    })
    // @ts-ignore
    document.getElementById('mp1').innerHTML=`<audio src=${TapMp3} autoplay/>`
  }
  return (
    <div className={styles.selectionControl}>
      <div className={styles.iconBrain}>
        <DepartmentButton>
          <div onClick={()=>handelDepartmentButtonClick(0)}>
            <img src={IconBrain} alt='IconBrain' style={index===0? { opacity: 1 } :{}}/>
          </div>
        </DepartmentButton>
      </div>
      <div className={styles.iconArt}>
        <DepartmentButton>
          <div onClick={()=>handelDepartmentButtonClick(1)}>
            <img src={IconArt} alt='IconArt' style={index===1? { opacity: 1 } :{}}/>
          </div>
        </DepartmentButton>
      </div>
      <div className={styles.iconPhone}>
        <DepartmentButton>
          <div onClick={()=>handelDepartmentButtonClick(2)}>
            <img src={IconPhone} alt='IconPhone' style={index===2? { opacity: 1 } :{}}/>
          </div>
        </DepartmentButton>
      </div>
      <div className={styles.iconEarth}>
        <DepartmentButton>
          <div onClick={()=>handelDepartmentButtonClick(3)}>
            <img src={IconEarth} alt='IconEarth' style={index===3? { opacity: 1 } :{}}/>
          </div>
        </DepartmentButton>
      </div>
      <div className={styles.iconSre}>
        <DepartmentButton>
          <div onClick={()=>handelDepartmentButtonClick(4)}>
            <img src={IconSre} alt='IconSre' style={index===4? { opacity: 1 } :{}}/>
          </div>
        </DepartmentButton>
      </div>
    </div>
  )
}

const DetailBox: React.FC<IDetailBoxProps> = ({ name, detail, mark }) => {
  const router = useRouter<{ index: string }>()
  if(!router.param.index) {
    return <div />
  }
  return (
    <div className={styles.detailBox}>
      <DepartmentTitle>{name}介绍</DepartmentTitle>
      <DepartmentDetail>{detail}</DepartmentDetail>
      <DepartmentSlider {...mark} />
    </div>
  )
}

const EnterButton: React.FC = () => {
  const handelEnterClick = () => {
    router.replace({
      pathname:'/joinin'
    })
  }
  return (
    <div className={styles.enterButton} onClick={handelEnterClick}>
      报名
    </div>
  )
}

const DepartmentPage: React.FC<RCProps<IRouterQuery>> = ({ location }) => {
  const index = parseInt(location.query.index)
  return (
    <Fragment>
      <DepartmentLayer>
        <VBack />
        <SelectionControl />
        <DetailBox
          name={departments[index].name}
          detail={departments[index].detail}
          mark={departments[index].mark}
        />
        <EnterButton />
      </DepartmentLayer>
    </Fragment>
  )
}

export default DepartmentPage
