import React from 'react'
import Main from '/assets/img/Main.png';
import Donations from '../../components/Donations';
export default function Home() {
  return (
    <div>
      <h1 className='text-center text-transparent bg-clip-text bg-gradient-to-r
           to-sky-400 from-doacao-300'>Esta plataforma é dedicada a doações apenas dentro da região metropolitana de Recife</h1>
      <div className='flex h-screen'>
        <div className='m-auto p-12'>
          <img src={Main} alt="Main" />
        </div>
      </div>
      <Donations />
    </div>
  )
}
