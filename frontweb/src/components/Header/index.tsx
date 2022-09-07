import React from 'react'
import Logo from '../../assets/img/Logologo.svg';
export default function Header() {
  return (
    <>
      <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="https://flowbite.com" className="flex items-center">
            <img src={Logo} className="mr-3 h-6 sm:h-16" alt="Logo" />
          </a>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Abrir menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="mobile-menu-2">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-doacao-300 rounded hover:text-doacao-300 lg:border-0 lg:p-0" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-neutral-900 border-b border-gray-100 hover:text-doacao-300 lg:border-0 lg:p-0">Quem Somos?</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-neutral-900 border-b border-gray-100 hover:text-doacao-300 lg:border-0 lg:p-0">Formulários</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-neutral-900 border-b border-gray-100 hover:text-doacao-300 lg:border-0 lg:p-0">Para Doar</a>
              </li>
              <li>
                <a href="#" className="block py-2 pr-4 pl-3 text-neutral-900 border-b border-gray-100 hover:text-doacao-300 lg:border-0 lg:p-0">Indicações</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
