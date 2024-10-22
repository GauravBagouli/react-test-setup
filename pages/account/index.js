import React from 'react';
import dynamic from 'next/dynamic';
const NavBar = dynamic(
  () => import('@/components/common/nav'),
  { ssr: false },
);

export default function Login() {
  return <NavBar/>;
}
