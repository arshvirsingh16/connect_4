'use client';
import { useState, createContext, useContext } from 'react';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import Board from '@/components/Board';
import ScoreBoard from '@/components/ScoreBoard';
import { UserProvider } from "../context/UserContext";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  return (
    <>
      <UserProvider>
        <div className='min-w-full min-h-screen grid place-items-center '>
        <ScoreBoard/>
          <Board/>
        </div>
      </UserProvider>
    </>
  )
}
// 7 cols x 6rows