import { styled } from "styled-components";

export const Box = styled.div`
  position: absolute;
  z-index: 9999;
  bottom: 50%;
  transform: translate(20%, 50%);
  max-width: 780px;
  
  display: flex;
  flex-direction: column;
  gap: 20px;

  h2,
  p {
    color: white;
  }

  h2 {
    font-size: 3.5rem;
  }

  p {
    font-weight: 400;
  }

  a {
    background: none;
    border: 1px solid white;
    padding: 10px 20px;
    border-radius: 10px;
    color: white;
    font-size: 18px;
    cursor: pointer;
    width: max-content;
    text-decoration: none;
    &:hover {
      border-color: ${(props) => props.theme.colors.primary[500]};
      color: ${(props) => props.theme.colors.primary[500]};
    }
  }
`;
