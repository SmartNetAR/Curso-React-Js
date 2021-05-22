
const List = (props) =>
{
    return (
        <>
           <h1>Lista</h1> 

           <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Fecha</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {props.envios.map( (envio) => 
                        <tr>
                            <td>{envio.fecha}</td>
                            <td>{envio.descripcion}</td>
                            <td>{envio.estado}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default List;