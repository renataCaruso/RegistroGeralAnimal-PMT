import { useEffect, useState } from "react"
import { postUsuario } from "../../service/axiosClient"



const Teste = () => {
    const [nome, setNome] = useState("")
    const [dataNascimento, setDataNascimento] = useState("")
    const [cpf, setCpf] = useState("")
    const [usuarios, setUsuarios] = useState([])
    const [senha, setSenha] = useState("")
    const [confirmarSenha, setConfirmarSenha] = useState("")
    const [tipo, setTipo] = useState("")
    const [castrado, setCastrado] = useState(null)

    const adicionarUsuario = async () => {
                if (nome === "" || dataNascimento === "" || cpf === "" || senha === "") {
                    return alert("PREENCHA TODOS OS CAMPOS")
                }
        
                const novoUsuario = {
        
                    nome: nome,
                    dataNascimento: dataNascimento,
                    cpf: cpf,
                    senha: senha

                }
                alert("USUARIOCADASTRADO COM SUCESSO!")
                postUsuario(novoUsuario)
        
                // setUsuarios([
                //     ...usuarios,
                //     data
                // ])
        
                
                setNome("")
                setDataNascimento("")
                setCpf("")
                setSenha("")
                
            }
    


    const verificarSenha = () => {
        if ( senha && confirmarSenha  ) {
            console.log(senha)
            console.log(confirmarSenha)
            return senha === confirmarSenha;

        }
    }

    const cadastrar = () => {
        
        if (verificarSenha()) {
            adicionarUsuario()
            return
        }
        alert("Senhas não conferem")
        
    }

    useEffect(() => {
        console.log(castrado)
    },[castrado])

    const formSubmit = () => {
        console.log(castrado)
        console.log(typeof castrado)
        console.log(tipo)
    }

    const handleChange = (event) => {
        setTipo(event.target.value)
        
      }

    const handleChange2 = (event) => {
        setCastrado(event.target.value)
        
      }

    //onSubmit={formSubmit()}

    return(
        <form >
        <label className="line col-sm-6">
        {" "}
        Animal é: 
        <div className="form-check">
            <input value="Canino" checked={tipo === "Canino"} onChange={e => setTipo(e.target.value)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
            <label className="form-check-label">
                Canino
            </label>
            </div>
            <div className="form-check">
            <input value="Felino" checked={tipo === "Felino"} onChange={e => setTipo(e.target.value)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
            <label className="form-check-label">
                Felino
            </label>
            </div>
        </label>

        
            <label className="line col-sm-6">
            {" "}
            Castrado?
           
            <div className="form-check">
                <input value="true" checked={castrado == "true"} onChange={e => setCastrado(e.target.value)} className="form-check-input" type="radio" name="castradoRadial"/>
                <label className="form-check-label">
                    Sim
                </label>
                </div>
                <div className="form-check">
                <input value="false" checked={castrado == "false"} onChange={e => setCastrado(e.target.value)} className="form-check-input" type="radio" name="castradoRadial"/>
                <label className="form-check-label">
                    Não
                </label>
                </div>
            
            </label>
        


        <button className="btn btn-default" type="button" onClick={() =>formSubmit()}>
          Submit
        </button>

        </form>
            
    )
}

export default Teste