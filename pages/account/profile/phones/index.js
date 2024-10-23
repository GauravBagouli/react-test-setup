import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const PhonesComponent = dynamic(
  () => import('@/components/account/profileContacts'),
  { ssr: false },
);

export default function Login() {
  return <>
    <Navbar/>
    <PhonesComponent />
  </>
}
