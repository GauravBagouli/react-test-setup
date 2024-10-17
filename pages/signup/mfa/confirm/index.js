import React from 'react'
import dynamic from 'next/dynamic';
const MfaConfirm = dynamic(() => import('@/components/common/signup/mfa-confirm'),{ ssr: false });

export default function Signup() {
  return (
     <MfaConfirm/>
  )
}
