import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const AddressesComponent = dynamic(
  () => import('@/components/account/profileAddresses'),
  { ssr: false },
);

export default function Login() {
  return <>
    <Navbar/>
    <AddressesComponent />
  </>
}
