import React from 'react'
import FeatureItemAdmin from './FeatureItemAdmin'

function FeatureAdmin() {
   
  return (
    <div className=''>
        <div className='grid grid-cols-4 gap-4'>
    <FeatureItemAdmin/> 
    <FeatureItemAdmin/> 
    <FeatureItemAdmin/> 
    <FeatureItemAdmin/> 
        </div>
    </div>
  )
}

export default FeatureAdmin