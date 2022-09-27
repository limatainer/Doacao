import React from 'react'
import bonecoLegal from '../../assets/img/boneco2.png'
export default function QuemSomos() {
  return (
    <div className='flex'>
      <div className='w-full aspect-square'>
        <img src={bonecoLegal} alt="boneco legal" />
      </div>
      <div className='w-full text-center pr-28'>
        <h1 >Somos doadores anónimos</h1>
        <br />
        <span>
          Nosso propósito é doar sem compromisso com nenhum orgão,
          comunidade ou individuas e principalmente com as pessoas indicadas
          por vocês não queremos rosto nem nomes apenas ajudar estranho? talvez,
          porém acreditamos que dessa maneira o foco estará no que importa
          que é a ajuda sem olhar a quem, nem a quem doou nem a quem recebeu
          por isso não divulgaremos nossos doadores e nem a quem doamos apenas
          pedimos historias reais de pessoas que precisam de ajuda com algo que
          temos a disposição e se acreditarmos que é valido, esta pessoa será
          contactada e receberá a doação. Não buscamos mídia nem nada disso,
          somos jovens e queremos ajudar
        </span>

      </div>
    </div>
  )
}
