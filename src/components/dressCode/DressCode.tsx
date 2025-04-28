import { Container } from "react-bootstrap";

import { IdsNav } from "../../constants";
import { Section } from "../common";

import styles from "./dressCode.module.css";

export const DressCode = () => {
  return (
    <Container>
      <Section id={IdsNav.DRESS_CODE} className={styles.section}>
        <h2>Дресс-код</h2>
        <p>
          Будем признательны, если вы поддержите цветовую гамму нашей свадьбы
        </p>
        <p>
          Для девушек - платья/ костюмы в цветовой гамме Для мужчин - черные
          костюмы и рубашка белая/ в цветовой гамме
        </p>
      </Section>
    </Container>
  );
};
