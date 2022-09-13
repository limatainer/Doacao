import React from 'react'
import Logo from '../../assets/img/Logologo.svg'
export default function Footer() {
  return (
    <>
      <footer className="footer footer-center shadow p-4 bg-base-300">
        <div className="flex justify-center">
          <div><p>Copyright © 2022 </p></div>
          <div><a href="https://limatainer.vercel.app/#" className="flex mb-4 sm:mb-0">
            <img src={Logo} className="content-center mr-3 w-28" alt="Doações Logo" />
          </a></div>
          <div><p>Todos os direitos reservados <span className='text-rocho-500'>Lima.Codes</span></p></div>
        </div>
      </footer>
    </>
  )
}
