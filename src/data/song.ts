import cover1 from '@/images/album-covers/1.png'
import cover2 from '@/images/album-covers/2.png'
import cover3 from '@/images/album-covers/3.png'
import cover4 from '@/images/album-covers/4.png'
import cover5 from '@/images/album-covers/5.png'
import cover6 from '@/images/album-covers/6.png'
import cover7 from '@/images/album-covers/7.png'
import cover8 from '@/images/album-covers/8.png'
import cover9 from '@/images/album-covers/9.png'
import cover10 from '@/images/album-covers/10.png'
import cover11 from '@/images/album-covers/11.png'
import cover12 from '@/images/album-covers/12.png'
import { StaticImageData } from 'next/image'

export const songs = [
  { id: 1, title: 'The Search', artist: 'NF', cover: cover1 },
  { id: 2, title: 'Skyfall', artist: 'Adele', cover: cover2 },
  { id: 3, title: 'Take Me To Church', artist: 'Hozier', cover: cover3 },
  { id: 4, title: 'Heat Waves', artist: 'Glass Animals', cover: cover4 },
  { id: 5, title: 'Arcade', artist: 'Duncan Laurence', cover: cover5 },
  { id: 6, title: 'Summertime Sadness', artist: 'Lana Del Rey', cover: cover6 },
  { id: 7, title: 'Hola Amigo', artist: 'KR$NA, Seedhe Maut, Umair', cover: cover7 },
  { id: 8, title: 'AURA', artist: 'Qgryzek', cover: cover8 },
  { id: 9, title: 'Black Sheep', artist: 'Raftaar', cover: cover9 },
  { id: 10, title: 'Die With A Smile', artist: 'Lady Gaga, Bruno Mars', cover: cover10 },
  { id: 11, title: 'Downers At Dusk', artist: 'Talha Anjum, Umair', cover: cover11 },
  { id: 12, title: 'Empire', artist: 'Qgryzek', cover: cover12 },
]

export const playlist = [
  { id: 1, title: 'Liked Songs', description: 'Songs that you like', tracks: [1, 3, 4, 5, 8] },
  { id: 2, title: 'Favorites', description: 'Your favorite tracks', tracks: [2, 6, 9, 10] },
  { id: 3, title: 'Made For You', description: 'Music just made for you', tracks: [1, 11, 12] },
  { id: 4, title: 'Daily Mix', description: 'Tracks to keep you moving', tracks: [2, 4, 9] },
]

export type Song = {
  id: number
  title: string
  artist: string
  cover: StaticImageData
}

export type Playlist = {
  id: number
  title: string
  description: string
  tracks: number[]
}
