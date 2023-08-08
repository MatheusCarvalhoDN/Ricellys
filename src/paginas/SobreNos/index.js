import PostModelo from "componentes/PostModelo";
import React from "react";
import fotoCapa from "assets/pizza.png";
import styles from './SobreMim.module.css'
import fotoSobreMim from "assets/pizza.png"

export default function NossaHistoria() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Nossa história">
      <h3 className={styles.subtitulo}>
        Somos a pizzaria Ricellys
      </h3>

      <img src={fotoSobreMim} alt="Foto do Matheus" className={styles.fotoSobreMim} />
      
      <p className={styles.paragrafo}>
      Nossa pizzaria é localizada na cidade de Itororó-BA
      </p>
      
      <p className={styles.paragrafo}>
      ...
      </p>
      
      <p className={styles.paragrafo}>
      ...
      </p>
      
      <p className={styles.paragrafo}>
      ... 
      </p>
      
      <p className={styles.paragrafo}>
      ...
      </p>
      
    </PostModelo>
  )
}





 


