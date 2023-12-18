import { Container, Links } from "./styles.js";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />
      <ButtonText title="Excluir nota" />

      <Section title="Links úteis">
        <Links>
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="Tranquilo" />
        <Tag title="Importante" />
        <Tag title="Urgente" />
      </Section>

      <Button title="Back" />
    </Container>
  );
}
