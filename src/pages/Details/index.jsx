import { Container, Links } from "./styles.js";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Links úteis">
        <Links>
          <li></li>
          <li></li>
          <li></li>
        </Links>
      </Section>
      <Button title="Back" />
    </Container>
  );
}
