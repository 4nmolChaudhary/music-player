import React from 'react'

import Image from 'next/image'
import { Song } from '@/data/song'
import { Heart } from 'lucide-react'

const AlbumCover = ({ playingSong }: { playingSong: Song | undefined }) => {
  return (
    <div className={'col-span-3 row-span-5 col-start-4 row-start-1 bg-black relative'}>
      <button className='z-20 absolute top-2 right-2 cursor-pointer border-none outline-none bg-none justify-center items-center text-accent'>
        <Heart fill='currentColor' size={30} strokeWidth={1} absoluteStrokeWidth />
      </button>
      <div className='w-full h-full absolute top-0 left-0 bg-accent z-10 mix-blend-color'></div>
      {playingSong && <Image src={playingSong.cover} alt={`${playingSong.title}-cover`} width={320} height={330} className='aspect-[0.95]' />}
    </div>
  )
}

export default AlbumCover
