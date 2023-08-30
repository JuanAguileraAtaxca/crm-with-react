
import { useLoaderData, Form, useNavigate, redirect, useActionData } from "react-router-dom";
import Formulario from '../Components/Formulario'; 
import Error from "../Components/Error";
import { obtenerCliente, editarCliente } from "../data/clientes";

export const action = async  ({request, params}) =>{
    const formData = await request.formData(); 
    
    const data = Object.fromEntries(formData);

    const {email, id} = data; 

    const errores = []; 
    if(Object.values(data).includes('')){
        errores.push("Todos los campos son obligatorios"); 
    }

    let regex = new RegExp("([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\"\(\[\]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(\.[!#-'*+/-9=?A-Z^-~-]+)*|\[[\t -Z^-~]*])");

    if(!regex.test(email)){
        errores.push("Email no válido!"); 
    }

    if(Object.keys(errores).length){
        return errores; 
    }

    await editarCliente(params.id, data); 

    return redirect('/');

}

export const loader = async ({params}) =>{
    const cliente = await obtenerCliente(params.id); 

    if(Object.values(cliente).length === 0){
        throw new Response('', {
            status: 404,
            statusText: 'No se encontró el resultado'
        }); 
    }

    return cliente; 
}

const EditarCliente = ()=>{
    const actionData = useActionData(); 
    const data = useLoaderData(); 
    const navigate = useNavigate(); 

    console.log(data); 
    return (
        <>
            <h2 className="nuevoCliente__h2"> Editar cliente </h2>
            <p className="mt-20">Edita un cliente existente </p>
            <section className="mt-15 flex justify-end">
                <button
                    className="blue-color text-bold bg-transparent b-none p-15 white-color br-8"
                    onClick={()=>navigate(-1)}
                >
                    Volver
                </button>
            </section>
            <section className="bg-white w-70 m-auto br-8 p-10">
                {actionData?.length && actionData.map((e, i) =><Error key={i}>{e}</Error>)}
                <Form 
                    method='post'
                    className="p-30"
                    noValidate
                >
                    <Formulario cliente={data}/>
                    <button type="submit" className='button-form p-10'>
                        Editar usuario
                    </button>
                </Form>
            </section>
        </>
    ); 
}

export default EditarCliente; 