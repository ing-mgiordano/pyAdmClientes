import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../componentes/Formulario'

const EditarCliente = () => {

  const [cliente, setCliente] = useState({})
  const [cargando, setCargando] = useState(true)

  const {id} = useParams()
  //console.log(params)

  useEffect(() => {
      
      const obtenerClienteAPI = async () => {
          try {
              const url = `${import.meta.env.VITE_API_URL}/${id}`
              const respuesta = await fetch(url)
              const resultado = await respuesta.json()
              setCliente(resultado)
          } catch (error) {
              console.log(error)
          }
          setTimeout(() => {
              setCargando(!cargando) 
          }, 3000);
      }
      obtenerClienteAPI()
  }, [])

  return (
    <>
      <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
      <p className='mt-3 opacity-50'>Edita los datos del cliente</p>

      {cliente?.nombre ? (
        <Formulario 
          cliente={cliente}
          cargando={cargando}
        />
      ) : <p className='mt-3 opacity-80 text-red-700'>Cliente ID no válido</p> }

    </>
  )
}

export default EditarCliente
