
import {useNavigate, Form, useActionData, redirect} from 'react-router-dom'; 

import "../styles/NuevoCliente.css"; 
import Formulario from '../Components/Formulario';
import Error from "../Components/Error";
import { registrarCliente } from '../data/clientes';

export const action = async ({request}) => {
    
    const formData = await request.formData(); 
    
    const data = Object.fromEntries(formData);

    const {email} = data; 

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

    await registrarCliente(data); 
    
    // console.log(datos);
    return redirect('/'); 
}


const NuevoCliente = () => {

    const actionData = useActionData(); 
    const navigate = useNavigate(); 

    return (
        <>
            <h2 className="nuevoCliente__h2"> Nuevo cliente </h2>
            <p className="mt-20">Agregar nuevo cliente</p>
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
                    <Formulario />
                    <button type="submit" className='button-form p-10'>
                        Registrar usuario
                    </button>
                </Form>
            </section>
        </>
    ); 
}

export default NuevoCliente; 
