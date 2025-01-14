import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const ProfileComponent = dynamic(
  () => import('@/components/account/profileNames'),
  { ssr: false },
);

export default function Login() {
  return <>
    <Navbar/>
    <ProfileComponent />
  </>
}
