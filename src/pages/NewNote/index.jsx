import { useState } from "react";

import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function NewNote() {
  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleBack(){
    navigate(-1)
  }

  function handleAddLink() {
    setLinks((prevState) => [...prevState, newLink]);
    setNewLink("");
  }

  function handleRemoveLink(deleted) {
    setLinks((prevState) => prevState.filter((link) => link !== deleted));
  }

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewNote() {
    if (!title) {
      alert("Por favor , insira um titulo para a sua nota!");
      return
    }

    if (newLink) {
      alert(
        "Existe um link no note que ainda não foi adicionado. Por favor, adicione todos os links."
      );
      return
    }

    if (newTag) {
      alert(
        "Existe uma tag no note que ainda não foi adicionada. Por favor, adicione todas as tags."
      );
      return
    }

    if(links.length === 0) {
      alert("Você está adicionando sem nenhum link!")
      setLinks([""]);
      return
    }

    if(tags.length === 0) {
      alert("você está adicionando nenhuma tag!")
      setTags([""]);
      return
    }

    await api.post("/notes", {
      title,
      description,
      tags,
      links,
    });

    alert("Note created successfully");
    navigate(-1);
  }

  return (
    <Container>
      <Header />
      <main>
        <Form>
          <header>
            <h1>Create Note</h1>
            <ButtonText title="voltar" onClick={handleBack} />
          </header>

          <Input
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
          <Textarea
            placeholder="Observations"
            onChange={(e) => setDescription(e.target.value)}
          />

          <Section title="Utils Links">
            {links.map((link, index) => {
              return (
                <NoteItem
                  key={String(index)}
                  value={link}
                  onClick={() => {
                    handleRemoveLink(link);
                  }}
                />
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
              {tags.map((tag, index) => {
                return (
                  <NoteItem
                    key={String(index)}
                    value={tag}
                    onClick={() => {
                      handleRemoveTag(tag);
                    }}
                  />
                );
              })}

              <NoteItem
                $isnew
                placeholder="New tag"
                onChange={(e) => setNewTag(e.target.value)}
                onClick={handleAddTag}
                value={newTag}
              />
            </div>
          </Section>
          <Button title="Save" onClick={() => handleNewNote()} />
        </Form>
      </main>
    </Container>
  );
}
