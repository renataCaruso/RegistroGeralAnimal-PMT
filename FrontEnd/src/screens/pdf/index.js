import Carteirinha from "../carteirinha";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Button from "../../components/Button";
import NavBar from "./../../components/AppBar/index";
import styles from "./styles.css";
import { height, width } from "@mui/system";
import { useNavigate } from "react-router";
import Coleira from "../coleira";

const CarteirinhaPDF = () => {
  const navigate = useNavigate();

  const exportPDF = () => {
    const input = document.getElementById("RGA");
    html2canvas(input, {
      logging: true,
      letterRendering: 2,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 350;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", -70, 0, imgWidth, imgHeight);
      pdf.save("RGA.pdf");
    });
  };

  return (
    <div>
      <NavBar />
      <header id="RGA">
        <Carteirinha />
        <Coleira/>
      </header>
      <div className="button-centered">
        <div className="row">
          <div className="line col-sm-10 d-flex justify-content-end mt-30 mb-5 ">
            <button
              type="submit"
              className="btn btn-success"
              onClick={() => exportPDF()}
            >
              Download
            </button>
            <button
              type="button"
              className="botao btn-outline-danger ms-3"
              onClick={() => navigate("/home")}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarteirinhaPDF;
