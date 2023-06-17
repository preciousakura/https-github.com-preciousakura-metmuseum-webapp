import styled from "styled-components";

export const Box = styled.ul`
  position: absolute;
  z-index: 999;

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
      background: ${(props) => props.theme.colors.primary[900]};
      padding: 10px;
      border-radius: 30px;
      svg:hover {
        cursor: pointer;
        path {
          &:hover {
            fill: ${(props) => props.theme.colors.primary[500]};
          }
        }
      }
    }
    a {
      text-decoration: none;
      color: white;
      font-size: 1rem;
      cursor: pointer;
      text-transform: uppercase;

      font-weight: 700;
      transition: all 0.2s ease;
      &:hover {
        color: ${(props) => props.theme.colors.primary[500]};
      }
    }
  }
`;
