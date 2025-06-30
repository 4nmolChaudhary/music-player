'use client'
import React from 'react'
import Image from 'next/image'

import { Play } from 'lucide-react'

import { songs, Song, Playlist } from '@/data/song'
import { cn } from '@/lib/utils'

const Tracks = ({ playingSong, currentPlayList, setPlayingSong }: { currentPlayList: Playlist | undefined; playingSong: Song | undefined; setPlayingSong: React.Dispatch<React.SetStateAction<Song | undefined>> }) => {
  const tracks = songs.filter(d => currentPlayList?.tracks.includes(d.id))
  return (
    <div className='col-span-6 row-span-5 col-start-1 row-start-8 bg-black p-4'>
      <h1 className='mb-2'>Tracks in the playlist</h1>
      <div className='space-y-1'>
        {tracks.slice(0, 4).map(track => (
          <div key={track.id} onClick={() => setPlayingSong(track)} className={cn('group flex items-center gap-4 p-2 hover:bg-accent/30 transition-colors cursor-pointer', track.id === playingSong?.id && 'bg-accent/20 border border-accent')}>
            <div className='flex items-center gap-4 flex-1 min-w-0'>
              <div className='relative'>
                <div className='w-full h-full absolute top-0 left-0 bg-accent z-10 mix-blend-color'></div>
                <Image src={track.cover} alt={`${track.title} cover`} width={48} height={48} className='object-cover' />
                <div className={cn('absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-accent', track.id === playingSong?.id && 'opacity-100')}>
                  <Play className='h-4 w-4 fill-current' />
                </div>
              </div>
              <div className='flex-1 min-w-0'>
                <div className='font-medium text-sm truncate'>{track.title}</div>
                <div className='text-xs text-muted-foreground truncate'>{track.artist}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tracks
