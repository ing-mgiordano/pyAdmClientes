import React from 'react'

const Alerta = ({children}) => {
  return (
      
    <div className='text-center my-3 bg-red-600 rounded-xl text-white font-bold p-2 uppercase text-xs '>
        {children}
    </div>
  )
}

export default Alerta
