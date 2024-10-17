import React from 'react'
import dynamic from 'next/dynamic';
const SignupComponent = dynamic(() => import('@/components/common/signup/index'),{ ssr: false });

export default function Signup() {
  return (
     <SignupComponent/>
  )
}
