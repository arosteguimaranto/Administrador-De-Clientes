import {obtenerCliente} from '../data/clientes'

export async function loader({params}){
  const cliente = await obtenerCliente(params.clienteId)
  if(Object.values(cliente).length === 0){
    throw new Response('', {
      status: 404,
      statusText:'El Cliente no fue encontrado'
    })
  }
  return cliente

}


export const EditarCliente = () => {
  return (
    <div>EditarCliente</div>
  )
}
