import '../assets/css/listagem.css'

const Listagem = props => {
    const { lista, excluir, editar } = props;

    return (
        <div className='listagem'>
            {lista && lista.length > 0 &&
                <table className='tabela-moradores'>
                    <thead>
                        <th>Nome</th>
                        <th>Data Nascimento</th>
                        <th>Celular</th>
                        <th>Email</th>
                        <th>Observações</th>
                        <th className='acoes' colSpan='2'>Ações</th>
                    </thead>
                    <tbody>
                        {lista.map(morador => (
                            <tr key={morador.id}>
                                <td>{morador.name}</td>
                                <td>{morador.birthday}</td>
                                <td>{morador.cellphone}</td>
                                <td>{morador.email}</td>
                                <td>{morador.observations}</td>
                                <td className='acoes'>
                                    <button onClick={() => editar(morador)}>Editar</button>
                                </td>
                                <td className='acoes'>
                                    <button onClick={() => excluir(morador.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Listagem