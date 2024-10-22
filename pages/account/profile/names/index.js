import React from 'react';
import dynamic from 'next/dynamic';
const ProfileComponent = dynamic(
  () => import('@/components/account/profileNames'),
  { ssr: false },
);

export default function Login() {
  return <>
    {/* <Navbar/> */}
    <ProfileComponent />
  </>
}
