import comida from '../../assets/img/comida.jpg';
import fraldabebe from '../../assets/img/fraldabebe.jpg';
import mamadeira from '../../assets/img/mamadeira.jpg';
import higiene from '../../assets/img/higiene.jpg';
import pc from '../../assets/img/pc.jpg';
import idoso from '../../assets/img/idoso.jpg';

import { Link } from "react-router-dom";

export default function ParaDoar() {
  return (
    <>
      <br />
      <h3 className='text-center text-transparent bg-clip-text bg-gradient-to-r
           to-sky-400 from-doacao-300'>Itens Disponíveis para doação</h3>
      <br />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <Link to="/formulario">
                <img alt="Placeholder" className="block h-auto w-full" src={higiene} />
              </Link>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Kit Higiene básica
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  01/02/23
                </p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Anónimo
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Dinsponível</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>

            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">

              <Link to="/formulario">
                <img alt="Placeholder" className="block h-auto w-full" src={pc} />
              </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Notebook Usado
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  01/02/23
                </p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Anónimo
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Dinsponível</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>

            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <Link to="/formulario">
                <img alt="Placeholder" className="block h-auto w-full" src={comida} />
              </Link>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Cestas básicas
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  01/02/23
                </p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Anónimo
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Dinsponível</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>

            </article>

          </div>

          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

            <article className="overflow-hidden rounded-lg shadow-lg">

              <Link to="/formulario">
                <img alt="Placeholder" className="block h-auto w-full" src={idoso} />
              </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Fraudas Geriátricas
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  01/02/23
                </p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Anónimo
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Dinsponível</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>

            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">

              <Link to="/formulario">
                <img alt="Placeholder" className="block h-auto w-full" src={mamadeira} />
              </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Leite NAN Pro
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  01/02/23
                </p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Anónimo
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Dinsponível</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>

            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">

              <Link to="/formulario">
                <img alt="Placeholder" className="block h-auto w-full" src={fraldabebe} />
              </Link>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    Fraudas Bebês
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">
                  01/02/23
                </p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                  <p className="ml-2 text-sm">
                    Anónimo
                  </p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Dinsponível</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>

            </article>
          </div>
        </div>
      </div>
      <br />
      <p className='text-center italic hover:font-light text-slate-400'>As imagens são meramente representativas</p>
    </>
  )
}
