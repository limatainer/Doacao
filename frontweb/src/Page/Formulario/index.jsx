import boneco from '/assets/img/boneco.png';
import mao from '/assets/img/mao.png';
export default function Formulario() {
  return (
    <div className="grid place-items-center">
      <div className="flex flex-col sm:flex-row items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100">
        <img
          className="object-cover w-full h-full rounded-t-lg
           md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={mao}
          alt=""
        />
        <div className="text-center  p-4 leading-normal">
          <h5
            className="mb-2 text-2xl font-bold tracking-tight
           text-doacao-300"
          >
            Formulário
          </h5>
          <p className="m-3 text-left font-light text-gray-700">
            Não precisamos de seu contato pessoal nem dados, nós nunca iremos
            pedir isto.
            <br />
            Neste formulário, compartilhe a história de alguém que precisa de
            uma dessas doações.
            <br />
            Precisaremos apenas do contato da pessoa indicada e se der tudo
            certo, avançaremos ou não com a doação.
          </p>
        </div>
      </div>
      <br />
      <div className="flex flex-wrap items-center bg-white rounded-lg border shadow-md md:flex-col md:max-w-xl hover:bg-gray-100">
        <div className="bg-white py-8 px-6 shadow rounded-ls sm:px-10">
          <p className="m-3  text-gray-700">
            <span className=" bg-emerald-200 m-2">
              Preencha este formulário apenas se concordar em compartilhar a
              história de alguém para nossa equipe de voluntarios avaliarem.
            </span>
            <br />
            Caso a pessoa indicada não tenha e-mail, poderá escrever outro
            contato na história.
            <br />
            <span className=" bg-emerald-200 m-4">
              Ao compartilhar, não significa que iremos automaticamente fazer a
              doação para a pessoa que indicou, mas que iremos avaliar.
            </span>
            <br />
            As doações são anônimas e sem divulgações, nem em mídia e nem
            postagens em lugar algum.
            <br />
            <span className=" bg-red-200 m-2">Não queremos o seu contato</span>
          </p>
          <br />
          <form
            className="mb-0 space-y-3"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfkC47Gi3kLeUoAeklz0iMXHcnapFrJPpTttT9O9Ea-GIVprQ/formResponse"
          >
            <label htmlFor="formGoogle" className="sr-only">
              Formulário Doações
            </label>
            <input
              className="border border-doacao-300 rounded-md px-5 py-3 focus:outline-none focus:ring-rocho-500 focus:border-rocho-500 w-full"
              type="text"
              placeholder="Nome (da pessoa indicada)"
              name="entry.1555852290"
            />
            <input
              className="border border-doacao-300 rounded-md px-5 py-3 focus:outline-none focus:ring-rocho-500 focus:border-rocho-500 w-full"
              type="email"
              placeholder="Email (da pessoa indicada)"
              name="entry.1533199738"
            />
            <textarea
              className="border border-doacao-300 rounded-md px-5 py-3 focus:outline-none focus:ring-rocho-500 focus:border-rocho-500 w-full"
              rows="10"
              placeholder="História"
              name="entry.588283936"
            ></textarea>
            <span className="text-lg">
              Autorizo compartilhar esta história e contato com Doações:
            </span>
            <input
              className="border border-doacao-300 rounded-md px-5 py-3 focus:outline-none focus:ring-rocho-500 focus:border-rocho-500 w-full"
              type="text"
              placeholder="Sua assinatura"
              name="entry.271024323"
            />

            <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="bg-rocho-500 px-5 py-3 text-white rounded-md flex items-center justify-center hover:bg-rocho-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rocho-500 w-full">
                Enviar
              </button>
            </div>
          </form>
        </div>
        <img src={boneco} alt="boneco" className="text-center" />
      </div>
    </div>
  );
}
