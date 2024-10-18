import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { decodeData } from '@/helpers/auth';
const MfaChooseComponent = dynamic(
  () => import('@/components/common/login/mfa-choose'),
  { ssr: false },
);

export default function MfaChoose() {
  const router = useRouter();
  const { query } = router;
  const decodequery = decodeData(query?.data);
  return (
    <MfaChooseComponent
      mfaAuthenticators={decodequery?.mfa_authenticators}
      mfaToken={decodequery?.token}
    />
  );
}
