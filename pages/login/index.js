import React from 'react';
import dynamic from 'next/dynamic';
const LoginComponent = dynamic(
  () => import('@/components/common/login/index'),
  { ssr: false },
);

export default function Login() {
  return <LoginComponent />;
}
