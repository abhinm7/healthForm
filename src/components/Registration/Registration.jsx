import React from 'react'
import styles from './Registration.module.css'
import TabNavigation from '../Common/TabNav/TabNav'
import IdentificationDetails from './IdentificationDetails/IdentificationDetails'

const Registration = () => {
  return (
    <div className={styles.container}>
      <TabNavigation/>
      <IdentificationDetails/>
    </div>
  )
}

export default Registration
