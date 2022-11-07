import { useState } from "react";
import Api from '../../service/Api'
import "./style.css";

function InicioAdm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function Enviar(e){
    e.preventDefault()
    let usuarioLogado = {
      email: email,
      senha: password
    }
    Api.post('/Usuario', usuarioLogado)
    .then((res) => console.log(res.data[0].nome))
  }
  return (
    <div className="container">
        
    </div>
  );
}

export default InicioAdm;