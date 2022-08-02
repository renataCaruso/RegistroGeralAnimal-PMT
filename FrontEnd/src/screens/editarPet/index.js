import { useState, useEffect, useContext } from "react";
import {
  getUsuarioId,
  putPet,
  postUsuario,
  getPetId,
} from "../../service/axiosClient";
import "./styles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import Select from "react-select/creatable";
import NavBar from "./../../components/AppBar/index";
import { AuthContext } from "../../context/auth";

const EditarPet = () => {
  // const { idPet } = route.params;
  const [pet, setPet] = useState({});
  const [nomePet, setNomePet] = useState("");
  const [sexo, setSexo] = useState("");
  const [tipo, setTipo] = useState("");
  const [raca, setRaca] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [fotoPet, setFotoPet] = useState("");
  const [vacinaVirose, setVacinaVirose] = useState("");
  const [vacinaRabica, setVacinaRabica] = useState("");
  const [fotoCarteira, setFotoCarteira] = useState("");
  const [castrado, setCastrado] = useState(null);
  const [castrar, setCastrar] = useState(null);
  const [chipado, setChipado] = useState(null);
  const [codigoChip, setCodigoChip] = useState("");
  const [Loading, setLoading] = useState(false);
  const [aparecer, setAparecer] = useState(false);
  const [count, setCount] = useState(0);
  const [id, setId] = useState(0);
  const [mostrandoCastrado, setMostrandoCastrado] = useState(null);
  const [mostrandoChip, setMostrandoChip] = useState(null);
  const [descricao, setDescricao] = useState("");
  const navigate = useNavigate();
  const { user, petId } = useContext(AuthContext);

  //   const navigate = useNavigate()

  useEffect(() => {
    const get = async (id) => {
      setLoading(true);
      const data = await getPetId(6);
      setPet(data);
      settarPet(data);
      setLoading(false);
      console.log(petId)
    };
    get();
  }, []);

  

  const editarPet = async () => {
    const petEditado = {
      nomeAnimal: nomePet,
      especie: tipo,
      sexo: sexo,
      raca: raca,
      dataNascAnim: nascimento,
      vacinaAntiRabica: vacinaRabica,
      vacinaMultipla: vacinaVirose,
      castrado: Boolean(castrado),
      desejaCastrar: Boolean(castrar),
      chipado: Boolean(chipado),
      chip: codigoChip,
      fotoAnimal: fotoPet,
      carteiraVacinacao: fotoCarteira,
      descricao: descricao,
    };

    putPet(6, petEditado);

    alert("Informações atualizadas com sucesso");
  };

  const settarPet = (pet) => {
    console.log(pet);
    setId(pet.id);
    setNomePet(pet.nomePet);
    setSexo(pet.sexo);
    setTipo(pet.tipo);
    setRaca(pet.raca);
    setNascimento(pet.dataNascAnim);
    setVacinaRabica(pet.vacinaRabica);
    setVacinaVirose(pet.vacinaVirose);
    setCastrado(pet.castrado);
    setCastrar(pet.castrar);
    setChipado(pet.chipado);
    setCodigoChip(pet.codigochip);
    setMostrandoCastrado(pet.castrado);
    setMostrandoChip(pet.chipado);
    // setFotoPet(pet.fotoPet);
    // setFotoCarteira(pet.fotoCarteira);
    setDescricao(pet.descricao);
  };

  const uploadFotoPet = async (e) => {
    const file = e.target.files[0];
    if (file.size > 1000000) {
      setFotoPet("");
      alert("O tamanho da foto não pode ser maior que 1MB");
    } else {
      const base64 = await convertBase64(file);
      console.log(base64);
      setFotoPet(base64);
    }
  };

  const uploadCarteira = async (e) => {
    const file = e.target.files[0];
    if (file.size > 1000000) {
      setFotoCarteira("");
      alert("O tamanho da foto não pode ser maior que 1MB");
    } else {
      const base64 = await convertBase64(file);
      console.log(base64);
      setFotoCarteira(base64);
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const aparecerCastrar = () => {
    return (
      <label className="line col-sm-3">
        {" "}
        Deseja castrar?
        <div className="form-check">
          <input
            value="true"
            onChange={(e) => setCastrar(e.target.value)}
            className="form-check-input"
            type="radio"
            name="castrarRadial"
          />
          <label className="form-check-label">Sim</label>
        </div>
        <div className="form-check">
          <input
            value="false"
            onChange={(e) => setCastrar(e.target.value)}
            className="form-check-input"
            type="radio"
            name="castrarRadial"
          />
          <label className="form-check-label">Não</label>
        </div>
      </label>
    );
  };

  const aparecerChip = () => {
    return (
      <label className="line col-sm-3">
        {" "}
        Código do chip
        <input
          type="text"
          className="form-control"
          placeholder="Codigo do chip"
          value={codigoChip}
          onChange={(e) => setCodigoChip(e.target.value)}
        />
      </label>
    );
  };

  return (
    <div id="allpage">
      <NavBar />
      <div className="container d-flex">
      <div className="row justify-content-center">
          <div className="col-sm-8">
        <div className="row d-flex justify-content-center">
          {!Loading ? (
            <h2
              className="col-sm-7 d-flex justify-content-center mt-5"
              id="petInfo"
            >
              {" "}
              {pet.nomeAnimal} - {pet.especie} - {pet.sexo}
            </h2>
          ) : (
            <h2
              className="col-sm-7 d-flex justify-content-center mt-5"
              id="petInfo"
            >
              {" "}
              ...Carregando{" "}
            </h2>
          )}
        </div>
        <div className="row" id="petBox">
          <div className="col-sm-12">
            <div>
              <form onSubmit={editarPet} className="row">
                <div className="row">
                  <label className="line col-sm-6">
                    {" "}
                    Data da última vacinação anti-rábica
                    <input
                      type="date"
                      className="form-control"
                      placeholder="dd/mm/aaaa"
                      value={vacinaRabica}
                      onChange={(e) => setVacinaRabica(e.target.value)}
                    />
                  </label>

                  <label className="line col-sm-6">
                    {" "}
                    Data da última vacinação contra virose
                    <input
                      type="date"
                      className="form-control"
                      placeholder="dd/mm/aaaa"
                      value={vacinaVirose}
                      onChange={(e) => setVacinaVirose(e.target.value)}
                    />
                  </label>
                </div>

                <div className="row">
                  <div className="line col-sm-6">
                    <label className="row p-3">Insira uma foto do animal:</label>
                    <input
                      type="file"
                      name="foto"
                      placeholder="foto"
                      onChange={(e) => uploadFotoPet(e)}
                    />
                    <img src={fotoPet} height="200px" className="picture" />
                  </div>

                  <div className="line col-sm-6">
                    <label className="row p-3">
                      Insira uma foto da carteira de vacinação:
                    </label>
                    <input
                      type="file"
                      name="comprovante"
                      placeholder="foto"
                      onChange={(e) => uploadCarteira(e)}
                    />
                  </div>
                </div>

                <div className="row">
                  {mostrandoCastrado === false ? (
                    <label className="line col-sm-3">
                      {" "}
                      Castrado?
                      <div className="form-check">
                        <input
                          value="true"
                          onChange={(e) => setCastrado(e.target.value)}
                          className="form-check-input"
                          type="radio"
                          name="castradoRadial"
                        />
                        <label className="form-check-label">Sim</label>
                      </div>
                      <div className="form-check">
                        <input
                          value=""
                          onChange={(e) => setCastrado(e.target.value)}
                          className="form-check-input"
                          type="radio"
                          name="castradoRadial"
                        />
                        <label className="form-check-label">Não</label>
                      </div>
                    </label>
                  ) : (
                    <div></div>
                  )}

                  {castrado === "" ? (
                    aparecerCastrar()
                  ) : (
                    <div className="col-sm-3"></div>
                  )}

                  {mostrandoChip === false ? (
                    <label className="line col-sm-3">
                      {" "}
                      Animal recebeu um chip?
                      <div className="form-check">
                        <input
                          value="true"
                          onChange={(e) => setChipado(e.target.value)}
                          className="form-check-input"
                          type="radio"
                          name="chipadoRadial"
                        />
                        <label className="form-check-label">Sim</label>
                      </div>
                      <div className="form-check">
                        <input
                          value=""
                          onChange={(e) => setChipado(e.target.value)}
                          className="form-check-input"
                          type="radio"
                          name="chipadoRadial"
                        />
                        <label className="form-check-label">Não</label>
                      </div>
                    </label>
                  ) : (
                    <div className="col-sm-3"></div>
                  )}

                  {chipado === "true" ? (
                    aparecerChip()
                  ) : (
                    <div className="col-sm-3"></div>
                  )}
                </div>

                <div className="row">
                  <label className="line col-sm-6 d-flex align-item-center">
                    {" "}
                    Descrição do Animal (Opcional):
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Características como pelagem, cor, presença de manchas"
                      value={descricao}
                      onChange={(e) => setDescricao(e.target.value)}
                    />
                  </label>
                </div>

                <div className="row">
                  <div className="line col-sm-10 d-flex justify-content-end mt-30 mb-5 ">
                    <button type="submit" className="btn btn-success">
                      Cadastrar
                    </button>
                    <button
                      type="button"
                      className="botao btn-outline-danger ms-3"
                      onClick={() => navigate("/home")}
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default EditarPet;
