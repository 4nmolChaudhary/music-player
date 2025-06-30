'use client'
import React from 'react'
import { Pause, SkipForward, SkipBack, Shuffle, Repeat } from 'lucide-react'

const PlaybackControls = () => {
  return (
    <>
      <ButtonContainer className='col-start-4 row-start-6 bg-black'>
        <Shuffle className='justify-self-center self-center' size={30} strokeWidth={2} absoluteStrokeWidth />
      </ButtonContainer>
      <ButtonContainer className='col-start-4 row-start-7 bg-black'>
        <Repeat className='justify-self-center self-center' size={30} strokeWidth={2} absoluteStrokeWidth />
      </ButtonContainer>
      <ButtonContainer className='col-start-6 row-start-6'>
        <SkipForward fill='currentColor' className='justify-self-center self-center' size={30} strokeWidth={1} absoluteStrokeWidth />
      </ButtonContainer>
      <ButtonContainer className='col-start-6 row-start-7'>
        <SkipBack fill='currentColor' className='justify-self-center self-center' size={30} strokeWidth={1} absoluteStrokeWidth />
      </ButtonContainer>
      <ButtonContainer className='row-span-2 col-start-5 row-start-6'>
        <Pause fill='currentColor' className='justify-self-center self-center' size={50} strokeWidth={1} absoluteStrokeWidth />
      </ButtonContainer>
    </>
  )
}

const ButtonContainer = ({ children, className }: { children: React.ReactNode; className: string }) => (
  <div className={`bg-black ${className}`}>
    <button className='cursor-pointer border-none outline-none bg-none w-full h-full flex justify-center items-center hover:bg-popover-foreground/20 text-accent'>{children}</button>
  </div>
)

export default PlaybackControls
