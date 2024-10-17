import React from 'react'
import dynamic from 'next/dynamic';
const IdvConfirmComponent = dynamic(() => import('@/components/common/signup/verify-id-confirm'),{ ssr: false });

export default function IdvConfirm() {
  return (
     <IdvConfirmComponent/>
  )
}
