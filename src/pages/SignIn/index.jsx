import { FiMail, FiLock} from "react-icons/fi";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button} from "../../components/Button";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application for save and manage your links!</p>
        <h2>Make your login</h2>

        <Input placeholder="E-mail" type="text" icon={FiMail}/>
        <Input placeholder="Password" type="password" icon={FiLock}/>
        <Button title="Login"/>

        <a href="">
            Sign Up
        </a>

      </Form>
      <Background/>
    </Container>
  );
}
