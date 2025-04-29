import { Container } from "react-bootstrap";

import { IdsNav } from "../../constants";
import { Section } from "../common";

import styles from "./additional.module.css";

export const Additional = () => {
  return (
    <Container>
      <Section id={IdsNav.ADDITIONAL} className={styles.section}>
        <div className={styles.additional}>
          <h2>Дополнительная информация</h2>
          <p>
            Мы просим Вас не дарить цветы, после торжества мы сразу уезжаем в
            долгожданное путешествие и мы не успеем насладиться этой красотой.
            Поэтому приятным комплиментом для нас будет, если вместо цветов вы
            решите подарить нам лотерейные билеты или бутылочку вашего любимого
            алкоголя в наш домашний мини-бар.
          </p>
        </div>
      </Section>
    </Container>
  );
};
