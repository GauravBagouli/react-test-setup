import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
const SignupComponent = dynamic(
  () => import('@/components/common/signup/index'),
  { ssr: false },
);

export default function Signup() {
  const router = useRouter();
  const { query } = router;

  useEffect(() => {
    if (query?.access_code && query?.access_code != '46a52b') {
      router.push('/login');
    }
  }, [query]);
  return <SignupComponent />;
}
