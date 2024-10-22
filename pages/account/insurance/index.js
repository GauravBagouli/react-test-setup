import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const InsuranceComponent = dynamic(
  () => import('@/components/account/insurance'),
  { ssr: false },
);

export default function Login() {
  return <>
    <Navbar/>
    <InsuranceComponent/>
  </>
}
