import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 10.5rem;
    width: 100%;

    border-bottom: solid 1px ${({ theme }) => theme.COLORS.BACKGROUND_700};

    display: flex;
    justify-content: space-between;
    padding: 0 8rem;

    background-color: red;
`