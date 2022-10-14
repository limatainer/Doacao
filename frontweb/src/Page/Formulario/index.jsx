import boneco from '../../assets/img/boneco.png';
import mao from '../../assets/img/mao.png';
export default function Formulario() {

  return (
    <div div className='grid place-items-center'>
      <div class="flex flex-wrap items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
        <img class="object-cover pl-10 w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={mao} alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-doacao-300 ">Formulário</h5>
          <p class="mb-3 font-light text-gray-700">Não precisamos de seu contato pessoal nem dados,
            nós nunca iremos pedir isto. Neste formulario compartilhe a história de alguém que precisa
            de uma dessas doações. Precisaremos apenas do
            contacto da pessoa indicada e se der tudo certo avançaremos ou não com a doação.</p>
        </div>
      </div>
      <br />
      <div className="flex flex-wrap items-center bg-white rounded-lg border shadow-md md:flex-col md:max-w-xl hover:bg-gray-100">
        <div className="bg-white py-8 px-6 shadow rounded-ls sm:px-10">
          <p className='mb-3 font-light text-gray-700'>Preencha caso concorde em partilhar a história de alguém. <br />
            Caso a pessoa indicada não tenha email, pode escrever na história outro contato. <br />
            Ao partilhar, não significa que iremos automáticamente fazer a doação para a pessoa que indicou,
            mas que iremos avaliar. <br />
            As doações são anônimas e sem divulgações, nem em mídia e nem postagens em lado algum.</p>
          <br />
          <form className="mb-0 space-y-3"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfkC47Gi3kLeUoAeklz0iMXHcnapFrJPpTttT9O9Ea-GIVprQ/formResponse">
            <label for="formGoogle" className="sr-only">Formuário Doações </label>
            <input className="border border-doacao-300 
              rounded-md
              px-5
              py-3
              focus:outline-none
              focus:ring-rocho-500
              focus:border-rocho-500
              w-full" type="text" placeholder="Nome(da pessoa indicada)" name="entry.1555852290" />
            <input className="border border-doacao-300 
              rounded-md
              px-5
              py-3
              focus:outline-none
              focus:ring-rocho-500
              focus:border-rocho-500
              w-full" type="email" placeholder="Email(da pessoa indicada)" name="entry.1533199738" />
            <textarea cols="30" rows="10" className="border border-doacao-300 
              rounded-md
              px-5
              py-3
              focus:outline-none
              focus:ring-rocho-500
              focus:border-rocho-500
              w-full" type="text" placeholder="Historia" name="entry.588283936" />
            <span className='text-sm'>Autorizo compartilha esta história e contacto com Doações:</span>
            <input className="border border-doacao-300 
              rounded-md
              px-5
              py-3
              focus:outline-none
              focus:ring-rocho-500
              focus:border-rocho-500
              w-full" type="text" placeholder="Sua assinatura" name="entry.271024323" />

            <div className="mt-3
              sm:mt-0
              sm:ml-3
              sm:flex-shrink-0
              ">
              <button className="
              bg-rocho-500
              px-5 py-3 
              text-white 
              rounded-md 
              flex 
              items-center 
              justify-center
              
              hover:bg-rocho-600
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-rocho-500
              w-full
              ">Enviar</button>
            </div>
          </form>
        </div>
        <img src={boneco} alt="boneco" className='text-center' />
      </div>
    </div>
  )
}
