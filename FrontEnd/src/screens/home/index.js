import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { Button } from "react-bootstrap";
import { AiOutlineEdit, AiOutlineDownload } from "react-icons/ai";
import { useLottie } from "lottie-react";
import animationData from "../../lotties/18549-paws-animation.json";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "./styles.css";
import NavBar from "../../components/AppBar";
import { AuthContext } from "../../context/auth";
import { getUserEmail, getPet, getUsuarioId, getPetIdUsuario } from "../../service/axiosClient";
import ListaAnimais from "../../components/ListaAnimais"
import { get } from "react-hook-form";

const Home = ({navigation}) => {
  const [usuario, setUsuario] = useState({});
  const [pet, setPet] = useState([]);
  const [petFixo, setPetFixo] = useState([]);
  const [idUser, setIdUser] = useState(null);
  const [toggle, setToggle] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { user, setPetId } = useContext(AuthContext);

  //   useEffect(() => {
//     const get = async () => {
//       setLoading(true);
//       const data = await getUsuarioId(user.id);
//       setUsuario(data);
//       setLoading(false);
//     };
//     get();
  
// },[])

  //CODIGO QUE VAI ENTRAR PRA FILTRAR PELO ID DO USUARIO
  // const filtrar = () => {
  //   console.log(petFixo);
  //   const animaisFiltrados = petFixo.filter(
  //     (pet) => pet.idUsuario === usuario.idUsuario
  //   );
  //   //console.log(petFixo)

  //   setPet(animaisFiltrados);
  //   console.log(animaisFiltrados);
  // };

  // CODIGO QUE VAI ENTRAR PRA PEGAR AS INFORMAÇÕES DO USUARIO POR EMAIL
  
  // const filtrar = () => {
  //   const getLista = async () => {
  //     console.log(idUser)
  //     const lista = await getPetIdUsuario(idUser);
  //     setPet(lista);
  //   }
  //   getLista()
  // }

  useEffect(() => {
    const get = async () => {
      //setLoading(true);
      console.log(user.email)
      //const data = await getUserEmail(user.email);
      const data = await getUserEmail(user.email);
      console.log(data)
      setUsuario(data);
      //setLoading(false);
    };
    get();
  }, []);

  useEffect(() => {
    const get = async () => {
      //setLoading(true);
      console.log(user.email)
      //const data = await getUserEmail(user.email);
      const data = await getPet();
      console.log(data)
      setPetFixo(data);
      //setLoading(false);
    };
    get();
  }, []);

  // useEffect(() => {
  //   if(usuario) {
  //     const get2 = async () => {
  //         setLoading(true);
  //         console.log(usuario.id)
  //         const data2 = await getPetIdUsuario(idUser);
  //         console.log(data2)
  //         setPet(data2);
  //     }
  //     get2()
  //   }
  // }, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);

  // useEffect(() => {
  //   getPets();
  //   //filtrar()
  //   console.log(user.email);
  //   console.log("Email acima");
  // }, []);

  // const getPets = () => {
  //   axios.get("http://169.57.150.59:8012/animal/lista").then((response) => {
  //     setPet(response.data);
  //     setPetFixo(response.data);
  //   });
  // };

  // const editarPet = () => {
  //   navigate("/editarPet");
  // };

  const imprimirRGA = () => {
    navigate("/abrir-rga");
  };

  const editarPet = (pet) => {
    setPetId(pet.id);
    navigate("/editarPet");
  }

  console.log(pet)

  return (
      <ListaAnimais usuario={usuario} setUsuario={setUsuario} pet={pet} setPet={setPet} petFixo={petFixo} setPetFixo={setPetFixo} editarPet={editarPet} imprimirRGA={imprimirRGA}/>
    // <>
    //   <NavBar />
    //   {pet.length > 0 ? (
    //     <div className="container">
    //       <div className="row justify-content-center">
    //         <div className="col-sm-8">
    //           <h2>Perfil do animal cadastrado:</h2>
    //           <table className="table table-hover">
    //             <thead>
    //               <tr>
    //                 {/* <th>Foto</th> */}
    //                 <th>Nome</th>
    //                 <th>Espécie</th>
    //                 <th>Sexo</th>
    //                 <th>Raça</th>
    //                 <th></th>
    //                 {/* <th>Nascimento</th>
    //                 <th>CHIP</th> */}
    //                 {/* <th>Castrado</th> */}
    //                 {/* <th>Vacina anti-rábica</th>
    //                 <th>Vacina anti-viral</th>
    //                 <th>Descrição</th> */}
    //                 <th>Editar</th>
    //                 <th>RGA</th>
    //               </tr>
    //             </thead>
    //             <tbody>
    //               {pet &&
    //                 pet.map((pet, index) => (
    //                   <tr key={index}>
    //                     {/* <td>{pet.fotoAnimal}</td> */}
    //                     <td>{pet?.nomeAnimal}</td>
    //                     <td>{pet?.especie}</td>
    //                     <td>{pet?.sexo}</td>
    //                     <td>{pet?.raca}</td>
    //                     {/* <td>{pet.dataNascAnim}</td>
    //                     <td>{pet.chip}</td>
    //                     {/* <td>{pet.castrado}</td> */}
    //                     {/* <td>{pet.vacinaAntiRabica}</td>
    //                     <td>{pet.vacinaMultipla}</td>
    //                     <td>{pet.descricao}</td> */}
    //                     <td>
    //                       <Button
    //                         onClick={() => editarPet()}
    //                         style={{
    //                           backgroundColor: "white",
    //                           color: "rgb(45, 82, 153)",
    //                         }}
    //                       >
    //                         {/* onClick={() => editarPet(pet)} variant="text" */}
    //                         <AiOutlineEdit />
    //                       </Button>
    //                     </td>
    //                     <td>
    //                       <Button
    //                         onClick={() => imprimirRGA()}
    //                         style={{
    //                           backgroundColor: "white",
    //                           color: "rgb(45, 82, 153)",
    //                         }}
    //                       >
    //                         {/* DOWNLOAD DA CARTEIRINHA */}
    //                         <AiOutlineDownload />
    //                         {/* Download do RGA - {pet.nomePet} */}
    //                       </Button>
    //                     </td>
    //                   </tr>
    //                 ))}
    //             </tbody>
    //           </table>
    //           <NavLink to="/cadastroAnimal">
    //             <Button className="buttonHome">Adicionar novo animal</Button>
    //           </NavLink>
    //           <NavLink to="/menu">
    //           <Button className="buttonHome me-3">
    //             Voltar para o menu de opções
    //           </Button>
    //         </NavLink>
    //         </div>
    //       </div>
    //     </div>
    //   ) : (
    //     <div className="row d-flex justify-content-center">
    //       <div className="col-sm-12 d-flex justify-content-center">
    //         <h2>
    //           {" "}
    //           Ainda não há animais cadastrados no seu perfil. Cadastre um
    //           animalzinho!{" "}
    //         </h2>
    //       </div>
    //       <div className="col-sm-12 d-flex justify-content-center">
    //         <NavLink to="/cadastroAnimal">
    //           <Button className="buttonHome me-3">Adicionar novo animal</Button>
    //         </NavLink>
    //         <NavLink to="/menu">
    //           <Button className="buttonHome me-3">
    //             Voltar para o menu de opções
    //           </Button>
    //         </NavLink>
    //       </div>
    //     </div>
    //   )}
    // </>
  );
};

export default Home;
