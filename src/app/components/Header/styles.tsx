import styled from "styled-components";

export const Box = styled.ul`
  position: absolute;
  z-index: 999;

  display: flex;
  right: 0;
  gap: 30px;
  align-items: center;

  padding: 50px;

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
