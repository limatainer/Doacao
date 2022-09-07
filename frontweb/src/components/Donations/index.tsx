import React from 'react'

export default function Donations() {
  return (
    <>
      <div className="flex justify-center">
        <div className="bg-white rounded-lg shadow-lg max-w-sm px-5">
          <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" className="rounded-t-lg" />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-purple-800">Card with an image
            </h2>
            <p className="text-purple-700 mb-2">This is a little bit better of a card!</p>
            <a href="#" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
          </div>

        </div>
        <div className="bg-white rounded-lg shadow-lg max-w-sm px-5">
          <img src="https://images.unsplash.com/photo-1600054800747-be294a6a0d26?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80" alt="" className="rounded-t-lg" />
          <div className="p-6">
            <h2 className="font-bold mb-2 text-2xl text-purple-800">Card with an image
            </h2>
            <p className="text-purple-700 mb-2">This is a little bit better of a card!</p>
            <a href="#" className="text-purple-600 hover:text-purple-500 underline text-sm">Read More 👉</a>
          </div>
        </div>
      </div>
      <br />
    </>
  )
}
