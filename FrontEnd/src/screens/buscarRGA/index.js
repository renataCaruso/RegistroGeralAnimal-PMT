import React, { useEffect, useState } from "react";
import NavBar from "../../components/AppBar";
import styles from "./styles.css";
import { Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { getBusca } from "../../service/axiosClient";

const BuscarRGA = () => {
  const [usuario, setUsuario] = useState({});

  useEffect(() => {
    const get = async () => {
      const data = await getBusca();
      setUsuario(data);
    };
    get();
  }, []);

  return (
    <>
      <NavBar />
      <div
        style={{ flex: 1, maxWidth: "100%", padding: "30px" }}
        className="container"
      >
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="row">
              <h2 className="d-flex justify-content-center mt-5">
                Encontre o tutor pelo número do Registro Geral Animal
              </h2>
            </div>
            <div className="row" id="buscarga">
              <Form.Group>
                <Form.Control
                  size="lg"
                  type="text"
                  className="input-search"
                  placeholder="Buscar por número do Registro Geral Animal (RGA)"
                />
              </Form.Group>
              <Form.Group>
                <Button className="btn-search" variant="primary">
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="row mb-5" id="tutorBox">
                  <label className="texto col-sm-12">
                    {" "}
                    Informações Pessoais
                  </label>
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
                      <label className="line col-sm-6">
                        NIS: {usuario.nis}
                      </label>
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
                  <label className="texto col-sm-12"> Documentos </label>
                  <div className="row">
                  
                    <label className="line col-sm-6">
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
                    </label>
                  </div>
                </div> */}
    </>
  );
};

export default BuscarRGA;
