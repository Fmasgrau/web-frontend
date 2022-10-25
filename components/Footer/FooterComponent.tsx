import React from 'react';
import { BiUser, BiQrScan, BiDotsHorizontalRounded } from 'react-icons/bi';

export default function FooterComponent() {
  const iconSize = '32';
  return (
    <div className='flex justify-between items-center bg-slate-100 p-3 fixed inset-x-0 bottom-0'>
      <div>
        <BiUser size={iconSize} title='user icon' />
      </div>
      <div>
        <BiQrScan size='40' />
      </div>
      <div>
        <BiDotsHorizontalRounded size={iconSize} />
      </div>
    </div>
  );
}
