import React from 'react';
import dynamic from 'next/dynamic';
const MfaComponent = dynamic(
  () => import('@/components/common/login/mfa-confirm.js'),
  { ssr: false },
);

export default function Signup() {
  return <MfaComponent />;
}
