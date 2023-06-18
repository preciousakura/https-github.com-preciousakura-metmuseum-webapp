import styled from "styled-components";

export const Box = styled.ul<{ ishome: number }>`
  position: ${(props) => (props.ishome ? "absolute" : "static")};
  z-index: 999;
  box-sizing: border-box;

  background: ${(props) =>
    props.ishome
      ? "none"
      : props.theme.isDark
      ? '#121212'
      : props.theme.colors.primary[500]};

  display: flex;
  right: 0;
  gap: 30px;
  align-items: center;

  padding: 30px 50px;

  width: 100%;
  align-items: center;
  justify-content: end;

  -webkit-box-shadow: 0px 16px 16px -19px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 16px 16px -19px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 16px 16px -19px rgba(0, 0, 0, 0.56);

  li {
    list-style: none;
    &.colorMode {
      gap: 10px;
      display: flex;
      background: ${(props) =>
        props.theme.isDark ? "black" : props.theme.colors.primary[900]};
      padding: 10px;
      border-radius: 30px;
      svg {
        cursor: pointer;
        color: ${(props) =>
          props.theme.isDark ? props.theme.colors.primary[500] : "white"};

        &:hover {
          color: ${(props) =>
            props.theme.isDark ? "white" : props.theme.colors.primary[500]};
        }
      }
    }
    a {
      text-decoration: none;
      color: ${(props) =>
        props.ishome
          ? "white"
          : props.theme.isDark
          ? props.theme.colors.primary[500]
          : props.theme.colors.primary[900]};
      font-size: 1rem;
      cursor: pointer;
      text-transform: uppercase;

      font-weight: 700;
      transition: all 0.2s ease;
      &:hover {
        color: ${(props) =>
          props.ishome
            ? props.theme.colors.primary[500]
            : props.theme.isDark
            ? "white"
            : props.theme.colors.primary[700]};
      }
    }
  }
`;
