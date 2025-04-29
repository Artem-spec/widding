import { Container } from "react-bootstrap";

import { IdsNav } from "../../constants";
import { Section } from "../common";

import styles from "./feedback.module.css";

export const Feedback = () => {
  return (
    <Container>
      <Section id={IdsNav.FEEDBACK} className={styles.section}>
        <div className={styles.feedback}>
          <h2>Обратная связь</h2>
          <p>
            Мы будем рады видеть Вас на нашей свадьбе! Каждый приглашенный
            человек сыграл важную роль в нашей жизни. Мы хотели, чтобы вы
            разделили с нами это радостное событие! Если у вас не получается,
            случился форс-мажор - напишите нам, пожалуйста.
          </p>
          <div className={styles.contact}>
            Артем
            <a href={"https://t.me/artgrinblat"}>
              <img src="/widding/assets/img/tg.png" alt="tg" />
            </a>
          </div>
          <div className={styles.contact}>
            Виктория
            <a href={"https://t.me/vika6174"}>
              <img src="/widding/assets/img/tg.png" alt="tg" />
            </a>
          </div>
          <div className={styles.gameover}>
            <img
              src="/widding/assets/img/gameover.png"
              className={styles.gameoverImg}
            />
          </div>
        </div>
      </Section>
    </Container>
  );
};
