
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError(); 
    return (
        <div className="grid place-center mt-40">
            <h1> CRM - Clientes </h1>
            <p className="mt-40">{error.statusText || error.message}</p>
        </div>
    ); 
}

export default ErrorPage; 
