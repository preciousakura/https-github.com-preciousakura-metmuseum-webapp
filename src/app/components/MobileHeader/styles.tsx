import styled from "styled-components";

export const Box = styled.nav<{ ishome: number; isopen: number }>`
  position: ${(props) => (props.ishome ? "absolute" : "static")};
  z-index: 999;
  box-sizing: border-box;

  background: ${(props) =>
    props.ishome
      ? props.isopen
        ? props.theme.isDark
          ? "#121212"
          : props.theme.colors.primary[500]
        : "none"
      : props.theme.isDark
      ? "#121212"
      : props.theme.colors.primary[500]};

  display: flex;
  right: 0;
  gap: 30px;
  align-items: center;

  padding: 30px 20px;

  width: 100%;
  align-items: center;
  justify-content: end;

  -webkit-box-shadow: 0px 16px 16px -19px rgba(0, 0, 0, 0.56);
  -moz-box-shadow: 0px 16px 16px -19px rgba(0, 0, 0, 0.56);
  box-shadow: 0px 16px 16px -19px rgba(0, 0, 0, 0.56);

  button {
    cursor: pointer;
    background: ${(props) =>
      props.isopen
        ? props.theme.isDark
          ? props.theme.colors.primary[500]
          : "white"
        : props.theme.isDark
        ? "black"
        : "white"};

    border: none;
    width: 35px;
    height: 35px;
    border-radius: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) =>
        props.isopen
          ? props.theme.isDark
            ? "black"
            : props.theme.colors.primary[500]
          : props.theme.isDark
          ? "white"
          : "black"};
    }
  }

  ul {
    z-index: 9999999;
    visibility: ${(props) => (props.isopen ? "visible" : "hidden")};
    width: 100%;
    background: ${(props) =>
      props.theme.isDark ? props.theme.colors.trueGray[900] : "white"};
    position: absolute;
    top: 95px;
    right: 0;

    li {
      &:not(.colorMode) {
        cursor: pointer;
      }

      a {
        width: 100%;
        padding: 20px;
        display: inline-block;
        box-sizing: border-box;
        text-decoration: none;
        color: ${(props) => (props.theme.isDark ? "white" : "black")};
      }

      &.active {
        font-weight: 600;
        background: ${(props) =>
          props.theme.isDark
            ? props.theme.colors.trueGray[800]
            : props.theme.colors.trueGray[100]};

        a {
          color: ${(props) => props.theme.colors.primary[500]};
        }
      }
      &.colorMode {
        padding: 20px;
        .button-color-mode {
          display: flex;
          width: max-content;
          gap: 10px;
          background: ${(props) => (props.theme.isDark ? "black" : "white")};
          padding: 10px;
          border-radius: 30px;
          svg {
            cursor: pointer;
          }
        }
      }

      &:hover:not(.colorMode) {
        background: ${(props) =>
          props.theme.isDark
            ? props.theme.colors.trueGray[800]
            : props.theme.colors.trueGray[100]};
        font-weight: 600;
      }
    }
  }
`;
