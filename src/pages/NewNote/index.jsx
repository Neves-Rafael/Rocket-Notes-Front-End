import { useState } from "react";
import { Link } from "react-router-dom";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function NewNote() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

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
            {links.map((link, index) => {
              return (
                <NoteItem key={String(index)} value={link} onClick={() => {}} />
              );
            })}

            <NoteItem
              $isnew
              placeholder="New link"
              value={newLink}
              onChange={(e) => setNewLink(e.target.value)}
              onClick={handleAddLink}
            />
          </Section>

          <Section title="Tags">
            <div className="tags">
              <NoteItem value="React" />
              <NoteItem $isnew placeholder="New tag" />
            </div>
          </Section>
          <Button title="Save" />
        </Form>
      </main>
    </Container>
  );
}
