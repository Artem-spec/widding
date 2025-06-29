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
            Для лучшей координации создан чат в телеграмме, где будет находиться
            необходимая информация. Но это еще не все! В чате создана тема "Сам
            Себе Фотограф", туда вы можете присылать свои фотографии. По
            секретным критериям будет выбран фотограф, который получит
            интересный приз.
          </p>
          <p>
            Вы можете добавиться в чат по{" "}
            <a href="https://t.me/+qRmAD0GGg_0xOTYy">
              ссылке на Telegram{" "}
              <img
                src="/widding/assets/img/tg.png"
                className={styles.tg}
                alt="tg"
              />
            </a>
          </p>
          <p>
            До места проведения мероприятия будет организован трансфер. Сбор
            гостей будет проходить по адресу ул. Авроры, 207 (Центральный
            автовокзал) в 15:30. Обратный трансфер запланирован на 23:30, до
            автовокзала. Просим заранее в теме "Трансфер" написать ФИО тех, кто
            планирует ехать на трансфере.
          </p>

          <p>
            Торжественная часть проходит по адресу:{" "}
            <u>Золотой Берег, База отдыха Бережок, 1</u>
          </p>
          <YMaps>
            <Map
              defaultState={{ center: [53.418252, 50.114108], zoom: 13 }}
              className={styles.map}
            >
              <Placemark defaultGeometry={[53.418252, 50.114108]} />
            </Map>
          </YMaps>
        </div>
      </Section>
    </Container>
  );
};
