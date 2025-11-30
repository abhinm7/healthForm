import React from 'react'
import styles from './Registration.module.css'
import TabNavigation from '../Common/TabNav/TabNav'
import IdentificationDetails from './IdentificationDetails/IdentificationDetails'
import ContactDetails from './ContactDetails/ContactDetails'
import KycDocuments from './KYCDetails/KYCDetails'
import Preferences from './Preferences/Preferences'
import ActionBar from './ActionBar/ActionBar'

const Registration = () => {
  return (
    <div className={styles.container}>
      <TabNavigation/>
      <IdentificationDetails/>
      <ContactDetails/>
      <KycDocuments/>
      <Preferences/>
    </div>
  )
}

export default Registration
