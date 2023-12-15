import { Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/Neves-Rafael.png" alt="User Photo" />
        <div>
            <span>Welcome</span>
            <strong>Rafael Neves</strong>
        </div>
      </Profile>
    </Container>
  );
}
