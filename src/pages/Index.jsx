
import { useLoaderData } from "react-router-dom";
import Cliente from "../Components/Cliente"
import { obtenerDatos } from "../data/clientes";
import "../styles/Index.css";

export const loader = async () => {
    const clientes = await obtenerDatos();
    
    if(Object.values(clientes).length === 0){
        throw new Response('',{
            status: 404,
            statusText: 'No hay clientes'
        });
    }
    return clientes; 
}

const Index = () => {

    const clientes = useLoaderData(); 

    return (
        <>
            <h2 className="clientes__h2 ">Clientes</h2>
            <p className="mt-20">Administra tus clientes</p>
            <section className="grid place-center">
                {clientes.length ? (
                    <table className="clientes__table mt-30">
                        <thead className="text-center clientes__table-thead">
                            <tr>
                                <td>Nombre</td>
                                <td>Contacto</td>
                                <td>Operación</td>
                            </tr>
                        </thead>
                        <tbody className="clientes__table-tbody ">
                            {clientes.map(cliente => (
                                <Cliente cliente={cliente} key={cliente.id}/>
                            ))}
                        </tbody>
                    </table>
                ):(
                    <p> No hay clientes </p>
                )}
            </section>
        </>
    );
}

export default Index; 
