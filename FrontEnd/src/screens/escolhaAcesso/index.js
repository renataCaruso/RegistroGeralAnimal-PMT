import { flexbox } from "@mui/system";
import Button from "../../components/Button";
import Card from "react-bootstrap/Card";
import NavBar from "../../components/AppBar";
import paw from "../../image/paw-solid.svg";
import userIcon from "../../image/user-pen-solid.svg";
import searchIcon from "../../image/search-solid.svg";
import styles from "./styles.css";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/auth";

const EscolhaAcesso = () => {
  const navigate = useNavigate();


  return (
    <>
      <NavBar />
      <div
        className="container"
        style={{
          maxWidth: "100%",
          flex: "1",
        }}
      >
        <div className="row">
          <div className="line col sm-6 d-flex justify-content-end">
            <Card className="card">
              <Card.Img className="img-user" variant="top" src={userIcon} />
              <Card.Body>
                <Card.Title className="title">Perfil do Tutor</Card.Title>
                <Card.Text>
                  Opções de visualizar seu perfil e atualizar.
                </Card.Text>
                <Button
                  onClick={() => navigate("/perfil-tutor")}
                  variant="light"
                >
                  Acessar
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div className="line col sm-6 d-flex justify-content-start">
            <Card className="card">
              <Card.Img className="img" variant="top" src={paw} />
              <Card.Body>
                <Card.Title className="title">Perfil do Animal</Card.Title>
                <Card.Text>
                  Opções de cadastrar, visualizar, atualizar e baixar RGA.
                </Card.Text>
                <Button onClick={() => navigate("/home")} variant="light">
                  Acessar
                </Button>
              </Card.Body>
            </Card>
          </div>
          {/* <div className="line col sm-4 d-flex justify-content-center">
            <Card className="card">
              <Card.Img variant="top" src={searchIcon} className="img" />
              <Card.Body>
                <Card.Title className="title">Sistema de Buscas</Card.Title>
                <Card.Text>
                  Buscar pelo CPF do tutor ou buscar por RGA do animal.
                </Card.Text>
                <Button variant="light">Acessar</Button>
              </Card.Body>
            </Card>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default EscolhaAcesso;
