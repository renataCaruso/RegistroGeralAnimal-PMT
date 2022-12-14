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
      nomeCompleto: yup.string().matches(/^[A-Za-z ]*$/, 'Por favor, insira um nome v??lido').max(60).required("Este campo deve ?? obrigat??rio"),
      dataNasc: yup
        .string()
        .required("Este campo ?? obrigat??rio")
        .test(
          "dataNasc",
          "Verifique se digitou no formato dd/mm/aaaa. Menores de 18 n??o podem se cadastrar.",
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
      //   .required("Este campo ?? obrigat??rio"),
      // rua: yup.string().required("Este campo ?? obrigat??rio"),
      // bairro: yup.string().required("Este campo ?? obrigat??rio"),
      // cidade: yup.string().required("Este campo ?? obrigat??rio"),
      // uf: yup.string().required("Este campo ?? obrigat??rio"),
      numero: yup.string().matches(/^[0-9\s]+$/, 'Apenas n??meros s??o v??lidos').required("Este campo ?? obrigat??rio"),
      cep: yup.string().required("Este campo ?? obrigat??rio"),
      celular: yup.string().matches(/^[0-9\s]+$/, 'Apenas n??meros s??o v??lidos').required("Este campo ?? obrigat??rio"),
      email: yup
        .string()
        .email("Digite um email v??lido!")
        .required("Este campo ?? obrigat??rio"),
      confirmarEmail: yup
        .string()
        .required("Confirmar o email ?? obrigat??rio")
        .oneOf([yup.ref("email")], "Os emails devem ser iguais"),
      senha: yup
        .string()
        .min(6, "A senha deve ter no m??nimo 6 d??gitos")
        .required("Este campo ?? obrigat??rio"),
      confirmarSenha: yup
        .string()
        .required("Confirmar a senha ?? obrigat??rio")
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
      alert("?? necess??rio aceitar os termos e condi????es.");
    }
  };

  const cepTeresopolis = () => {
    console.log(confirmarCadastro);
    if (cep >= 25950000 && cep <= 25998000) {
      concordou();
    } else {
      setConfirmarCadastro(false);
      alert("Somente moradores de Teres??polis podem se cadastrar.");
    }
  };

  const adicionarUsuario = async () => {
    if (fotoUsuario === "" || comprovanteResidencia === "") {
      return alert("Foto e comprovante s??o obrigat??rios");
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
    //   alert("O tamanho da fotoUsuario n??o pode ser maior que 1MB");
    // } else {
    const base64 = await convertBase64(file);
    setFotoUsuario(base64);
    //}
  };

  const uploadcomprovanteResidencia = async (e) => {
    const file = e.target.files[0];
    // if (file.size > 1000000) {
    //   setComprovanteResidencia("");
    //   alert("O tamanho da fotoUsuario n??o pode ser maior que 1MB");
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
                Fa??a seu cadastro
              </text>
              <label className="texto col-sm-12"> Informa????es Pessoais</label>
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
                  Confirma????o de e-mail*
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
                  Esse n??mero tamb??m ?? utilizado como Whatsapp?
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
                    Insira seu comprovante de resid??ncia:
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
              <label className="texto col-sm-12"> Endere??o </label>
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
                  N??mero*
                  <input
                    {...register("numero", { required: true })}
                    type="text"
                    autoComplete="off"
                    className="form-control"
                    placeholder="n??"
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
              <label className="texto col-sm-12"> Seguran??a </label>
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
                    title="Pol??tica de Privacidade com base na LGPD"
                    text=" A sua privacidade ?? importante para n??s.
                Lei Geral de Prote????o de Dados Pessoais (LGPD) | LEI N?? 13.709, DE 14
                DE AGOSTO DE 2018.
          
                A sua privacidade ?? importante para n??s. ?? pol??tica de privacidade da
                Prefeitura Municipal de Teres??polis respeitar a sua privacidade em
                rela????o a qualquer informa????o sua que possamos coletar, e outros sites
                que possu??mos e operamos. 
               
                Solicitamos informa????es pessoais apenas quando realmente precisamos
                delas para lhe fornecer um servi??o. Fazemo-lo por meios justos e
                legais, com o seu conhecimento e consentimento. Tamb??m informamos por
                que estamos coletando e como ser?? usado.
              
                Apenas retemos as informa????es coletadas pelo tempo necess??rio para
                fornecer o servi??o solicitado. Quando armazenamos dados, protegemos
                dentro de meios comercialmente aceit??veis para evitar perdas e roubos,
                bem como acesso, divulga????o, c??pia, uso ou modifica????o n??o
                autorizados.
               N??o compartilhamos informa????es de identifica????o pessoal
                publicamente ou com terceiros, exceto quando exigido por lei.
              
                Voc?? ?? livre para recusar a nossa solicita????o de informa????es pessoais,
                entendendo que talvez n??o possamos fornecer alguns dos servi??os
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
                      text="Enviamos um link de confirma????o para o email registrado. Ap??s a confirma????o seu acesso ao portal ser?? liberado!"
                      textButton="Fechar"
                    />
                  ) : (
                    <ModalTerms
                      type="submit"
                      name="Cadastrar"
                      title="Cadastro n??o realizado"
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
