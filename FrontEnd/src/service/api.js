import axios from "axios";

const api = axios.create({
  // baseURL: "https://62b3247d4f851f87f455416d.mockapi.io/api/",
  baseURL: "http://169.57.150.59:8012/"
  
});

export const createSession = async (email, senha) => {
  try{
    return api.post('/login', {email, senha})
  } catch (e) {
    alert('Login falhou! Por favor, verifique suas informações')
  }
}


export default api;

