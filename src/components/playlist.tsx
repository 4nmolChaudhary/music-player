import React from 'react'

import { playlist, Playlist as PlayListType } from '@/data/song'
import { cn } from '@/lib/utils'

const Playlist = ({ currentPlayList, setPlaylist }: { currentPlayList: PlayListType | undefined; setPlaylist: React.Dispatch<React.SetStateAction<PlayListType>> }) => {
  return (
    <div className='col-span-3 row-span-5 bg-black p-4'>
      <h1 className='mb-2'>My Playlists</h1>
      <div>
        {playlist.map(track => (
          <div key={track.id} onClick={() => setPlaylist(track)} className={cn('group flex items-center gap-4 p-2 hover:bg-accent/30 transition-colors cursor-pointer')}>
            <div className='flex items-center gap-4 flex-1 min-w-0'>
              <div className={cn('w-12 h-12 flex items-center justify-center', currentPlayList?.id === track.id && 'bg-accent text-black')}>
                <h2 className='text-4xl tracking-tight'>{track.id}</h2>
              </div>
              <div className={cn('flex-1 min-w-0', currentPlayList?.id === track.id && 'text-accent')}>
                <div className='font-medium text-sm truncate'>{track.title}</div>
                <div className='text-xs font-[family-name:var(--font-geist-mono)] opacity-75'>{track.description}</div>
                <div className='text-xs text-muted-foreground truncate'>{track.tracks.length} Songs</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Playlist
