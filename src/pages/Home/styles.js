import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 25rem auto;
  grid-template-rows: 10.5rem 12.8rem auto 6.4rem;
  grid-template-areas: "brand header" "menu search" "menu content" "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  grid-area: "brand";
  background-color: antiquewhite;
`; 

export const Menu = styled.div`
  grid-area: "menu";
  background-color: aquamarine;
`;

export const Search = styled.div`
  grid-area: "search";
  background-color: violet;
`;

export const Content = styled.div`
  grid-area: "content";
  background-color: coral;
`;

export const NewNote = styled.div`
  grid-area: "newnote";
  background-color: darkkhaki;
`;
