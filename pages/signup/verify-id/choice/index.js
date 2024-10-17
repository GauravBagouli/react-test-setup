import React from 'react'
import dynamic from 'next/dynamic';
const IdvChoiceComponent = dynamic(() => import('@/components/common/signup/verify-id-choice'),{ ssr: false });

export default function IdvChoice() {
  return (
     <IdvChoiceComponent/>
  )
}
