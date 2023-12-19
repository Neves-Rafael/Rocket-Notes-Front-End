import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine} from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/Neves-Rafael.png" alt="User Photo" />
        <div>
            <span>Welcome</span>
            <strong>Rafael Neves</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
