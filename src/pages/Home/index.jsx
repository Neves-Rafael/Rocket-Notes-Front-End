import { FiPlus, FiSearch } from "react-icons/fi";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { ButtonText } from "../../components/ButtonText";

export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>
      <Header/>
      <Menu>
        <li>
          <ButtonText title="All" $isactive={true} />
        </li>
        <li>
          <ButtonText title="React" />
        </li>
        <li>
          <ButtonText title="NodeJs" />
        </li>
        <li>
          <ButtonText title="Vue" />
        </li>
        <li>
          <ButtonText title="Angular" />
        </li>
      </Menu>
      <Search>
        <Input placeholder="Search" icon={FiSearch}/>
      </Search>
      <Content></Content>
      <NewNote>
        <FiPlus/>
        New Note
      </NewNote>
    </Container>
  );
}
