import React from 'react';
import dynamic from 'next/dynamic';
const AddressComponent = dynamic(
  () => import('@/components/common/signup/address'),
  { ssr: false },
);

export default function Signup() {
  return <AddressComponent />;
}
