import styles from "./styles.css";
import fotopet from "../../image/dog.jpg";
import qrcode from "../../image/qrcode-prefeitura.png";
import Coleira from "../coleira";

const Carteirinha = () => {
  return (
    <div className="centered">
      <div className="cont-rga">
        <div className="content-carteirinha">
          <div className="campoesquerdo centered">
            <div className="nomeTutor">Nome do tutor: André Souza</div>
            <div className="nomePet">Nome do pet: Billy </div>
            <div className="EspecieSexo">
              <div className="especie">Espécie: Canina</div>
              <div className="sexo">Sexo: M</div>
            </div>
            <div className="ContentQRCode">
              <div className="raca">Raça: Sem raça definida</div>
              <div className="dtnascimento">Nascimento: 28/11/2020</div>
              <div className="dtvacinaRabica">15/02/2022</div>
              <div className="dtvacinaViral">29/08/2021</div>
              <img className="qrcode" src={qrcode} />
            </div>
          </div>
          <div className="campodireito">
            <img className="foto" src={fotopet} />
            <div className="rga">RGA: 2022070001</div>
            <div className="chip">CHIP: 0976543268</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carteirinha;
