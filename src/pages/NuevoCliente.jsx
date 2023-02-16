import { useNavigate } from 'react-router-dom'

export const NuevoCliente = () => {

  const navigate = useNavigate()
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900"> Nuveo Cliente</h1>
      <p className="mt-3"> Llena todos los campos para registrar un nuevo cliente</p>

      <div className=" flex justify-end">
        <button className=" bg-blue-800 text-white px-3 py-1 font-bold uppercase"
          onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    </>
  )
} 
