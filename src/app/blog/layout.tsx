import BackButton from '@/components/BackButton'
import React from 'react'

const layout = ({children}:any) => {
  return (
    <>
      <BackButton />
      {children}
    </>
  )
}

export default layout
