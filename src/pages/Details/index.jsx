import { Container } from "./styles.js";
import { Button } from "../../components/button/index.jsx";
import { Header } from "../../components/header/index.jsx";

export function Details() {
  return (
    <Container>
      <Header />
      <Button title="Voltar"/>
    </Container>
  );
}
