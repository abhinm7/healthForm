import React from 'react'
import styles from './Registration.module.css'
import TabNavigation from '../Common/TabNav/TabNav'
import IdentificationDetails from './IdentificationDetails/IdentificationDetails'
import ContactDetails from './ContactDetails/ContactDetails'

const Registration = () => {
  return (
    <div className={styles.container}>
      <TabNavigation/>
      <IdentificationDetails/>
      <ContactDetails/>
    </div>
  )
}

export default Registration
