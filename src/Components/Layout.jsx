
import { Outlet, Link, useLocation} from "react-router-dom";

import "../styles/Layout.css"

const Layout = () => {
    const location = useLocation(); 
    return (
        <div className="contenedor">
            <aside className="contenedor__aside">
                <h2 className="contenedor__aside-h2"> Clientes</h2>
                <section className="contenedor__aside-Links">
                    <Link 
                        className="contenedor__aside-link" 
                        style={{color: location.pathname === "/" ? "#B61AD2":"white"}}
                        to="/">
                            Inicio
                    </Link> 
                    <Link 
                        className="contenedor__aside-link" 
                        style={{color: location.pathname === "/clientes/nuevo" ? "#B61AD2":"white"}}
                        to="/clientes/nuevo">
                            Nuevo cliente 
                    </Link>
                </section>
            </aside>
            <main className="contenedor__main">
                <Outlet />
            </main>
        </div>
    ); 
}

export default Layout; 