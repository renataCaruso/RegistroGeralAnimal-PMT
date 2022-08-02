import { useState, useEffect, useContext } from "react";
import { getUsuarioId, postPet, postUsuario } from "../../service/axiosClient";
import "./syles.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router";
import { Dropdown } from "react-bootstrap";
import Select from "react-select/creatable";
import NavBar from "../../components/AppBar";
import { AuthContext } from "../../context/auth";
import { getUserEmail } from "../../service/axiosClient";

const CadastroPet = () => {
  const {user} = useContext(AuthContext);

  const [guardar, setGuardar] = useState({})
  const [usuario, setUsuario] = useState({});
  const [nomeAnimal, setNomeAnimal] = useState("");
  const [sexo, setSexo] = useState("");
  const [especie, setEspecie] = useState("");
  const [raca, setRaca] = useState("");
  const [dataNascAnim, setDataNascAnim] = useState("");
  const [fotoAnimal, setFotoAnimal] = useState("");
  const [vacinaMultipla, setVacinaMultipla] = useState("");
  const [vacinaAntiRabica, setVacinaAntiRabica] = useState("");
  const [carteiraVacinacao, setCarteiraVacinacao] = useState("");
  const [castrado, setCastrado] = useState(null);
  const [desejaCastrar, setDesejaCastrar] = useState(null);
  const [chipado, setChipado] = useState(null);
  const [chip, setChip] = useState("");
  const [Loading, setLoading] = useState(false);
  const [aparecer, setAparecer] = useState(false);
  const [count, setCount] = useState(0);
  const [idUsuario, setIdUsuario] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [vira, setVira] = useState(false)
  const [felv, setFelv] = useState(null)
  const [fiv, setFiv] = useState(null)
  const navigate = useNavigate();

  const options = [
    { value: "AKITA", label: "Akita" },
    { value: "BASSET_HOUND", label: "Basset Hound" },
    { value: "BEAGLE", label: "Beagle" },
    { value: "BICHON_FRISE", label: "Bicho Frise" },
    { value: "BOIADEIRO_AUSTRALIANO", label: "Boiadeiro Australiano" },
    { value: "BOSTON TERRIER", label: "Border Collie" },
    { value: "BOXER", label: "Boxer" },
    { value: "BULDOGUE_FRANCES", label: "Buldogue Francês" },
    { value: "BULDOGUE_INGLES", label: "Buldogue Inglês" },
    { value: "BULL_TERRIER", label: "Bull Terrier" },
    { value: "CANE_CORSO", label: "Cane Corso" },
    { value: "CAVALIER_KING_CHARLES SPAINEL", label: "Cavalier King Spainel" },
    { value: "CHIHUAHUA", label: "Chihuahua" },
    { value: "CHOW_CHOW", label: "Chow Chow" },
    { value: "DACHSHUND", label: "Dachshund" },
    { value: "DALMATA", label: "Dalmata" },
    { value: "DOBERMAN", label: "Doberman" },
    { value: "DOGO_ARGENTINO", label: "Dogo Argentino" },
    { value: "DOGUE_ALEMAO", label: "Dogue Alemão" },
    { value: "FILA_BRASILEIRO", label: "Fila Brasileiro" },
    { value: "GOLDEN_RETIEVER", label: "Golden Retriever" },
    { value: "JACK_RUSSEL_TERRIER", label: "Jack Russel Terrier" },
    { value: "LABRADOR_RETRIEVER", label: "Labrador" },
    { value: "LHASA_APSO", label: "Lhasa Apso" },
    { value: "LULU_DA_POMERANIA", label: "Lulu da Pomerania" },
    { value: "MASTIFF_INGLES", label: "Mastiff Inglês" },
    { value: "MASTIM_TIBETANO", label: "Mastim Tibetano" },
    { value: "PASTOR_ALEMAO", label: "Pastor Alemão" },
    { value: "PASTOR_AUSTRALIANO", label: "Pastor Australiano" },
    { value: "PASTOR_DE_SHETLAND", label: "Pastor de Shetland" },
    { value: "PEQUINES", label: "Pequines" },
    { value: "PINSCHER", label: "Pinscher" },
    { value: "PIT_BULL", label: "Pit Bull" },
    { value: "POODLE", label: "Poodle" },
    { value: "PUG", label: "Pug" },
    { value: "ROTTWEILER", label: "Rottweiler" },
    { value: "SCHNAUZER", label: "Schnauzer" },
    { value: "SHAR_PEI", label: "Shar Pei" },
    { value: "SHIBA", label: "Shiba" },
    { value: "SHIH_TZU", label: "Shih Tzu" },
    {
      value: "STAFFORDSHIRE_BULL_TERRIER",
      label: "Staffordshire Bull Terrier",
    },
    { value: "WEIMARANER", label: "Weimaraner" },
    { value: "YORKSHIRE", label: "Yorkshire" },
    { value: "SRD", label: "Sem raça definida" },
  ];

  const options2 = [
    { value: "PERSA_E_HIMALAIA", label: "Persa" },
    { value: "SIAMES", label: "Siames" },
    { value: "MAINE_COON", label: "Maine Coon" },
    { value: "ANGORA", label: "Angora" },
    { value: "SPHYNX", label: "Sphynx" },
    { value: "RAGDOLL", label: "Ragdoll" },
    { value: "ASHERA", label: "Ashera" },
    { value: "AMERICAN_SHORTHAIR", label: "American Shorthair" },
    { value: "EXOTICO", label: "Exôtico" },
    { value: "SRD", label: "Sem raça definida" },
  ];

  // useEffect(() => {
  //   setVira(!vira)
  // }, [])


  useEffect(() => {
      const get = async () => {
        console.log(user.email)
        setLoading(true);
        const data = await getUserEmail(user.email);
        setUsuario(data);
        setLoading(false);
      };
      get();
    
  },[])

//   useEffect(() => {
//     const get = async () => {
//       setLoading(true);
//       const data = await getUsuarioId(user.id);
//       setUsuario(data);
//       setLoading(false);
//     };
//     get();
  
// },[])



  // const procurando = (searchValue) => {
  //   options.filter((option) =>
  //     option.label.toLowerCase().includes(searchValue)
  //   );
  // };

  const adicionarPet = async () => {
    console.log(usuario.idUsuario)
    console.log(usuario)
    if (
      castrado === null ||
      (castrado === false && desejaCastrar === null) ||
      chipado === null
    ) {
      return alert("Marque todas as opções");
    }
    if (fotoAnimal === "" || carteiraVacinacao === "") {
      return alert("Foto do animal e foto da carteira de vacinação são obrigatórios");
    }

    const novoPet = {
      nomeAnimal: nomeAnimal,
      especie: especie,
      sexo: sexo,
      raca: raca,
      dataNascAnim: dataNascAnim,
      vacinaAntiRabica: vacinaAntiRabica,
      vacinaMultipla: vacinaMultipla,
      castrado: Boolean(castrado),
      desejaCastrar: Boolean(desejaCastrar),
      chipado: Boolean(chipado),
      chip: chip,
      fotoAnimal: fotoAnimal,
      carteiraVacinacao: carteiraVacinacao,
      descricao: descricao,
      fiv: Boolean(fiv),
      felv: Boolean(felv),
      // idUsuario: 1,

      idUsuario: usuario.idUsuario,
      // idUSuario: usuario.id
    };
    console.log(novoPet.idUsuario)
    postPet(novoPet);
    alert("Animal cadastrado com SUCESSO!");

    setNomeAnimal("");
    setEspecie("");
    setSexo("");
    setRaca("");
    setDataNascAnim("");
    setVacinaAntiRabica("");
    setVacinaMultipla("");
    setCastrado(null);
    setDesejaCastrar(null);
    setChipado(null);
    setChip("");
    setFotoAnimal("");
    setCarteiraVacinacao("");
  };

  const uploadfotoAnimal = async (e) => {
    const file = e.target.files[0];
    if (file.size > 1000000) {
      setFotoAnimal("");
      alert("O tamanho da foto não pode ser maior que 1MB");
    } else {
      const base64 = await convertBase64(file);
      console.log(base64);
      setFotoAnimal(base64);
    }
  };

  const uploadCarteira = async (e) => {
    const file = e.target.files[0];
    if (file.size > 1000000) {
      setCarteiraVacinacao("");
      alert("O tamanho da foto não pode ser maior que 1MB");
    } else {
      const base64 = await convertBase64(file);
      console.log(base64);
      setCarteiraVacinacao(base64);
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

  const handleChange = (e) => {
    setRaca(e.value);
  };

  const aparecerDesejaCastrar = () => {
    return (
      <label className="line col-sm-6">
        {" "}
        Deseja castrar?
        <div className="form-check">
          <input
            value="true"
            checked={desejaCastrar === "true"}
            onChange={(e) => setDesejaCastrar(e.target.value)}
            className="form-check-input"
            type="radio"
            name="desejaCastrarRadial"
          />
          <label className="form-check-label">Sim</label>
        </div>
        <div className="form-check">
          <input
            value="false"
            checked={desejaCastrar === "false"}
            onChange={(e) => setDesejaCastrar(e.target.value)}
            className="form-check-input"
            type="radio"
            name="desejaCastrarRadial"
          />
          <label className="form-check-label">Não</label>
        </div>
      </label>
    );
  };

  const aparecerChip = () => {
    return (
      <label className="line col-sm-6">
        {" "}
        Código do chip
        <input
          type="text"
          className="form-control"
          placeholder="Codigo do chip"
          value={chip}
          onChange={(e) => setChip(e.target.value)}
        />
      </label>
    );
  };

  const aparecerRacaCao = () => {
    return (
      <>
      <label className="line col-sm-4">
        {" "}
        Raça:
        <Select options={options} onChange={handleChange} />
      </label>
    </>
    );
  };

  const aparecerRacaGato = () => {
    return (
        <>
      <label className="line col-sm-2">
        {" "}
        Raça:
        <Select options={options2} onChange={handleChange} />
      </label>
      <label className="line col-sm-1">
      {" "}
      Fiv
      <div className="form-check">
        <input
          value="true"
          onChange={(e) => setFiv(e.target.value)}
          className="form-check-input"
          type="radio"
          name="fivRadial"
        />
        <label className="form-check-label">Positivo</label>
      </div>
      <div className="form-check">
        <input
          value=""
          onChange={(e) => setFiv(e.target.value)}
          className="form-check-input"
          type="radio"
          name="fivRadial"
        />
        <label className="form-check-label">Negativo</label>
      </div>
    </label>
    <label className="line col-sm-1">
      {" "}
      Felv
      <div className="form-check">
        <input
          value="true"
          onChange={(e) => setFelv(e.target.value)}
          className="form-check-input"
          type="radio"
          name="felvRadial"
        />
        <label className="form-check-label">Positivo</label>
      </div>
      <div className="form-check">
        <input
          value=""
          onChange={(e) => setFelv(e.target.value)}
          className="form-check-input"
          type="radio"
          name="felvRadial"
        />
        <label className="form-check-label">Negativo</label>
      </div>
    </label>
        </>
      
    );
  };

  return (
    <div>
      <NavBar />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <div className="row">
              <h2 className="d-flex justify-content-center mt-5">
                {" "}
                Cadastre seu Animal de Estimação
              </h2>
              <br></br>
              <br></br>
              <br></br>
            </div>
            <div className="row mb-5" id="petBox">
              <div className="col-sm-12">
                <div>
                  <form onSubmit={adicionarPet} className="row">
                    <div className="row">
                      <label className="line col-sm-6">
                        {" "}
                        Nome Completo*
                        <input
                          type="text"
                          className="form-control"
                          value={nomeAnimal}
                          onChange={(e) => setNomeAnimal(e.target.value)}
                        />
                      </label>

                      <label className="line col-sm-6 ">
                        {" "}
                        Sexo:
                        <div className="form-check">
                          <input
                            value="macho"
                            checked={sexo === "macho"}
                            onChange={(e) => setSexo(e.target.value)}
                            className="form-check-input"
                            type="radio"
                            name="sexoRadial"
                          />
                          <label className="form-check-label">Macho</label>
                        </div>
                        <div className="form-check">
                          <input
                            value="fêmea"
                            checked={sexo === "fêmea"}
                            onChange={(e) => setSexo(e.target.value)}
                            className="form-check-input"
                            type="radio"
                            name="sexoRadial"
                          />
                          <label className="form-check-label">Fêmea</label>
                        </div>
                      </label>
                    </div>
                    <div className="row">
                      <label className="line col-sm-2">
                        {" "}
                        Espécie:
                        <div className="form-check">
                          <input
                            value="canino"
                            checked={especie === "canino"}
                            onChange={(e) => setEspecie(e.target.value)}
                            className="form-check-input"
                            type="radio"
                            name="especieRadio"
                          />
                          <label className="form-check-label">Canino</label>
                        </div>
                        <div className="form-check">
                          <input
                            value="felino"
                            checked={especie === "felino"}
                            onChange={(e) => setEspecie(e.target.value)}
                            className="form-check-input"
                            type="radio"
                            name="especieRadio"
                          />
                          <label className="form-check-label">Felino</label>
                        </div>
                      </label>

                      {especie !== "" ? (
                        especie === "canino" ? (
                          aparecerRacaCao()
                        ) : (
                          aparecerRacaGato()
                        )
                      ) : (
                        <div className="col-sm-4"></div>
                      )}

                      <label className="line col-sm-6">
                        {" "}
                        Data de nascimento
                        <input
                          type="date"
                          className="form-control"
                          placeholder="dd/mm/aaaa"
                          value={dataNascAnim}
                          onChange={(e) => setDataNascAnim(e.target.value)}
                        />
                      </label>
                    </div>
                    <div className="row">
                      <label className="line col-sm-6">
                        {" "}
                        Data da última vacinação anti-rábica
                        <input
                          type="date"
                          className="form-control"
                          placeholder="dd/mm/aaaa"
                          value={vacinaAntiRabica}
                          onChange={(e) => setVacinaAntiRabica(e.target.value)}
                        />
                      </label>

                      <label className="line col-sm-6">
                        {" "}
                        Data da última vacinação contra virose
                        <input
                          type="date"
                          className="form-control"
                          placeholder="dd/mm/aaaa"
                          value={vacinaMultipla}
                          onChange={(e) => setVacinaMultipla(e.target.value)}
                        />
                      </label>
                    </div>

                    <div className="row">
                      <div className="line col-sm-6 ">
                        <label className="row p-3">
                          Insira uma foto do seu animal:
                        </label>
                        <input
                          className="moldura"
                          type="file"
                          name="foto"
                          placeholder="foto"
                          onChange={(e) => uploadfotoAnimal(e)}
                          // onChange={(e) => setFotoAnimal(e.target.value)}
                        />
                        <img
                          src={fotoAnimal}
                          height="200px"
                          className="picture"
                        />
                      </div>
                      <div className="line col-sm-6">
                        <label className="row p-3">
                          Insira uma foto da carteira de vacinação:
                        </label>
                        <input
                          className="moldura"
                          type="file"
                          name="comprovante"
                          placeholder="foto"
                          onChange={(e) => uploadCarteira(e)}
                          // onChange={(e) => setCarteiraVacinacao(e.target.value)}
                        />
                        <img
                          src={carteiraVacinacao}
                          height="200px"
                          className="picture"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <label className="line col-sm-6">
                        {" "}
                        É castrado?
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

                      {castrado === "" ? (
                        aparecerDesejaCastrar()
                      ) : (
                        <div className="col-sm-6"></div>
                      )}

                      <label className="line col-sm-6">
                        {" "}
                        O animal possui um chip?
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

                      {chipado === "true" ? (
                        aparecerChip()
                      ) : (
                        <div className="col-sm-6"></div>
                      )}

                      <div className="row">
                        <label className="line col-sm-6 d-flex align-item-center">
                          {" "}
                          Descrição do Animal (opcional):
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

export default CadastroPet;
