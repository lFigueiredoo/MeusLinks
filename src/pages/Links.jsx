import styles from "./Links.module.css";
import Link from "../components/Link";
import Instagram from "../assets/images/instagram.svg";
import github from "../assets/images/github.svg";
import Whatsapp from "../assets/images/Whatsapp.svg";
import Linkedin from "../assets/images/linkedin.svg";
import Email from "../assets/images/Email.svg";
import Eu from "../assets/images/Eu.png";
import pdf from "../assets/Luiz-CV.pdf";

export function Links() {
  return (
    <main>
      <div className={styles.Container}>
        <div className={styles.ContainerFoto}>
          <img src={Eu} alt="" />
        </div>
        <h1 className={styles.typing}>Front-End Developer</h1>
        <div className={styles.ContainerRedes}>
          <Link
            href="https://www.instagram.com/luizc.f.c/"
            target="_blank"
            rel="noopener noreferrer"
            img={Instagram}
          />
          <Link
            href="https://www.linkedin.com/in/figueiredo-luiz/"
            target="_blank"
            rel="noopener noreferrer"
            img={Linkedin}
          />
          <Link
            href="https://github.com/LuizCFigueiredo"
            target="_blank"
            rel="noopener noreferrer"
            img={github}
          />
          <Link
            href="https://contate.me/luizdev"
            target="_blank"
            rel="noopener noreferrer"
            img={Whatsapp}
          />
          <Link
            href="mailto:figueiredocabralluizcarlos@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            img={Email}
          />
        </div>
        <div className={styles.ContainerLinks}>
          <a
            href="https://lfigueiredo.netlify.app"
            target="_blank"
            className={styles.Btn}
          >
            <span>Portfólio </span>
          </a>
          <a
            href="https://meutempolocal.netlify.app"
            target="_blank"
            className={styles.Btn}
          >
            <span>Tempo Local</span>
          </a>
          <a href={pdf} target="_blank" className={styles.Btn}>
            <span>CV</span>
          </a>
          <a
            href="https://diaprodutivo.netlify.app"
            target="_blank"
            className={styles.Btn}
          >
            <span>Dia Produtivo (Organize suas tarefas do dia)</span>
          </a>
        </div>
        <small className={styles.name}>@lFigueiredo</small>
      </div>
    </main>
  );
}
