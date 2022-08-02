import React, { useState, useContext } from "react";
import styles from "./styles.css";
import { AuthContext } from "../../context/auth";
import Button from "./../../components/Button";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import Input from "./../../components/InputForm/index";
import dogs from "../../image/cachorro.jpg";
import Carousel from "react-bootstrap/Carousel";
import { postUser } from "../../service/axiosClient";
import useAuth from "../../hooks/useAuth";
import NavBar from "../../components/AppBar";
import logocopbea from "../../image/copbea.png";
import logoprefeitura from "../../image/logo-prefeitura.png";
import cat from "../../image/cat.jpg";

const Login = () => {
  const { login } = useContext(AuthContext);
  //const { SetAuth } = useAuth();

  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const schema = yup
    .object({
      email: yup
        .string()
        .email("Digite um email válido")
        .required("Este campo é obrigatório"),
      senha: yup.string().required("Este campo é obrigatório"),
    })
    .required();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleOnSubmit = async () => {
    console.log("submit", { email, senha });
    login(email, senha); //integraçao com o context/API
    // const response = await postUser(email, senha)
    // const id = response?.data?.id;
    // const foto = response?.data.foto;
    // const accessToken = response?.data?.acessToken
    // SetAuth({email, id, fotoUsuario}) //
    // setEmail("")
    // setSenha("")
    // response && navigate(from, {replace: true});
  };

  return (
    <div className="limite">
      <div className="lim-login">
        <div className="wrap-login">
          <div className="login-img">
            <Carousel className="carousels" style={{ position: "relative" }}>
              <Carousel.Item>
                <img
                  src={logoprefeitura}
                  width="200px"
                  style={{
                    position: "absolute",
                    margin: "20px",
                    left: "250px",
                  }}
                />
                <img
                  src={logocopbea}
                  width="180px"
                  style={{ position: "absolute", margin: "20px" }}
                />
                <img className="d-block w-100" src={dogs} alt="First slide" />
                <Carousel.Caption>
                  <h3>Portal do Registro Geral Animal</h3>
                  {/* <p>
                   Informações Gerais
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src={logoprefeitura}
                  width="200px"
                  style={{
                    position: "absolute",
                    margin: "20px",
                    left: "250px",
                  }}
                />
                <img
                  src={logocopbea}
                  width="180px"
                  style={{ position: "absolute", margin: "20px" }}
                />
                <img className="d-block w-100" src={cat} alt="Second slide" />

                <Carousel.Caption>
                  <h4>Portal do Registro Geral Animal</h4>
                  {/* <p>
                    Informações Gerais
                  </p> */}
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="login-form">
            <h1 className="title">Login</h1>
            <form className="form" onSubmit={handleSubmit(handleOnSubmit)}>
              <div className="line">
                <input
                  {...register("email", { required: true })}
                  id="email"
                  name="email"
                  className="input"
                  type="text"
                  placeholder="Digite seu email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                {errors.email && <span>{errors.email?.message}</span>}
              </div>
              <div className="input-error">
                <input
                  {...register("senha", { required: true })}
                  id="password"
                  name="senha"
                  className="input"
                  type="password"
                  placeholder="Digite sua senha"
                  onChange={(e) => setSenha(e.target.value)}
                  value={senha}
                />
                {errors.senha && <span>{errors.senha?.message}</span>}
              </div>
              <Button style={{ width: "26rem" }} type="submit">
                Entrar
              </Button>
            </form>
            <div className="cadastro">
              <h5>ou</h5>
              <NavLink to="/cadastro" className="navlink">
                Ainda não é cadastrado? Clique aqui e cadastre-se{" "}
              </NavLink>
            </div>
          </div>
        </div>
        {/* <div className="login-img"></div> */}
      </div>
    </div>
  );
};

export default Login;
