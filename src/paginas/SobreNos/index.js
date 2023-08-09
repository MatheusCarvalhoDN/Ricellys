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
      Está pronto para uma experiência gastronômica que vai transformar suas refeições em momentos de pura alegria? Bem-vindo à Ricellys, onde a arte da pizza ganha vida e é entregue diretamente na sua porta!
      </p>
      
      <p className={styles.paragrafo}>
      Feche os olhos e imagine abrir uma caixa quentinha e perfumada, revelando uma pizza perfeitamente preparada, com queijo derretendo e ingredientes frescos que fazem sua boca se encher d'água. Na Ricellys, cada pizza é uma promessa cumprida de sabor e qualidade excepcionais.
      </p>
      
      <p className={styles.paragrafo}>
      Nossas pizzas são meticulosamente montadas por nossos talentosos pizzaiolos, que combinam maestria e criatividade para criar uma seleção variada de sabores que se destacam em meio a qualquer multidão de pizzas. Cada pedaço é um convite para explorar uma explosão de texturas e gostos, deixando você ansioso pela próxima mordida antes mesmo de terminar a primeira.
      </p>
      
      <p className={styles.paragrafo}>
      E a melhor parte? A Ricellys traz esse sabor incomparável diretamente até você, com nosso serviço de delivery rápido e eficiente. Basta fazer seu pedido e aguardar, porque estamos comprometidos em entregar a frescura e a delícia da nossa pizza até a sua porta, quentinha e pronta para ser devorada.
      </p>


      <p className={styles.paragrafo}>
      Se você é um amante de pizza que aprecia a combinação perfeita entre tradição e inovação, a Ricellys é o seu novo destino culinário. Não importa se é um jantar descontraído em casa, um encontro com amigos ou um deleite solo - nossa pizza é a garantia de que você está saboreando algo verdadeiramente especial.
      </p>

      <p className={styles.paragrafo}>
      Então, por que esperar para satisfazer seus desejos? Peça agora mesmo a sua pizza da Ricellys e permita-se ser transportado para um mundo de sabor que é tão conveniente quanto irresistível. Um mundo onde cada mordida é um pedaço de felicidade que você merece.
      </p>

      
    </PostModelo>
  )
}





 


