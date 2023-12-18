import { Container, Links, Content } from "./styles.js";
import { Button } from "../../components/Button/index.jsx";
import { Header } from "../../components/Header/index.jsx";
import { Section } from "../../components/Section/index.jsx";
import { ButtonText } from "../../components/ButtonText/index.jsx";
import { Tag } from "../../components/Tag/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir nota" />

          <h1>Introduction to React</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            dicta odit commodi natus atque, perspiciatis ut enim reprehenderit
            doloremque voluptate maxime ad dolorum nisi ratione sunt quibusdam
            pariatur blanditiis cum.
          </p>

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
        </Content>
      </main>
    </Container>
  );
}
