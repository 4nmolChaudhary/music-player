'use client'
import React, { useState } from 'react'
import { Pause, SkipForward, SkipBack, Shuffle, Repeat, Play } from 'lucide-react'

import { songs, Song, Playlist, playlist } from '@/data/song'
import { cn } from '@/lib/utils'

const PlaybackControls = ({ playingSong, currentPlayList, setPlayingSong, setPlaylist, isPaused, setIsPaused }: { currentPlayList: Playlist | undefined; playingSong: Song | undefined; setPlayingSong: React.Dispatch<React.SetStateAction<Song | undefined>>; setPlaylist: React.Dispatch<React.SetStateAction<Playlist>>; isPaused: boolean; setIsPaused: () => void }) => {
  const [mode, setMode] = useState<'repeat' | 'shuffle' | 'none'>('none')
  const isShuffleOn = mode === 'shuffle'
  const isRepeatOn = mode === 'repeat'

  const changeTrack = (action: 'next' | 'prev') => {
    if (!currentPlayList || !playingSong || !playlist?.length || !currentPlayList) return

    let playlistIndex = playlist.findIndex(p => p.id === currentPlayList?.id)
    let trackIndex = currentPlayList.tracks.findIndex(id => id === playingSong.id)

    const currentTracks = currentPlayList.tracks

    if (mode === 'none') {
      if (action === 'next') {
        if (trackIndex < currentTracks.length - 1) {
          trackIndex += 1
        } else {
          playlistIndex = (playlistIndex + 1) % playlist.length
          currentPlayList = playlist[playlistIndex]
          trackIndex = 0
        }
      } else {
        if (trackIndex > 0) {
          trackIndex -= 1
        } else {
          playlistIndex = (playlistIndex - 1 + playlist.length) % playlist.length
          currentPlayList = playlist[playlistIndex]
          trackIndex = currentPlayList.tracks.length - 1
        }
      }
    } else if (mode === 'repeat') {
      if (action === 'next') {
        trackIndex = (trackIndex + 1) % currentTracks.length
      } else {
        trackIndex = (trackIndex - 1 + currentTracks.length) % currentTracks.length
      }
    } else if (mode === 'shuffle') {
      const availableTrackIds = currentTracks.length > 1 ? currentTracks.filter(id => id !== playingSong.id) : currentTracks
      const randomIndex = Math.floor(Math.random() * availableTrackIds.length)
      const randomSongId = availableTrackIds[randomIndex]
      const randomSong = songs?.find(s => s.id === randomSongId)
      if (randomSong) {
        setPlayingSong(randomSong)
      }
      return
    }

    const updatedPlaylist = playlist[playlistIndex]
    const nextSongId = updatedPlaylist.tracks[trackIndex]
    const nextSong = songs?.find(song => song.id === nextSongId)

    if (nextSong) {
      setPlaylist(updatedPlaylist)
      setPlayingSong(nextSong)
    }
  }
  const onPlayPause = () => {
    if (playingSong?.id) setIsPaused()
  }

  return (
    <>
      <ButtonContainer onClick={() => setMode(mode === 'none' ? 'shuffle' : 'none')} className={cn('col-start-4 row-start-6 bg-black', isShuffleOn && '!bg-accent')}>
        <Shuffle className={cn('justify-self-center self-center', isShuffleOn && 'stroke-black')} size={30} strokeWidth={2} absoluteStrokeWidth />
      </ButtonContainer>
      <ButtonContainer onClick={() => setMode(mode === 'none' ? 'repeat' : 'none')} className={cn('col-start-4 row-start-7 bg-black', isRepeatOn && '!bg-accent')}>
        <Repeat className={cn('justify-self-center self-center', isRepeatOn && 'stroke-black')} size={30} strokeWidth={2} absoluteStrokeWidth />
      </ButtonContainer>
      <ButtonContainer onClick={() => changeTrack('next')} className='col-start-6 row-start-6'>
        <SkipForward fill='currentColor' className='justify-self-center self-center' size={30} strokeWidth={1} absoluteStrokeWidth />
      </ButtonContainer>
      <ButtonContainer onClick={() => changeTrack('prev')} className='col-start-6 row-start-7'>
        <SkipBack fill='currentColor' className='justify-self-center self-center' size={30} strokeWidth={1} absoluteStrokeWidth />
      </ButtonContainer>
      <ButtonContainer onClick={onPlayPause} className='row-span-2 col-start-5 row-start-6'>
        {!isPaused ? <Pause fill='currentColor' className='justify-self-center self-center' size={50} strokeWidth={1} absoluteStrokeWidth /> : <Play fill='currentColor' className='justify-self-center self-center' size={50} strokeWidth={1} absoluteStrokeWidth />}
      </ButtonContainer>
    </>
  )
}

const ButtonContainer = ({ children, className, onClick }: { children: React.ReactNode; className: string; onClick: () => void }) => (
  <div className={`bg-black ${className}`}>
    <button onClick={onClick} className='cursor-pointer border-none outline-none bg-none w-full h-full flex justify-center items-center hover:bg-popover-foreground/20 text-accent'>
      {children}
    </button>
  </div>
)

export default PlaybackControls
