import { useState } from "react";
import Api from '../../service/Api'
import { SidebarAdm } from "../../components/sideBarAdm";
import "./style.css";
import Navbar from "../../components/navbar";

function InicioAdm() {  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //useState(())


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
        <Navbar/>
        <div className="container-bem-vindo">
            <h1>Bem vindo</h1>
        </div>
    </div>
  );
}

export default InicioAdm;