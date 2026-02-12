import React from 'react'
import HeroSection from '../components/HeroSection'

import QatarContent from '../components/QatarContent'


import QatarHeader from '../components/QatarHeader'
import QatarFooter from '../components/QatarFooter'
import QatarProductSection from '../components/QatarProductSection'
import QatarWhyWeChoose from '../components/QatarWhyWeChoose'
import QatarIndustry from '../components/QatarIndustry'

function page() {
  return (
    <>
      <QatarHeader/>
      
      <HeroSection />
       <QatarContent />
      <QatarProductSection />
      <QatarWhyWeChoose />
     
      <QatarIndustry/>
     <QatarFooter/>
      </>
    
  )
}

export default page