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
  let decodequery;
  if (query.page) {
    decodequery = decodeData(query?.page);
  } else {
    decodequery = decodeData(query?.data);
  }

  return (
    <MFAConfirmComponent
      page={decodequery?.page}
      mfaToken={decodequery?.mfa_token}
      oobCode={decodequery?.oob_code}
    />
  );
}
