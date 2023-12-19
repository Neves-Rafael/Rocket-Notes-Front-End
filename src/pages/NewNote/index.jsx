import { Link } from "react-router-dom";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function NewNote() {
  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <Link to="/">Back</Link>
          </header>

          <Input placeholder="Title" />
          <Textarea placeholder="Observations" />
          <Section title="Utils Links">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="New link" />
          </Section>

          <Section title="Tags">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem isNew placeholder="New tag" />
            </div>
          </Section>
          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}
