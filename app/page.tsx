import Image from 'next/image'
import { Inter } from '@next/font/google'
import Board from '@/components/Board'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='min-w-full min-h-screen grid place-items-center '>
      <Board/>
    </div>
  )
}
// 7 cols x 6rows