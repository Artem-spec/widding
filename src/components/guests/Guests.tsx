import { Col, Container, Row } from "react-bootstrap";

import {
  GuestsArray,
  IdsNav,
  NUMBER_OF_GUESTS_IN_COL,
  NUMBER_OF_GUESTS_REMAINDER,
} from "../../constants";
import { Section } from "../common";

import styles from "./guests.module.css";

export const Guests = () => {
  const colItems: {
    first: string[];
    second: string[];
  } = {
    first: [],
    second: [],
  };
  GuestsArray.forEach((value, index) => {
    if (
      index <=
      (NUMBER_OF_GUESTS_REMAINDER === 1
        ? NUMBER_OF_GUESTS_IN_COL
        : NUMBER_OF_GUESTS_IN_COL - 1)
    ) {
      colItems.first.push(value);
      return;
    }
    colItems.second.push(value);
  });

  return (
    <Container>
      <Section id={IdsNav.GUESTS}>
        <div className={styles.guest}>
          <h2>Гости</h2>

          <Row>
            <Col xl={6} md={6} xs={12}>
              <div className={styles.guestsItemsWrap}>
                {colItems.first.map((value) => (
                  <div className={styles.guestsItem}>{value}</div>
                ))}
              </div>
            </Col>
            <Col xl={6} md={6} xs={12}>
              <div className={styles.guestsItemsWrap}>
                {colItems.second.map((value) => (
                  <div className={styles.guestsItem}>{value}</div>
                ))}
              </div>
            </Col>
          </Row>
        </div>
      </Section>
    </Container>
  );
};
