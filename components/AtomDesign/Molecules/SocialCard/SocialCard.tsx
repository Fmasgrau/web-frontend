import Image from 'next/image';
import React from 'react';

export default function SocialCard({ src, height, width, label }) {
  return (
    <div className='flex justify-center'>
      <div className='p-4 flex justify-center flex-col'>
        <Image src={src} height={height} width={width} />
        <p className='mt-2 flex justify-center'>{label}</p>
      </div>
    </div>
  );
}
