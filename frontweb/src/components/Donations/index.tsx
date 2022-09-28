import cesta from '../../assets/img/cestabasica.jpg';
import comida from '../../assets/img/doacao.jpg';
import pc from '../../assets/img/notebook.jpg';

import { Link } from "react-router-dom";
export default function Donations() {
  return (
    <>
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="flex flex-wrap -mx-1 lg:-mx-4">
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <Link to="/formulario">
                <img alt="Placeholder" className="block h-auto w-full" src={comida} />
              </Link>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  Auxilo básico
                </h1>
                <p className="text-grey-darker text-sm">
                  11/1/2022
                </p>
              </header>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                <p className="ml-2 text-sm">
                  3 items
                </p>
              </footer>
            </article>
          </div>
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article className="overflow-hidden rounded-lg shadow-lg">
              <Link to="/formulario">
                <img alt="Placeholder" className="block h-auto w-full" src={cesta} />
              </Link>
              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  Cesta básica
                </h1>
                <p className="text-grey-darker text-sm">
                  11/10/2022
                </p>
              </header>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                <p className="ml-2 text-sm">
                  10 items
                </p>
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
                  Notebook usado
                </h1>
                <p className="text-grey-darker text-sm">
                  03/12/2022
                </p>
              </header>
              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random" />
                <p className="ml-2 text-sm">
                  1 item
                </p>
              </footer>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
