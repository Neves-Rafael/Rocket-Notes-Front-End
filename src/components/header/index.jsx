import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();


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
        <RiShutDownLine onClick={signOut}/>
      </Logout>
    </Container>
  );
}
