
import "../styles/Formulario.css";

const Formulario = ({cliente}) => {
    return (
        <>
            <div className="mb-20">
                <label
                    className="text-gray-800"
                    htmlFor="nombre"
                >Nombre:</label>
                <input 
                    id="nombre"
                    type="text"
                    className="b-none p-10 mt-5"
                    placeholder="Nombre del Cliente"
                    name="nombre"
                    defaultValue={cliente?.nombre}
                />
            </div>
            <div className="mb-20">
                <label
                    className="text-gray-800"
                    htmlFor="empresa"
                >Empresa:</label>
                <input 
                    id="empresa"
                    type="text"
                    className="b-none p-10 mt-5"
                    placeholder="Empresa del Cliente"
                    name="empresa"
                    defaultValue={cliente?.empresa}

                />
            </div>

            <div className="mb-20">
                <label
                    className="text-gray-800"
                    htmlFor="email"
                >E-mail:</label>
                <input 
                    id="email"
                    type="email"
                    className="b-none p-10 mt-5"
                    placeholder="Email del Cliente"
                    name="email"
                    defaultValue={cliente?.email}

                />
            </div>

            <div className="mb-20">
                <label
                    className="text-gray-800"
                    htmlFor="telefono"
                >Teléfono:</label>
                <input 
                    id="telefono"
                    type="tel"
                    className="b-none p-10 mt-5"
                    placeholder="Teléfono del Cliente"
                    name="telefono"
                    defaultValue={cliente?.telefono}

                />
            </div>

            <div className="mb-20">
                <label
                    className="text-gray-800"
                    htmlFor="notas"
                >Notas:</label>
                <textarea
                    id="notas"
                    type="text"
                    className="b-none p-10 mt-5f"
                    placeholder="Notas del Cliente"
                    name="notas"
                    defaultValue={cliente?.notas}

                />
            </div>
        </>
    )
}

export default Formulario; 
