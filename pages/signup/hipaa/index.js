import React from 'react'
import dynamic from 'next/dynamic';
const Hipaa = dynamic(() => import('@/components/common/signup/hipaa'),{ ssr: false });

export default function Signup() {
  return (
     <Hipaa/>
  )
}
