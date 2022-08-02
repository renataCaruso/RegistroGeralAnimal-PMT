import styles from "./styles.css";
import catdog from "../../image/catdog.jpg";
// import { useNavigate } from "react-router";
import Button from "./../../components/Button/index";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ConfirmacaoEmail = () => {
   const navigate = useNavigate();

  return (
    <>
      <div class="container cont">
        <div class="content">
          <div class="imagem">
            <img src={catdog} alt="gato e cachorro" />
          </div>
          <div class="descricao">
            <h1>Email confirmado com sucesso!</h1>
            <Button onClick={() => navigate("/login")}>Login</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmacaoEmail;
