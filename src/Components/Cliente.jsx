
import { Form, useNavigate, redirect } from "react-router-dom";
import {eliminarCliente} from "../data/clientes"

export const action = async ({params}) => {
    await eliminarCliente(params.id);
    return redirect("/"); 
}

const Cliente = ({cliente}) => {
    const { nombre, email, telefono, id, empresa} = cliente; 
    const navigate = useNavigate(); 
    return (   
        <tr>
            <td>
                <h3>{nombre}</h3>
                <p>{empresa}</p>
            </td>
            <td>
                <p><span className="text-bold">Email: </span>{email}</p>
                <p><span className="text-bold">Telefono: </span>{telefono}</p>
            </td>
            <td className="flex gap-20 justify-center">
                <button 
                    className="blue-color text-bold bg-transparent b-none p-15 white-color br-8"
                    onClick={() => navigate(`/clientes/${id}/editar`)}
                >Editar</button>
                <Form
                    method="post"
                    action={`/clientes/${id}/eliminar`}
                    onSubmit={(e) => {
                        if(!confirm("¿Desea eliminar el usuario?")){
                            e.preventDefault();
                        }
                    }}
                >
                    <button 
                        className="red-color text-bold bg-transparent b-none p-15 white-color br-8"
                        type="submit"
                    >
                        Eliminar
                    </button>
                </Form>
            </td>
        </tr>
    );
}

export default Cliente; 