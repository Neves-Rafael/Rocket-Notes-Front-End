import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Container, Form, Background } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
  return (
    <Container>
      <Background />
      <Form>
        <h1>Rocket Notes</h1>
        <p>Application for save and manage your links!</p>
        <h2>Create your account!</h2>

        <Input placeholder="Username" type="text" icon={FiUser} />
        <Input placeholder="E-mail" type="text" icon={FiMail} />
        <Input placeholder="Password" type="password" icon={FiLock} />
        <Button title="Register" />

        <a href="">Back To Login</a>
      </Form>
    </Container>
  );
}
