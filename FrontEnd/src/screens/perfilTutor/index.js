import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { useLottie } from "lottie-react";
import animationData from "../../lotties/18549-paws-animation.json";
import NavBar from "../../components/AppBar";
import styles from "./styles.css";
import { getUserEmail, getUsuarioId } from "../../service/axiosClient";
import { AuthContext } from "../../context/auth";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";

const PerfilTutor = () => {
  const { user } = useContext(AuthContext);
  const [usuario, setUsuario] = useState({});
  const [Loading, setLoading] = useState(false);
  // const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { View } = useLottie(defaultOptions);

  useEffect(() => {
    const get = async () => {
      setLoading(true);
      console.log(user.email);
      const data = await getUserEmail(user.email);
      setUsuario(data);
      setLoading(false);
    };
    get();
  }, []);

  //   useEffect(() => {
  //     const get = async () => {
  //       setLoading(true);
  //       const data = await getUsuarioId(user.id);
  //       setUsuario(data);
  //       setLoading(false);
  //     };
  //     get();

  // },[])

  return (
    <>
      <NavBar />
      {/* {usuario.length > 0 ? ( */}
      <div
        style={{ flex: 1, maxWidth: "100%", padding: "30px" }}
        className="container"
      >
        {/* {usuario.map((usuario, index) => ( */}
        <>
          <div className="row justify-content-center">
            <div className="col-sm-8">
              <div className="row">
                <h2 className="d-flex justify-content-center mt-5">
                  Perfil do Usuário
                </h2>
              </div>
              <div className="row mb-5" id="tutorBox">
                <label className="texto col-sm-12"> Informações Pessoais</label>
                <div className="row">
                  <label className="line col-sm-6">
                    Nome Completo: {usuario.nomeCompleto}
                  </label>
                  <label className="line col-sm-6">
                    Data de nascimento: {usuario.dataNasc}
                  </label>
                </div>
                <div className="row">
                  <label className="line col-sm-6">CPF: {usuario.cpf}</label>
                  {`${usuario.nis}` === "" || `${usuario.nis}` === null ? (
                    <label className="line col-sm-6">NIS: {usuario.nis}</label>
                  ) : (
                    <label className="line col-sm-6">
                      NIS: (não preenchido)
                    </label>
                  )}
                </div>
                <div className="row">
                  <label className="line col-sm-6">
                    {" "}
                    E-mail: {usuario.email}
                  </label>
                  <label className="line col-sm-6">
                    {" "}
                    Celular: {usuario.celular}
                  </label>
                  {`${usuario.whatsapp}` ? (
                    <label className="line col-sm-6"> Whatsapp? Sim </label>
                  ) : (
                    <label className="line col-sm-6"> Whatsapp? Não </label>
                  )}

                  {`${usuario.telefone}` === "" ||
                  `${usuario.telefone}` === null ? (
                    <label className="line col-sm-6">
                      Telefone Fixo: {usuario.telefone}
                    </label>
                  ) : (
                    <label className="line col-sm-6">
                      Telefone Fixo: (não preenchido)
                    </label>
                  )}
                </div>
                {/* <label className="texto col-sm-12"> Documentos </label>
                <div className="row"> */}
                {/* <img src={data:image/jpeg;base64,${usuario.fotoUsuario}} /> */}
                {/* <label className="line col-sm-6">
                    <img
                      src={`data:image/jpeg;base64,${usuario.fotoUsuario}`}
                      alt="foto de perfil"
                    />
                  </label>
                  <label className="line col-sm-6">
                    <img
                      src={`data:image/jpeg;base64,${usuario.comprovanteResidencia}`}
                      alt="comprovante de residencia"
                    />
                  </label>
                </div>
                <label className="texto col-sm-12"> Endereço </label>
                <div className="row">
                  <label className="line col-sm-4">
                    CEP: {usuario.enderecoMostrarDTO.cep}
                  </label>
                  <label className="line col-sm-6">
                    Rua: {usuario.enderecoMostrarDTO.rua}
                  </label>
                  {`${usuario.enderecoMostrarDTO.numero}` === "" ||
                  `${usuario.enderecoMostrarDTO.numero}` === null ? (
                    <label className="line col-sm-2">
                      {" "}
                      Número: {usuario.enderecoMostrarDTO.numero}
                    </label>
                  ) : (
                    <label className="line col-sm-2">
                      Número: (não preenchido)
                    </label>
                  )}
                </div>
                <div className="row">
                  {`${usuario.enderecoMostrarDTO.complemento}` === "" ||
                  `${usuario.enderecoMostrarDTO.complemento}` === null ? (
                    <label className="line col-sm-4">
                      {" "}
                      Complemento: {usuario.enderecoMostrarDTO.complemento}
                    </label>
                  ) : (
                    <label className="line col-sm-4">
                      Complemento: (não preenchido)
                    </label>
                  )}
                  <label className="line col-sm-3">
                    Bairro: {usuario.enderecoMostrarDTO.bairro}
                  </label>
                  <label className="line col-sm-3">
                    Cidade: {usuario.enderecoMostrarDTO.cidade}
                  </label>
                  <label className="line col-sm-2">
                    UF: {usuario.enderecoMostrarDTO.estado}
                  </label> */}
                {/* </div> */}
              </div>
            </div>
          </div>
          <div className="row justify-content-end">
            <div className="col-sm-4 justify-content-end">
              <NavLink to="/menu">
                <Button className="buttonHome me-3">
                  Voltar para o menu de opções
                </Button>
              </NavLink>
            </div>
          </div>
        </>
        {/* ) */}
        {/* )} */}
      </div>
      {/* // ) : (
      //   <>{View}</>
      // )} */}
    </>
  );
};

export default PerfilTutor;
