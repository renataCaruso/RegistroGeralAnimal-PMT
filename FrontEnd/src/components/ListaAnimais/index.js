
import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDownload } from "react-icons/ai";
import { useLottie } from "lottie-react";
import animationData from "../../lotties/18549-paws-animation.json";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NavBar from "../../components/AppBar";
import { AuthContext } from "../../context/auth";
import { getUserEmail, getPet, getUsuarioId } from "../../service/axiosClient";



const ListaAnimais = ({usuario, setUsuario, pet, setPet, petFixo, setPetFixo, editarPet, imprimirRGA}) => {
    const { user } = useContext(AuthContext);
    const [show, setShow] = useState(true)


    // useEffect(() => {
    //     const animaisFiltrados = petFixo.filter(
    //         (pet) => pet.idUsuario === usuario.idUsuario
    //         );
    //     setPet(animaisFiltrados)
    // }, [])
    
    const chamarPet = () => {
        const animaisFiltrados = petFixo.filter(
            (pet) => pet.idUsuario === usuario.idUsuario
            );
        console.log(animaisFiltrados)
        setPet(animaisFiltrados)
        setShow(false)
    }

    
    

  return (
    <>
      <NavBar />
      <div>
        {show ? (<div className="container centered">
          <div className="row justify-content-center">
            <div className="col-sm-12">
        <Button onClick={() => chamarPet()} className="buttonHome me-3">
                Clique para ver seus animais!
        </Button>
        </div>
        </div>
        </div>) : <> {pet.length > 0 ? (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-sm-10">
              <h2>Perfil do animal cadastrado:</h2>
              <table className="table table-hover">
                <thead>
                  <tr>
                    {/* <th>Foto</th> */}
                    <th>Nome</th>
                    <th>Espécie</th>
                    <th>Sexo</th>
                    <th>Raça</th>
                    <th>Nascimento</th>
                    <th>CHIP</th>
                    {/* <th>Castrado</th> */}
                    <th>Vacina anti-rábica</th>
                    <th>Vacina anti-viral</th>
                    <th>Descrição</th>
                    <th>Editar</th>
                    <th>RGA</th>
                  </tr>
                </thead>
                <tbody>
                  {pet &&
                    pet.map((pet, index) => (
                      <tr key={index}>
                        {/* <td>{pet.fotoAnimal}</td> */}
                        <td>{pet.nomeAnimal}</td>
                        <td>{pet.especie}</td>
                        <td>{pet.sexo}</td>
                        <td>{pet.raca}</td>
                        <td>{pet.dataNascAnim}</td>
                        <td>{pet.chip}</td>
                        {/* <td>{pet.castrado}</td> */}
                        <td>{pet.vacinaAntiRabica}</td>
                        <td>{pet.vacinaMultipla}</td>
                        <td>{pet.descricao}</td>
                        <td>
                          <Button
                            onClick={(pet) => editarPet(pet)}
                            style={{
                              backgroundColor: "white",
                              color: "rgb(45, 82, 153)",
                            }}
                          >
                            {/* onClick={() => editarPet(pet)} variant="text" */}
                            <AiOutlineEdit />
                          </Button>
                        </td>
                        <td>
                          <Button
                            onClick={() => imprimirRGA()}
                            style={{
                              backgroundColor: "white",
                              color: "rgb(45, 82, 153)",
                            }}
                          >
                            {/* DOWNLOAD DA CARTEIRINHA */}
                            <AiOutlineDownload />
                            {/* Download do RGA - {pet.nomePet} */}
                          </Button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <NavLink to="/cadastroAnimal">
                <Button className="buttonHome me-3">Adicionar novo animal</Button>
              </NavLink>
              <NavLink to="/menu">
              <Button className="buttonHome me-3">
                Voltar para o menu de opções
              </Button>
            </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 d-flex justify-content-center">
            <h2>
              {" "}
              Ainda não há animais cadastrados no seu perfil. Cadastre um
              animalzinho!{" "}
            </h2>
          </div>
          <div className="col-sm-12 d-flex justify-content-center">
            <NavLink to="/cadastroAnimal">
              <Button className="buttonHome me-3">Adicionar novo animal</Button>
            </NavLink>
            <NavLink to="/menu">
              <Button className="buttonHome me-3">
                Voltar para o menu de opções
              </Button>
            </NavLink>
          </div>
        </div>
      )}
        </>}
      
      </div>
      
    </>
  )
}

export default ListaAnimais