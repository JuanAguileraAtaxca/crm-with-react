
import "../styles/Error.css"; 

const Error = ({children}) =>{
    return (
        <div className="error p-10 text-center text-bold mb-10">
            {children}
        </div>
    );
}

export default Error; 