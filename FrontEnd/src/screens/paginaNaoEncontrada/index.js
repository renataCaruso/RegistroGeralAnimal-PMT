import styles from "./styles.css";
import catdog from "../../image/catdog.jpg";
import Button from "./../../components/Button/index";
import { useNavigate } from "react-router";

const PaginaNaoEncontrada = () => {
  const navigate = useNavigate();

  return (
    <>
      <div class="container cont">
        <div class="content">
          <div class="imagem">
            <img src={catdog} alt="gato e cachorro" />
          </div>
          <div class="descricao">
            <h1>Página não encontrada</h1>
            <Button onClick={() => navigate("/login")}>
              Acessar o Portal do Registro Geral Animal
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaginaNaoEncontrada;
