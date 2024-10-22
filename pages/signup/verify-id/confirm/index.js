import React from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { decodeData } from '@/helpers/auth';
const IdvConfirmComponent = dynamic(
  () => import('@/components/common/signup/verify-id-confirm'),
  { ssr: false },
);

export default function IdvConfirm() {
  const router = useRouter();
  const { query } = router;
  let decodequery = decodeData(query?.data);
  return <IdvConfirmComponent userInfo={decodequery} />;
}
