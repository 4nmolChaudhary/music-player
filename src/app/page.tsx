'use client'
import { useState } from 'react'

import AlbumCover from '@/components/album-cover'
import AudioWaveform from '@/components/audio-waveform'
import PlaybackControls from '@/components/playback-controls'
import PlayerMain from '@/components/player-main'
import Tracks from '@/components/tracks'
import Playlist from '@/components/playlist'

import { Song, Playlist as PlayListType } from '@/data/song'

export default function Home() {
  const [playingSong, setPlayingSong] = useState<Song>()
  const [currentPlayList, setPlaylist] = useState<PlayListType>()
  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <div style={{ backgroundSize: '22.05px auto', backgroundPosition: 'top left', opacity: '0.1' }} className='absolute h-full top-0 right-0 left-0 -z-1 bg-repeat bg-[url(https://framerusercontent.com/images/zkZcqLYKrbf3IcoLGmkQF4odXvY.svg)]'></div>
      <main className='flex justify-center items-center h-screen w-full'>
        <div className='w-[1278px] h-[85%] grid grid-cols-12 grid-rows-12 gap-2'>
          <Playlist currentPlayList={currentPlayList} setPlaylist={setPlaylist} />
          <AudioWaveform />
          <Tracks currentPlayList={currentPlayList} playingSong={playingSong} setPlayingSong={setPlayingSong} />
          <AlbumCover playingSong={playingSong} />
          <PlayerMain playingSong={playingSong} />
          <div className='col-span-6 row-span-3 col-start-7 row-start-10 bg-black'>7</div>
          <PlaybackControls />
        </div>
      </main>
    </div>
  )
}

