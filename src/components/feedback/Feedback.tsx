import { Container } from "react-bootstrap";
import { IdsNav } from "../../constants";
import { Section } from "../common";

export const Feedback = () => {
  return (
    <Container>
      <Section id={IdsNav.FEEDBACK}>
        <h2>Обратная связь</h2>
      </Section>
    </Container>
  );
};
