import React from 'react'
import bonecoLegal from '../../assets/img/boneco2.png'
export default function QuemSomos() {
  return (
    <div className='flex'>
      <div className='w-full aspect-square'>
        <img src={bonecoLegal} alt="boneco legal" />
      </div>
      <div className='w-full  pr-28'>
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900  md:text-5xl lg:text-6xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r
           to-doacao-300 from-sky-400">Somo doadores anónimos</span></h1>
        <br />
        <p className="text-lg font-normal text-gray-500 lg:text-xl ">
          Nosso propósito é realizar doações sem vinculos com nenhum orgão,
          comunidade ou individuas e principalmente não prometemos poder realizar
          todas as doações as pessoas indicadas por vocês.</p>
        <br />
        <p className="mb-3 text-lg font-light text-gray-500 
        md:text-xl">Não queremos rosto nem nomes,
          quemos apenas ajudar, te parece estranho?
        </p>
        <p className="font-light text-rocho-500">
          Acreditamos que dessa maneira focamos no mais importante,
          que é ajudar sem olhar a quem. <br /> Nem a quem doou, nem a quem recebeu.
          <br /> Por isso, não divulgaremos nossos doadores e nem a quem doaremos.
          <br /> Precisamos de historias reais de pessoas que precisam da ajuda de algo que
          temos a disposição e se acreditarmos que é válido, esta pessoa será
          contactada e receberá a doação.
          <br /> Não buscamos mídia nem nada disso, somos jovens e queremos ajudar.</p>
      </div>
    </div>

  )
}
