import React from 'react';
import dynamic from 'next/dynamic';
import Navbar from '@/components/common/nav';
const ChangePasswordComponent = dynamic(
  () => import('@/components/account/change-password'),
  { ssr: false },
);

export default function Login() {
  return <>
    <Navbar />
    <ChangePasswordComponent />
  </>
}
