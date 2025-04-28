import { Container } from "react-bootstrap";

import { Section } from "../common";

import styles from "./about.module.css";

export const About = () => {
  return (
    <Container>
      <Section className={styles.section}>
        <div className={styles.about}>
          <div className={styles.mainContent}>
            <p>
              Мы решили написать свою историю «жили долго и счастливо», и именно
              поэтому нам так важно оказаться в окружении самых близких и
              дорогих людей. С огромной радостью приглашаем вас разделить с нами
              этот волнующий и незабываемый день - день нашей свадьбы!
            </p>
            <div className={styles.imageWrap}>
              <img
                src={"public/old_people.png"}
                alt="Old people"
                className={styles.image}
              />
            </div>
          </div>

          <p>
            *** P.s. 13 сентября 2025 года, успейте! Данная программа доступна к
            просмотру только один раз!
          </p>
        </div>
      </Section>
    </Container>
  );
};
