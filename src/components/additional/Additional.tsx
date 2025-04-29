import { Container } from "react-bootstrap";
import { Map, Placemark, YMaps } from "@pbe/react-yandex-maps";

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
          <div className={styles.icon}>
            <img
              src="/widding/assets/img/tickets.png"
              alt="Билеты"
              className={styles.tickets}
            />
            <img
              src="/widding/assets/img/bottle.png"
              alt="Алгоколь"
              className={styles.bottle}
            />
          </div>
          <br/>
          <p>
            Торжественная часть проходит по адресу:{" "}
            <u>Золотой Берег, База отдыха Бережок, 1</u>
          </p>
          <YMaps>  
              <Map defaultState={{ center: [53.418252, 50.114108], zoom: 13 }} className={styles.map}>
                <Placemark defaultGeometry={[53.418252, 50.114108]} />
              </Map>
          </YMaps>
        </div> 
      </Section>
    </Container>
  );
};
