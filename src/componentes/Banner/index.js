import React from "react";
import styles from "./Banner.module.css";
import logoRicellys from "../../assets/LogoRicellys.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Pizzaria Ricellys</h1>

        <p className={styles.paragrafo}>Dando mais sabor a sua vida!</p>

        <p className={styles.paragrafo}>
          Ricellys é uma pizzaria localizada na cidade de Itororó-BA, atualmente
          trabalhamos com os serviços de retirada em loja e delivery.
        </p>

        <p className={styles.paragrafo}>Horário de funcionamento:</p>

        <p className={styles.horario}>Domingo: 17:00 - 23:30</p>
        <p className={styles.horario}>Segunda-feira: 17:00 - 23:00</p>
        <p className={styles.horario}>Terça-feira: 17:00 - 23:00</p>
        <p className={styles.horario}>Quarta-feira: Fechado</p>
        <p className={styles.horario}>Quinta-feira: 17:00 - 23:00</p>
        <p className={styles.horario}>Sexta-feira: 17:00 - 23:00</p>
        <p className={styles.horario}>Sábado: 17:00 - 23:30</p>
      </div>

      <div className={styles.imagens}>
        <img
          className={styles.logoRicellys}
          src={logoRicellys}
          aria-hidden={true}
          alt="Circulo colorido"
        />
      </div>
    </div>
  );
}
