import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const AboutComponent = dynamic(
  () => import('@/components/account/about'),
  { ssr: false },
);

export default function Login() {
  return <>
    <Navbar/>
    <AboutComponent/>;
  </>
}
