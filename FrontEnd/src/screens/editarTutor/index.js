import { useState, useEffect } from "react";
import { getUsuarioId, putUsuario } from "../../service/axiosClient";
import "./styles.css";
import NavBar from "./../../components/AppBar/index";
import { useNavigate } from "react-router";

const EditarTutor = () => {
  const [usuario, setUsuario] = useState({});
  const [telefone, setTelefone] = useState("");
  const [celular, setCelular] = useState("");
  const [whatsapp, setWhatsapp] = useState(false);
  const [Loading, setLoading] = useState(false);

  // const navigate = useNavigate();

  useEffect(() => {
    const get = async (id) => {
      setLoading(true);
      const data = await getUsuarioId(6);
      setUsuario(data);
      settarUsuario(data);
      setLoading(false);
    };
    get();
  }, []);

  const editarUsuario = async () => {
    const usuarioEditado = {
      telefone: telefone,
      celular: celular,
      whatsapp: whatsapp,
    };

    putUsuario(6, usuarioEditado);

    alert("Informações atualizadas com sucesso");
  };

  const settarUsuario = (usuario) => {
    setTelefone(usuario.telefone);
    setCelular(usuario.celular);
    setWhatsapp(usuario.whatsapp);
  };

  return (
    <div id="allpage">
      <NavBar />
      <div className="container">
        <div className="row d-flex justify-content-center">
          {!Loading ? (
            <h2
              className="col-sm-7 d-flex justify-content-center mt-5"
              id="usuarioInfo"
            >
              Atualize seu contato
            </h2>
          ) : (
            <h2
              className="col-sm-7 d-flex justify-content-center mt-5"
              id="usuarioInfo"
            >
              ...Carregando
            </h2>
          )}
        </div>
        <div className="row" id="usuarioBox">
          <div className="col-sm-12">
            <div>
              <form onSubmit={editarUsuario} className="row">
                <div className="row">
                  <label className="line col-sm-6">
                    Celular*
                    <input
                      type="text"
                      autoComplete="off"
                      className="form-control"
                      placeholder="(DDD) 00000-0000"
                      value={celular}
                      onChange={(e) => setCelular(e.target.value)}
                    />
                    <br></br>
                    <input
                      type="checkbox"
                      id="agree"
                      onChange={() => setWhatsapp(!whatsapp)}
                    />
                    Esse número também é utilizado como Whatsapp
                  </label>

                  <label className="line col-sm-6">
                    {" "}
                    Telefone
                    <input
                      type="text"
                      autoComplete="off"
                      className="form-control"
                      placeholder="(DDD) 0000-0000"
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                    />
                  </label>

                  <div className="row">
                    <div className="line col-sm-10 d-flex justify-content-end mt-30 mb-5 ">
                      <button
                        type="button"
                        className="botao btn-outline-danger ms-3"
                        // onClick={() => navigate("/home")}
                      >
                        Cancelar
                      </button>
                      <button type="submit" className="btn btn-success">
                        Cadastrar
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
  );
};

export default EditarTutor;
