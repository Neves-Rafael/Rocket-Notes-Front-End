import { Container, Form } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
  return (
    <Container>
      <header>
        <a href="/">
          <FiArrowLeft />
        </a>
      </header>

<Form>
    <Input placeholder="Name" type="text" icon={FiUser}/>
    <Input placeholder="E-mail" type="text" icon={FiMail}/>
    <Input placeholder="Actual Password" type="password" icon={FiLock}/>
    <Input placeholder="New Password" type="password" icon={FiLock}/>
    <Button title="Update"></Button>

</Form>

    </Container>
  );
}
