import { Container } from "react-bootstrap";

import { IdsNav } from "../../constants";
import { Section } from "../common";

import styles from "./schedule.module.css";

export const Schedule = () => {
  return (
    <Container>
      <Section id={IdsNav.SCHEDULE} className={styles.schedule}>
        <h2>Расписание дня</h2>
        <div className={styles.diagram}>
          <div className={styles.icons}>
            <img
              src="public/assets/img/champagne.png"
              alt="Шампанское"
              className={styles.weddingIcon}
            />
            <img
              src="public/assets/img/rings.png"
              alt="Кольца"
              className={styles.buffetIcon}
            />
            <img
              src="public/assets/img/cutlery.png"
              alt="Вилка, ложка"
              className={styles.holidayIcon}
            />
            <img
              src="public/assets/img/cake.png"
              alt="Торт"
              className={styles.totalIcon}
            />
          </div>
          <div className={styles.verticalLine}>
            <div className={styles.weddingPoint}></div>
            <div className={styles.buffetPoint}></div>
            <div className={styles.holidayPoint}></div>
            <div className={styles.totalPoint}></div>
          </div>
          <div className={styles.description}>
            <div className={styles.weddingDescription}>
              <p className={styles.time}>14:20</p>
              <p>Торжественная регистрация</p>
              <p>Дворец, бракосочетания ул. Молодогвардейская, 238</p>
            </div>
            <div className={styles.buffetDescription}>
              <p className={styles.time}>16:00</p>
              <p>Сбор гостей, фуршет</p>
              <p>Золотой Берег, База отдыха Бережок, 1</p>
            </div>
            <div className={styles.holidayDescription}>
              <p className={styles.time}>17:00</p>
              <p>Праздничный банкет</p>
            </div>
            <div className={styles.totalDescription}>
              <p>Финальная точка вечера (торт)</p>
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
};
