'use client'
import { useState } from 'react'

import AlbumCover from '@/components/album-cover'
import AudioWaveform from '@/components/audio-waveform'
import PlaybackControls from '@/components/playback-controls'
import PlayerMain from '@/components/player-main'
import Tracks from '@/components/tracks'
import Playlist from '@/components/playlist'
import AboutArtist from '@/components/about-artist'

import { Song, Playlist as PlayListType, playlist } from '@/data/song'

export default function Home() {
  const [playingSong, setPlayingSong] = useState<Song>()
  const [currentPlayList, setPlaylist] = useState<PlayListType>(playlist[0])
  const [isPaused, setIsPaused] = useState(true)
  const [likedSongs, setLikedSongs] = useState<number[]>([])
  return (
    <div className='flex min-h-screen flex-col items-center justify-items-center w-full font-[family-name:var(--font-inter-tight)]'>
      <main className='flex justify-center items-center h-screen w-full'>
        <div className='w-[1278px] h-[85%] grid grid-cols-12 grid-rows-12 gap-2' style={{ gridTemplateRows: 'repeat(12, 3.72rem)' }}>
          <Playlist currentPlayList={currentPlayList} setPlaylist={setPlaylist} />
          <AudioWaveform isPaused={isPaused} playingSongId={playingSong?.id} />
          <Tracks setIsPaused={() => setIsPaused(false)} currentPlayList={currentPlayList} playingSong={playingSong} setPlayingSong={setPlayingSong} />
          <AlbumCover playingSong={playingSong} />
          <PlayerMain likedSongs={likedSongs} setLikedSongs={setLikedSongs} playingSong={playingSong} />
          <AboutArtist playingSong={playingSong} />
          <PlaybackControls isPaused={isPaused} setIsPaused={() => setIsPaused(p => !p)} setPlaylist={setPlaylist} currentPlayList={currentPlayList} playingSong={playingSong} setPlayingSong={setPlayingSong} />
        </div>
      </main>
    </div>
  )
}
