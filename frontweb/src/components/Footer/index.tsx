import React from 'react'
import Logo from '../../assets/img/Logologo.svg'
export default function Footer() {
  return (
    <>
      <footer className="w-full h-16 bg-white border-t-2
            fixed left-0 bottom-0
            flex justify-center items-center
            text-doacao-300 text-2xl shadow hover:shadow-lg">
        <div className="flex justify-center">
          <div><p>Copyright © 2023 </p></div>
          <div><a href="https://www.youtube.com/watch?v=lXyMhZZy4mg" className="flex mb-4 sm:mb-0">
            <img src={Logo} className="content-center mr-3 w-28" alt="Doações Logo" />
          </a></div>
          <div><p>Todos os direitos reservados <span className='text-rocho-500'>Agradecemos</span></p></div>
        </div>
      </footer>
    </>
  )
}
