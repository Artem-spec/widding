import { Container } from "react-bootstrap";

import { IdsNav } from "../../constants";
import { Section } from "../common";

import styles from "./dressCode.module.css";

export const DressCode = () => {
  return (
    <Container>
      <Section id={IdsNav.DRESS_CODE} className={styles.section}>
        <div className={styles.dressCode}>
          <h2>Дресс-код</h2>
          <p>
            Будем признательны, если вы поддержите цветовую гамму нашей свадьбы.
          </p>
          <p>Для девушек - платья или костюмы в цветовой гамме:</p>
          <div className={styles.palette}>
            <div
              className={styles.color}
              style={{ backgroundColor: "#728ea4" }}
            ></div>
            <div
              className={styles.color}
              style={{ backgroundColor: "#94b7d3" }}
            ></div>
            <div
              className={styles.color}
              style={{ backgroundColor: "#688277" }}
            ></div>
            <div
              className={styles.color}
              style={{ backgroundColor: "#a1bca9" }}
            ></div>
            <div
              className={styles.color}
              style={{ backgroundColor: "#f8f7f3" }}
            ></div>
            <div
              className={styles.color}
              style={{ backgroundColor: "#f6e2e1" }}
            ></div>
            <div
              className={styles.color}
              style={{ backgroundColor: "#ddbebb" }}
            ></div>
          </div>
          <p>
            Для мужчин - черные костюмы(брюки) и рубашка белая / в цветовой
            гамме
          </p>
          <img src="/public/assets/img/costume.png" alt="costume" />
        </div>
      </Section>
    </Container>
  );
};
