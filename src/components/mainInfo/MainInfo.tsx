import { Container } from "react-bootstrap";
import classNames from "classnames";

import { Menu } from "./menu";

import styles from "./mainInfo.module.css";

export const MainInfo = () => {
  return (
    <>
      <Menu />
      <Container>
        <div className={classNames(styles.content, styles.main)}>
          <h2>Артём & Виктория</h2>
          <h3>13.09.2025</h3>
          <div className={styles.photos}>
            <img
              src="/widding/assets/img/1.1.png"
              alt="Фото Артёма"
              className={styles.photoMen}
            />
            <img
              src="/widding/assets/img/2.3.png"
              alt="Фото Виктории"
              className={styles.photoWomen}
            />
          </div>
        </div>
      </Container>
    </>
  );
};
