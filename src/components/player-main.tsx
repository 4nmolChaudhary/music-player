'use client'

import Image from 'next/image'
import { Song } from '@/data/song'

const PlayerMain = ({ playingSong }: { playingSong: Song | undefined }) => {
  return (
    <div className='col-span-6 row-span-9 col-start-7 row-start-1 bg-black p-4'>
      <h2 className='text-4xl tracking-tight'>{playingSong?.title}</h2>
      <div className='font-[family-name:var(--font-geist-mono)] opacity-75'>{playingSong?.artist}</div>
      <div className='relative mx-auto'>
        <div className='w-full h-full absolute top-0 left-0 bg-accent z-10 mix-blend-color'></div>
        <Image className='z-0 mx-auto' priority unoptimized src='/orb.gif' width={500} height={500} alt='my gif' style={{ filter: 'hue-rotate(265deg)' }} />
      </div>
      <h2 className='text-8xl tracking-tight'>1:20</h2>
      <div className='h-1 bg-white/30 w-full mt-4'>
        <div className='h-1 bg-white' style={{ width: `${(80 * 100) / 150}%` }}></div>
      </div>
    </div>
  )
}

export default PlayerMain
