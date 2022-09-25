export default function Formulario() {

  return (
    <>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow rounded-ls sm:px-10">
          <h1>Formulario para compartilhar uma historia de quem precisa de ajuda</h1>
          <form className="mb-0 space-y-3"
            action="https://docs.google.com/forms/d/e/1FAIpQLSfkC47Gi3kLeUoAeklz0iMXHcnapFrJPpTttT9O9Ea-GIVprQ/formResponse">
            <label for="formGoogle" className="sr-only">Formulario Doações </label>
            <input className="border border-gray-300 
              rounded-md
              px-5
              py-3
              focus:outline-none
              focus:ring-red-500
              focus:border-red-500
              w-full" type="text" placeholder="Nome" name="entry.1555852290" />
            <input className="border border-gray-300 
              rounded-md
              px-5
              py-3
              focus:outline-none
              focus:ring-red-500
              focus:border-red-500
              w-full" type="email" placeholder="Contacto" name="entry.1533199738" />
            <textarea cols="30" rows="10" className="border border-gray-300 
              rounded-md
              px-5
              py-3
              focus:outline-none
              focus:ring-red-500
              focus:border-red-500
              w-full" type="text" placeholder="Historia" name="entry.588283936" />
            <input className="border border-gray-300 
              rounded-md
              px-5
              py-3
              focus:outline-none
              focus:ring-red-500
              focus:border-red-500
              w-full" type="text" placeholder="Assinatura" name="entry.271024323" />
            <div className="mt-3
              sm:mt-0
              sm:ml-3
              sm:flex-shrink-0
              ">
              <button className="
              bg-red-500
              px-5 py-3 
              text-white 
              rounded-md 
              flex 
              items-center 
              justify-center
              
              hover:bg-red-600
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-red-500
              w-full
              ">Send</button>

            </div>
          </form>
        </div>
      </div>
    </>
  )
}
