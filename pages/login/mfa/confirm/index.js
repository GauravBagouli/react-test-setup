import React from 'react';
import dynamic from 'next/dynamic';
const MFAConfirmComponent = dynamic(
  () => import('@/components/common/login/mfa-confirm.js'),
  { ssr: false },
);

export default function MFAConfirm() {
  return <MFAConfirmComponent />;
}
