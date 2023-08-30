
export const obtenerDatos = async () => {
    const data = await fetch(import.meta.env.VITE_URL);
    const clientes = await data.json(); 
    
    return clientes; 
}

export const obtenerCliente = async (id) => {

    const data = await fetch (`${import.meta.env.VITE_URL}/${id}`);
    const cliente = await data.json(); 

    return cliente; 
}

export const registrarCliente = async (datos) => {
    try {
        const res = await fetch(import.meta.env.VITE_URL, {
            method: 'POST',
            body: JSON.stringify(datos), 
            headers: {
                'Content-Type': 'application/json'
            }
        }); 
        await res.json(); 

    } catch (error) {
        console.log(error); 
    }
}

export const editarCliente = async (id, datos)=>{
    console.log(datos);
    try {
        const res = await fetch(`${import.meta.env.VITE_URL}/${id}`,{
            method: 'PUT',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        await res.json(); 
    } catch (error) {
        console.log(error);
    }
}

export const eliminarCliente = async (id) => {
    try {
        const res = await fetch(`${import.meta.env.VITE_URL}/${id}`,{
            method: 'DELETE'
        });

        await res.json(); 
    } catch (error) {
        console.log(error);
    }
}
