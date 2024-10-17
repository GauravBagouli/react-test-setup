import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { decodeData } from '@/helpers/auth';
const MFAConfirmComponent = dynamic(
  () => import('@/components/common/login/mfa-confirm.js'),
  { ssr: false },
);

export default function MFAConfirm() {
  const router = useRouter();
  const { query } = router;
  const decodequery = decodeData(query?.page);
  return <MFAConfirmComponent page={decodequery} />;
}
