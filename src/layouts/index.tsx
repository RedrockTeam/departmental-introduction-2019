import React from 'react'
import withRouter from 'umi/withRouter'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import styles from './index.less'

export default withRouter(({ location, children }) => {
  const excludeUrl = ['gate1']
  return (
    <div className={styles.wapper}>
      {excludeUrl.some(item => location.pathname.includes(item)) ? (
        children
      ) : (
        <TransitionGroup>
          <CSSTransition key={location.pathname} classNames="page" timeout={300}>
            {children}
          </CSSTransition>
        </TransitionGroup>
      )}
    </div>
  )
})
