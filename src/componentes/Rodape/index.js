import styles from "./Rodape.module.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";

export default function Rodape() {
  const redirectToInstagram = () => {
    window.open("https://www.instagram.com/pizzariaricellys/?hl=pt", "_blank");
  };

  const redirectToFacebook = () => {
    window.open("https://www.facebook.com/PizzariaRicellys/?locale=pt_BR", "_blank");
  };

  const redirectToWhatsapp = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=5573998524222&text=%F0%9F%91%8B%20Ol%C3%A1%2C%20venho%20de%20https%3A%2F%2Fpizzaria-ricellys.ola.click%2F%20%0AEu%20quero%20fazer%20o%20pr%C3%B3ximo%20pedido%3A%0A",
      "_blank"
    );
  };

  return (
    <footer className={styles.rodape}>
      <a
        className={styles.pedido}
        href="https://pizzaria-ricellys.ola.click/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Faça seu pedido
      </a>

      <img
        className={styles.redes}
        src={instagram}
        alt="Instagram Ricellys"
        onClick={redirectToInstagram}
      />

      <img
        className={styles.redes}
        src={facebook}
        alt="Facebook Ricellys"
        onClick={redirectToFacebook}
      />

      <img
        className={styles.redes}
        src={whatsapp}
        alt="Whatsapp Ricellys"
        onClick={redirectToWhatsapp}
      />

      <p className={styles.dev}>Designed by Matheus Carvalho</p>
    </footer>
  );
}
