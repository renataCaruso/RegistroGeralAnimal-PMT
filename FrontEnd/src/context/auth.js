import React, { useState, useEffect, createContext } from "react";

import { useNavigate } from "react-router-dom";
import api, { createSession} from "../service/api";
import { postUser } from "../service/axiosClient";


export const AuthContext = createContext();

//autoprovider é responsavel pelo contexto
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [petId, setPetId] = useState(null);

  useEffect(() => {
    const recoveredUser = localStorage.getItem("user");
    // const token = localStorage.getItem("token");           //API
    if (recoveredUser) { // (recoveredUser && token) pra API
      setUser(JSON.parse(recoveredUser));
      // api.defaults.headers.Authorization = `Bearer ${token}`     //API
    }
    setLoading(false);
  }, []);

  const login = async (email, senha) => {
    console.log("login auth", { email, senha });

                                    //API
    //const data = postUser(email, senha)
    //const response = await createSession(email, senha)

    //console.log(data)

    //api cria uma sessao
    //simulacao:

                                  //API
    // const loggedUser = response.data.user
    // const token = response.data.token

                                  //SEM API
    const loggedUser = {
      id: 1,
      email,
    };

    localStorage.setItem("user", JSON.stringify(loggedUser));
    // localStorage.setItem("token", token) //api

    // if (senha === "rga") {
      setUser(loggedUser); //mockado
      navigate("/menu");
    // } else {
    //   alert("Login falhou! Verifique se suas informações estão corretas.")
    // }

    // api.defaults.headers.Authorization = `Bearer ${token}` 

    //                       //verificação da api
      // setUser(loggedUser);
      // navigate("/menu");
    
  };

  const logout = () => {
    console.log("logout");
    localStorage.removeItem("user");
    // localStorage.removeItem("token");              //API

    // api.defaults.headers.Authorization = null;        //API

    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider
    //value={{auth, setAuth}}
      value={{ authenticated: !!user, user, loading, login, logout, petId, setPetId }}
    >
      {children}
    </AuthContext.Provider>
  );
};
