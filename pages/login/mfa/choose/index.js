import React from 'react';
import dynamic from 'next/dynamic';
const MfaChooseComponent = dynamic(
  () => import('@/components/common/login/mfa-choose'),
  { ssr: false },
);

export default function MfaChoose() {
  return <MfaChooseComponent />;
}
