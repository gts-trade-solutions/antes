import React from 'react'
import HeroSection from '../components/HeroSection'
import QatarHeader from '../components/QatarHeader'
import QatarIndustry from '../components/QatarIndustry'
import OmanContent from '../components/OmanContent'
import OmanProductSection from '../components/OmanProductSection'
import OmanWhyWeChoose from '../components/OmanWhyWeChoose'
import OmanFooter from '../components/OmanFooter'

function page() {
  return (
    <>
      <QatarHeader/>
      
      <HeroSection />
       <OmanContent />
      <OmanProductSection />
      <OmanWhyWeChoose />
     
      <QatarIndustry/>
     <OmanFooter/>
      </>
    
  )
}

export default page