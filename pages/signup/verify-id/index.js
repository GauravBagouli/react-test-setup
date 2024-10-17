import React from 'react'
import dynamic from 'next/dynamic';
const VerifyId = dynamic(() => import('@/components/common/signup/verify-id.js'),{ ssr: false });

export default function Signup() {
  return (
     <VerifyId/>
  )
}
