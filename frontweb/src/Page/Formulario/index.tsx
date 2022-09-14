import React from 'react'
import { useState } from 'react'

type Values = {
  name: string,
  email: string,
  telefone: string,
  depoimento: string,
}

export default function Formulario() {
  const [data, setData] = useState<Values>({
    name: '',
    email: '',
    telefone: '',
    depoimento: ''
  })
  const { name, email, telefone, depoimento } = data;

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setData({ ...data, [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value })
  }
  return (
    <>
      <form autoComplete='off' className='form-group'>
        {/* Name */}
        <input type="text" value={name}
          className="form-control block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              m-0
              focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput7"
          placeholder="Name" />
        {/* Email */}
        <input type="email" value={email}
          className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
          placeholder="Email address" />
        {/* Telefone */}
        <input type="number" value={telefone}
          className="form-control block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" id="exampleInput8"
          placeholder="Telefone" />
        {/* Message */}
        <textarea value={depoimento} className="form-control block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlTextarea13"
          rows={3}
          placeholder="Message"
        ></textarea>
        {/* Submit */}
        <button type="submit" className="
      w-full
      px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      hover:bg-blue-700 hover:shadow-lg
      focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
      active:bg-blue-800 active:shadow-lg
      transition
      duration-150
      ease-in-out">Pedir</button>
      </form>
    </>
  )
}
