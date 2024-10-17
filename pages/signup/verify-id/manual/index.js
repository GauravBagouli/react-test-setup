import React from 'react'
import dynamic from 'next/dynamic';
const IdvManualComponent = dynamic(() => import('@/components/common/signup/verify-id-manual'),{ ssr: false });

export default function IdvManual() {
  return (
     <IdvManualComponent/>
  )
}
