import Image from 'next/image';
import React from 'react';
import SocialCard from '../AtomDesign/Molecules/SocialCard/SocialCard';

export default function ProfileComponent() {
  const imageWidth = 64;
  const imageHeight = 64;
  return (
    <div className='flex-grow pb-20 pt-14'>
      <div><Image src='/images/facukoibanx.png' width={100} height={100} layout='responsive'/></div>
      <div className='flex justify-center mt-4'> <p className='mr-2'>Facu Mas</p> <Image src='/images/verified-badge.svg' width={24} height={24}/></div>
      <div className='columns-2'>
        <SocialCard height={imageHeight} width={imageWidth} src='/images/linkedin.svg' label='Linkedin'/>
        <SocialCard height={imageHeight} width={imageWidth} src='/images/whatsapp.svg' label='Whatsapp'/>
        <SocialCard height={imageHeight} width={imageWidth} src='/images/telegram.svg' label='Telegram'/>
        <SocialCard height={imageHeight} width={imageWidth} src='/images/instagram.svg' label='Instagram'/>
        <SocialCard height={imageHeight} width={imageWidth} src='/images/twitch.svg' label='Twitch'/>
        <SocialCard height={imageHeight} width={imageWidth} src='/images/plus.svg' label='Agregar nuevo'/>
      </div>
    </div>
  );
}
