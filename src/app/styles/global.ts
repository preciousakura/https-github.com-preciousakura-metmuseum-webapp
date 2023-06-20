import { styled } from "styled-components";

export const BodyMain = styled.body`
  position: relative;
  background: ${(props) => props.theme.colors.background};

  .nav-mobile {
    display: none;
    visibility: hidden;
  }

  .nav-web {
    visibility: visible;
  }

  @media (max-width: 800px) {
    .nav-mobile {
      display: block;
      visibility: visible;
    }

    .nav-web {
      display: none;
      visibility: hidden;
    }
  }
`;
