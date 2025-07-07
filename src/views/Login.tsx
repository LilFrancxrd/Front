import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email,setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = async()=>{
    if(!email.trim() || !password.trim()){
      setError("Por favor, ingresa tu correo electronico y tu contraseña")
      return
    }

    try {
      const response = await axios.post("http://localhost:3000/api/login",{
        email,
        password
      })

      const token = response.data.token;

      localStorage.setItem("token",token)

      navigate("/Home")
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      setError("Credenciales incorrectas o error de conexión.");
      
    }
  }


  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card p-4  shadow ">

        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        {error &&(
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}



        <div className="mb-3">
            <label htmlFor="email" className="form-label">
            Correo Electrónico
            </label>
            <input type="email" className="form-control" id="email" placeholder="Ingresa tu correo" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>

        <div className="mb-3">
            <label htmlFor="password" className="form-label">
            Contraseña
            </label>
            <input type="password" className="form-control" id="password" placeholder="Ingresa tu contraseña" value={password} onChange={(e)=> setPassword(e.target.value)}/>
        </div>
            <button className="btn btn-primary" onClick={handleLogin}>
                Ingresar
            </button>
      </div>
    </div>
  );
}
