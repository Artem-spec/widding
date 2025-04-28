import { Container } from "react-bootstrap";
import { Menu } from "./menu";

import styles from "./mainInfo.module.css";

export const MainInfo = () => {
  return (
    <>
      <Menu />
      <Container>
        <div className={styles.content}>
          <h2>Артём & Виктория</h2>
          <h3>13.09.2025</h3>
        </div>
      </Container>
    </>
  );
};
