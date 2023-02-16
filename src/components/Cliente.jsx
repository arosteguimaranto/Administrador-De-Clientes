

export const Cliente = ({ cliente }) => {

    const {nombre, empresa, email, id} = cliente

    return (
        <tr>
            <td className='p-6'>
                {nombre}
            </td>
        </tr>
    )
}
