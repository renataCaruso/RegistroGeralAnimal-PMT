import api from "./api";

export const getUsuario = async () => {
  const { data } = await api.get("usuario/lista");
  return data;
};

export const getUsuarioId = async (id) => {
  const { data } = await api.get(`usuario/buscar-por-id/${id}`);
  //  const { data } = await api.get(`usuarios/${id}`);
  return data;
};

export const getUserEmail = async (email) => {
  const { data } = await api.get(`usuario/buscar-por-email/${email}`);
  return data;
};

export const postUsuario = async (usuario) => {
  try {
    const { data } = await api.post("usuario/salvar", usuario);
    //const { data } = await api.post("usuarios", usuario);
    return data;
  } catch (err) {
    if (!err?.response) {
      alert("Sem resposta do Servidor");
    } else if (err.response?.status === 400) {
      alert("Nome ou senha não encontrados");
    } else if (err.response?.status === 401) {
      alert("Não Autorizado");
    } else {
      alert("Cadastro Falhou");
    }
  }
};

export const putUsuario = async (id, usuario) => {
  try {
    const { data } = await api.put(`usuario/atualizar/${id}`, usuario);
    return data;
  } catch (e) {
    alert("Erro!");
  }
};

export const postPet = async (animal) => {
  try {
    const { data } = await api.post("animal/salvar", animal);
    // const { data } = await api.post("pets", animal);
    return data;
  } catch (e) {
    alert("Erro!");
  }
};

export const putPet = async (id, animal) => {
  try {
    const { data } = await api.put(`animal/atualizar/${id}`, animal);
    // const { data } = await api.put(`pets/${id}`, animal);
    return data;
  } catch (e) {
    alert("Erro!");
  }
};

export const getPet = async () => {
  try {
    const { data } = await api.get("animal/lista");
    // const { data } = await api.get("pets");
    return data;
  } catch (e) {
    alert("Erro!");
  }
};

export const getPetId = async (id) => {
  try {
    const { data } = await api.get(`animal/buscar/${id}`);
    // const { data } = await api.get(`pets/${id}`);
    return data;
  } catch (e) {
    alert("Erro!");
  }
};

export const getPetIdUsuario = async (id) => {
  try {
    const { data } = await api.get(`animal/listarAnimais/${id}`);
    return data;
  } catch (e) {
    alert("Erro!");
  }
};

export const postUser = async (email, senha) => {
  try {
    const { data } = await api.post("/login", {
      email: email,
      senha: senha,
    });
    api.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
    return data;
  } catch (err) {
    if (!err?.response) {
      alert("Sem resposta do Servidor");
    } else if (err.response?.status === 400) {
      alert("Nome ou senha não encontrados");
    } else if (err.response?.status === 401) {
      alert("Não Autorizado");
    } else {
      alert("Login Falhou");
    }
  }
};

export const getBusca = async (rga) => {
  try {
    const { data } = await api.get(`animal/filtro/${rga}`);
    return data;
  } catch (e) {
    alert("Erro!");
  }
};
