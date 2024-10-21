import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

function index() {
  const router = useRouter();

  useEffect(() => {
    router.push('/login');
  }, []);

  return <div></div>;
}

export default index;
