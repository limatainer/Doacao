import React from 'react'
import Main from '../../assets/img/Main.svg';
import Donations from '../../components/Donations';
export default function Home() {
  return (
    <div>
      <h1 className='container text-center'>Esta plataforma é dedicada a doações apenas dentro da região metropolitana de Recife</h1>
      <div className='flex h-screen'>
        <div className='m-auto p-12'>
          <img src={Main} alt="Main" />
        </div>
      </div>
      <Donations />
    </div>
  )
}
