import React from 'react';
import dynamic from 'next/dynamic';
const AddressComponent = dynamic(
  () => import('@/components/common/signup/address1'),
  { ssr: false },
);

export default function Signup() {
  return <AddressComponent />;
}
