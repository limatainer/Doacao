import React from 'react'
import bonecoLegal from '/assets/img/ajudar.png'
export default function QuemSomos() {
  return (
    <div className='flex flex-col md:flex-row'>
      <div className='w-full md:w-1/2'>
        <div className='aspect-square'>
          <img src={bonecoLegal} alt="boneco legal" className='p-4' />
        </div>
      </div>
      <div className='w-full md:w-1/2 pl-4 md:pl-0'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-5xl
         lg:text-6xl text-left">
          <span className="text-transparent bg-clip-text bg-gradient-to-r
           to-doacao-300 from-sky-400">Nós somos doadores anónimos</span>
        </h1>
        <br />
        <p className="text-lg font-normal text-gray-500 lg:text-xl text-left">
          Nosso propósito é realizar doações sem vínculo a nenhum orgão,
          comunidade ou indivíduos e principalmente sem obrigatoriedade em realizar
          todas as doações para as pessoas indicadas por vocês.
        </p>
        <br />
        <p className="mb-3 text-lg font-light text-gray-500 md:text-xl text-left">
          Não queremos rosto nem nomes,
          queremos apenas ajudar, parece estranho?
        </p>
        <p className=" text-rocho-500 m-4 p-2 shadow-md rounded-md bg-white">
          Acreditamos que dessa maneira podemos focar no mais importante
          que é, ajudar sem olhar a quem.
          <br />
          <span className='text-sky-400 font-semibold '>Nem a quem doou, nem a quem recebeu.</span>
          <br />

        </p>
        <p className="text-lg font-light text-gray-500 lg:text-xl text-left">
          Por isso, não divulgaremos nossos doadores e nem a quem doaremos.<br />
          Pedimos apenas que nos envie histórias reais de pessoas que precisam da ajuda de algo que
          temos à disposição e se acreditarmos que é válido, essa pessoa poderá ser
          contatada para receber nossa doação.
          <br />
          Não buscamos mídia nem nada disso, somos jovens e queremos ajudar.
        </p>
      </div>
    </div>


  )
}
