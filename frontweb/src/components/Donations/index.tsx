import React from 'react'
import cesta from '../../assets/img/cestabasica.jpg';
export default function Donations() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-sm px-10">
          <img src={cesta} alt="" className="rounded-t-lg" />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-rocho-500">Computador</h2>
            <p className="text-rocho-500 mb-2">Conheçe alguém que precisa?</p>
            <a href="#" className="text-purple-600 hover:text-purple-500 underline text-sm">Indique aqui 👉</a>
          </div>

        </div>
        <div className="bg-white rounded-lg shadow-lg max-w-sm px-10">
          <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" className="rounded-t-lg" />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-rocho-500">Cestas Basicas</h2>
            <p className="text-rocho-500 mb-2">Conheçe alguém que precisa?</p>
            <a href="#" className="text-purple-600 hover:text-purple-500 underline text-sm">Indique aqui 👉</a>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}
