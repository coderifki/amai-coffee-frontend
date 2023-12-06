import React from 'react'

interface Props {
  title: string
  keyword: string
  description: string
}
export default function FaqCardComponent(props: Props) {
  return (
    <>
      <div className="flex justify-center items-start">
        <div className="w-full sm:w-10/12 md:w-1/2 my-1">
          <h2 className="text-4xl text-center font-medium text-vnet-blue">
            FAQ
          </h2>

          <ul className="flex flex-col pb-48">
            <li className="bg-white my-2 shadow-lg" /*...*/>
              {/* ... Your first accordion item */}
            </li>
            <li className="bg-white my-2 shadow-lg" /*...*/>
              {/* ... Your second accordion item */}
            </li>
            <li className="bg-white my-2 shadow-lg" /*...*/>
              {/* ... Your third accordion item */}
            </li>
            {/* You can add more accordion items as needed */}
          </ul>
        </div>
      </div>
    </>
  )
}
