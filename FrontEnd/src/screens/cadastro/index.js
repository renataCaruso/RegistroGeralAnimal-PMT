import { useState, useEffect } from "react";
import { postUsuario } from "../../service/axiosClient";
import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "react-bootstrap";
import { useNavigate } from "react-router";
import ModalTerms from "./../../components/ModalTermsOfUse/index";
import moment from "moment";
import axios from "axios";
import MaskedInput from "../../components/MaskedInput";
import { DataArray } from "@mui/icons-material";
import NavBarPublico from "../../components/AppBarPublico/index";

const CadastroCliente = () => {
  const [data, setData] = useState([]);
  const [nomeCompleto, setNomeCompleto] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [dataNasc, setDataNascimento] = useState("");
  const [celular, setCelular] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [complemento, setComplemento] = useState("");
  const [fotoUsuario, setFotoUsuario] = useState("");
  const [comprovanteResidencia, setComprovanteResidencia] = useState("");
  const [nis, setNis] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [confirmarEmail, setConfirmarEmail] = useState("");
  const [usuarios, setUsuarios] = useState([]);
  const [concordo, setConcordo] = useState(false);
  const [agree, setAgree] = useState(false);
  const [confirmarCadastro, setConfirmarCadastro] = useState(false);
  const [whatsapp, setWhatsapp] = useState(false);
  const [switcher, setSwitcher] = useState(true);
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (cep.length >= 8) {
      axios
        .get("https://viacep.com.br/ws/" + cep + "/json/")
        .then((response) => {
          setData(response.data);
          setRua(response.data.logradouro);
          setBairro(response.data.bairro);
          setCidade(response.data.localidade);
          setUf(response.data.uf);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [cep]);

  const navigate = useNavigate();

  const schema = yup
    .object({
      nomeCompleto: yup.string().matches(/^[A-Za-z ]*$/, 'Por favor, insira um nome válido').max(60).required("Este campo deve é obrigatório"),
      dataNasc: yup
        .string()
        .required("Este campo é obrigatório")
        .test(
          "dataNasc",
          "Verifique se digitou no formato dd/mm/aaaa. Menores de 18 não podem se cadastrar.",
          (value) => {
            return moment().diff(moment(value), "years") >= 18;
          }
        ),
      // cpf: yup
      //   .string()
      //   .test(
      //     "len",
      //     "Deve ter exatamente 11 digitos",
      //     (val) => val.length === 11
      //   )
      //   .required("Este campo é obrigatório"),
      // rua: yup.string().required("Este campo é obrigatório"),
      // bairro: yup.string().required("Este campo é obrigatório"),
      // cidade: yup.string().required("Este campo é obrigatório"),
      // uf: yup.string().required("Este campo é obrigatório"),
      numero: yup.string().matches(/^[0-9\s]+$/, 'Apenas números são válidos').required("Este campo é obrigatório"),
      cep: yup.string().required("Este campo é obrigatório"),
      celular: yup.string().matches(/^[0-9\s]+$/, 'Apenas números são válidos').required("Este campo é obrigatório"),
      email: yup
        .string()
        .email("Digite um email válido!")
        .required("Este campo é obrigatório"),
      confirmarEmail: yup
        .string()
        .required("Confirmar o email é obrigatório")
        .oneOf([yup.ref("email")], "Os emails devem ser iguais"),
      senha: yup
        .string()
        .min(6, "A senha deve ter no mínimo 6 dígitos")
        .required("Este campo é obrigatório"),
      confirmarSenha: yup
        .string()
        .required("Confirmar a senha é obrigatório")
        .oneOf([yup.ref("senha")], "As senhas devem ser iguais"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const concordou = () => {
    if (agree) {
      adicionarUsuario();
    } else {
      setConfirmarCadastro(false);
      alert("É necessário aceitar os termos e condições.");
    }
  };

  const cepTeresopolis = () => {
    console.log(confirmarCadastro);
    if (cep >= 25950000 && cep <= 25998000) {
      concordou();
    } else {
      setConfirmarCadastro(false);
      alert("Somente moradores de Teresópolis podem se cadastrar.");
    }
  };

  const adicionarUsuario = async () => {
    if (fotoUsuario === "" || comprovanteResidencia === "") {
      return alert("Foto e comprovante são obrigatórios");
    }

    const novoUsuario = {
      nomeCompleto: nomeCompleto,
      telefone: telefone,
      dataNasc: dataNasc,
      cpf: cpf,
      senha: senha,
      celular: celular,
      whatsapp: whatsapp,
      //cidade: data.localidade,
      //rua: data.logradouro,
      //complemento: complemento,
      nis: nis,
      //bairro: data.bairro,
      //uf: data.uf,
      //numero: numero,
      email: email,
      //cep: cep,
      fotoUsuario: fotoUsuario,
      comprovanteResidencia: comprovanteResidencia,
      enderecoDTO: { cep: cep, numero: numero, complemento: complemento },
    };

    postUsuario(novoUsuario);

    setConfirmarCadastro(true);

    setData([]);
    setNomeCompleto("");
    setTelefone("");
    setDataNascimento("");
    setCpf("");
    setSenha("");
    setConfirmarSenha("");
    setCelular("");
    setDataNascimento("");
    setEmail("");
    setConfirmarEmail("");
    setCep("");
    setComplemento("");
    setNis("");
    setNumero("");
    setFotoUsuario("");
    setComprovanteResidencia("");
    setRua("");
    setCidade("");
    setBairro("");
    setUf("");
    // setSwitcher(!switcher)
  };

  const uploadfotoUsuario = async (e) => {
    const file = e.target.files[0];
    // if (file.size > 1000000) {
    //   setFotoUsuario("");
    //   alert("O tamanho da fotoUsuario não pode ser maior que 1MB");
    // } else {
    const base64 = await convertBase64(file);
    setFotoUsuario(base64);
    //}
  };

  const uploadcomprovanteResidencia = async (e) => {
    const file = e.target.files[0];
    // if (file.size > 1000000) {
    //   setComprovanteResidencia("");
    //   alert("O tamanho da fotoUsuario não pode ser maior que 1MB");
    // } else {
    const base64 = await convertBase64(file);
    setComprovanteResidencia(base64);
    //}
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

  return (
    <>
      <NavBarPublico />
      <div style={{ flex: 1 }} className="container ">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <form onSubmit={handleSubmit(cepTeresopolis)} className="row">
              <text
                style={{
                  fontSize: 35,
                  marginTop: "3%",
                }}
              >
                Faça seu cadastro
              </text>
              <label className="texto col-sm-12"> Informações Pessoais</label>
              <div className="row">
                <label className="line col-sm-6">
                  Nome completo*
                  <input
                    {...register("nomeCompleto", { required: true })}
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    // placeholder="Nome Completo"
                    value={nomeCompleto}
                    onChange={(e) => setNomeCompleto(e.target.value)}
                  />
                  {errors.nomeCompleto && (
                    <span>{errors.nomeCompleto?.message}</span>
                  )}
                </label>

                <label className="line col-sm-6">
                  Data de nascimento*
                  <input
                    {...register("dataNasc", { required: true })}
                    type="date"
                    autoComplete="off"
                    className="form-control"
                    placeholder="dd/mm/aaaa"
                    value={dataNasc}
                    onChange={(e) => setDataNascimento(e.target.value)}
                  />
                  {errors.dataNasc && <span>{errors.dataNasc?.message}</span>}
                </label>
              </div>
              <div className="row">
                {/* <label className="line col-sm-3">
              CPF*
              <input
                {...register("cpf", { required: true })}
                type="text"
                className="form-control"
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                
              />
              {errors.cpf && <span>{errors.cpf?.message}</span>}
            </label> */}

                <label className="line col-sm-6">
                  CPF*
                  <MaskedInput
                    type="text"
                    className="form-control"
                    placeholder="000.000.000-00"
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                  />
                  {errors.cpf && <span>{errors.cpf?.message}</span>}
                </label>

                <label className="line col-sm-6">
                  NIS
                  <input
                    {...register("nis")}
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    placeholder="00000000000"
                    value={nis}
                    onChange={(e) => setNis(e.target.value)}
                  />
                  {errors.nis && <span>{errors.nis?.message}</span>}
                </label>
              </div>
              <div className="row">
                <label className="line col-sm-6">
                  E-mail*
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="seuemail@exemplo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {<span>{errors.email?.message}</span>}
                </label>

                <label className="line col-sm-6">
                  Confirmação de e-mail*
                  <input
                    {...register("confirmarEmail", { required: true })}
                    type="email"
                    autoComplete="off"
                    className="form-control"
                    placeholder="seuemail@exemplo.com"
                    value={confirmarEmail}
                    onChange={(e) => setConfirmarEmail(e.target.value)}
                  />
                  {<span>{errors.confirmarEmail?.message}</span>}
                </label>
              </div>
              <div className="row">
                <label className="line col-sm-6">
                  Celular*
                  <input
                    {...register("celular", { required: true })}
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    placeholder="(DDD) 00000-0000"
                    value={celular}
                    onChange={(e) => setCelular(e.target.value)}
                  />
                  {<span>{errors.celular?.message}</span>}
                  <br></br>
                  <input
                    type="checkbox"
                    id="agree"
                    onChange={() => setWhatsapp(!whatsapp)}
                  />
                  Esse número também é utilizado como Whatsapp?
                </label>

                <label className="line col-sm-6">
                  {" "}
                  Telefone Fixo
                  <input
                    {...register("telefone")}
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    placeholder="(DDD) 0000-0000"
                    value={telefone}
                    onChange={(e) => setTelefone(e.target.value)}
                  />
                </label>
              </div>
              <label className="texto col-sm-12"> Documentos </label>
              <div className="row">
                <div className="line col-sm-6">
                  <label className="row">
                    Insira sua foto:
                    <br></br>
                    <br></br>
                  </label>
                  <input
                    // {...register("fotoUsuario" , {required: true})}
                    type="file"
                    name="fotoUsuario"
                    placeholder="fotoUsuario"
                    onChange={(e) => uploadfotoUsuario(e)}
                    // onChange={(e) => setFotoUsuario(e.target.value)}
                  />
                  <img src={fotoUsuario} height="200px" className="picture" />
                </div>

                <div className="line col-sm-6">
                  <label className="row">
                    Insira seu comprovante de residência:
                    <br></br>
                    <br></br>
                  </label>
                  <input
                    // {...register("fotoUsuario" , {required: true})}
                    type="file"
                    name="comprovanteResidencia"
                    placeholder="comprovanteResidencia"
                    onChange={(e) => uploadcomprovanteResidencia(e)}
                    // onChange={(e) => setComprovanteResidencia(e.target.value)}
                  />
                  <img
                    src={comprovanteResidencia}
                    height="200px"
                    className="picture"
                  />
                </div>
              </div>
              <label className="texto col-sm-12"> Endereço </label>
              <div className="row">
                <label className="line col-sm-4">
                  <a
                    target="_blank"
                    href="https://www2.correios.com.br/sistemas/buscacep/buscaCep.cfm"
                  >
                    Consultar CEP
                  </a>
                  <input
                    {...register("cep", { required: true })}
                    type="cep"
                    className="form-control"
                    value={`${cep}`}
                    placeholder="Digite seu CEP aqui"
                    onChange={(e) => setCep(e.target.value)}
                  />
                  {<span>{errors.cep?.message}</span>}
                </label>
                <label className="line col-sm-6">
                  Rua*
                  <input
                    // {...register("rua", { required: true })}
                    type="text"
                    className="form-control"
                    // placeholder="Rua"
                    value={rua}
                    readOnly
                  />
                  {<span>{errors.rua?.message}</span>}
                </label>
                {/* </div>
          <div> */}
                <label className="line col-sm-2">
                  {" "}
                  Número*
                  <input
                    {...register("numero", { required: true })}
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    placeholder="nº"
                    value={numero}
                    onChange={(e) => setNumero(e.target.value)}
                  />
                  {<span>{errors.numero?.message}</span>}
                </label>
              </div>
              <div className="row">
                <label className="line col-sm-4">
                  {" "}
                  Complemento
                  <input
                    {...register("complemento")}
                    type="text"
                    className="form-control"
                    placeholder="bloco / apto / etc"
                    value={complemento}
                    onChange={(e) => setComplemento(e.target.value)}
                  />
                </label>
                {/* </div>
          <div> */}
                <label className="line col-sm-3">
                  {" "}
                  Bairro*
                  <input
                    // {...register("bairro", { required: true })}
                    type="text"
                    className="form-control"
                    // placeholder="Bairro"
                    value={bairro}
                    readOnly
                  />
                  {<span>{errors.bairro?.message}</span>}
                </label>

                <label className="line col-sm-3">
                  {" "}
                  Cidade*
                  <input
                    // {...register("cidade", { required: true })}
                    type="text"
                    className="form-control"
                    // placeholder="Cidade"
                    value={cidade}
                    readOnly
                  />
                  {<span>{errors.cidade?.message}</span>}
                </label>

                <label className="line col-sm-2">
                  {" "}
                  UF*
                  <input
                    // {...register("uf", { required: true })}
                    type="text"
                    className="form-control"
                    // placeholder="Estado"
                    value={uf}
                    readOnly
                  />
                  {<span>{errors.uf?.message}</span>}
                </label>
              </div>
              <label className="texto col-sm-12"> Segurança </label>
              <div className="row">
                <label className="line col-sm-6">
                  {" "}
                  Cadastre uma senha*
                  <input
                    {...register("senha", { required: true })}
                    type="password"
                    className="form-control"
                    placeholder="Escolha uma senha"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                  {<span>{errors.senha?.message}</span>}
                </label>
                {/* </div>
          <div> */}
                <label className="line col-sm-6">
                  {" "}
                  Confirmar senha*
                  <input
                    {...register("confirmarSenha", { required: true })}
                    type="password"
                    className="form-control"
                    placeholder="Confirme sua senha"
                    value={confirmarSenha}
                    onChange={(e) => setConfirmarSenha(e.target.value)}
                  />
                  {<span>{errors.confirmarSenha?.message}</span>}
                </label>
              </div>
              <div className="termos">
                <div className="row-sm-2">
                  <ModalTerms
                    style={{
                      color: "rgb(45, 82, 153)",
                      backgroundColor: "white",
                      borderColor: "rgb(45, 82, 153)",
                    }}
                    name="Termos de uso"
                    title="Política de Privacidade com base na LGPD"
                    text=" A sua privacidade é importante para nós.
                Lei Geral de Proteção de Dados Pessoais (LGPD) | LEI Nº 13.709, DE 14
                DE AGOSTO DE 2018.
          
                A sua privacidade é importante para nós. É política de privacidade da
                Prefeitura Municipal de Teresópolis respeitar a sua privacidade em
                relação a qualquer informação sua que possamos coletar, e outros sites
                que possuímos e operamos. 
               
                Solicitamos informações pessoais apenas quando realmente precisamos
                delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
                legais, com o seu conhecimento e consentimento. Também informamos por
                que estamos coletando e como será usado.
              
                Apenas retemos as informações coletadas pelo tempo necessário para
                fornecer o serviço solicitado. Quando armazenamos dados, protegemos
                dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
                bem como acesso, divulgação, cópia, uso ou modificação não
                autorizados.
               Não compartilhamos informações de identificação pessoal
                publicamente ou com terceiros, exceto quando exigido por lei.
              
                Você é livre para recusar a nossa solicitação de informações pessoais,
                entendendo que talvez não possamos fornecer alguns dos serviços
                desejados."
                    textButton="Fechar"
                  />
                  <div>
                    <input
                      type="checkbox"
                      id="agree"
                      onChange={() => setAgree(!agree)}
                    />
                    <label htmlFor="agree" className="ms-1">
                      Li e aceito os <b>termos de uso</b>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row ">
                <div className="line col-sm-2 d-flex justify-content-start mt-30 mb-5"></div>
                <div className="line col-sm-10 d-flex justify-content-end mt-30 mb-5 ">
                  {/* {console.log(confirmarCadastro)} */}
                  {confirmarCadastro ? (
                    <ModalTerms
                      type="submit"
                      name="Cadastrar"
                      title="Confira seu email"
                      text="Enviamos um link de confirmação para o email registrado. Após a confirmação seu acesso ao portal será liberado!"
                      textButton="Fechar"
                    />
                  ) : (
                    <ModalTerms
                      type="submit"
                      name="Cadastrar"
                      title="Cadastro não realizado"
                      text="Verifique se todos os campos foram preenchidos corretamente e se o termo de uso foi aceito."
                      textButton="Fechar"
                    />
                  )}
                  <button
                    type="button"
                    className="botao btn-outline-danger ms-3"
                    // id="cancelar"
                    onClick={() => navigate("/login")}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CadastroCliente;
