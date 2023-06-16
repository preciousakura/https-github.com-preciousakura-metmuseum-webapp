import styled from "styled-components";

export const Box = styled.ul`
  position: relative;

  width: 100%;
  height: 100vh;
  margin: auto;
  overflow: hidden;

  .black-veil {
    width: 100%;
    height: 100vh;
    position: absolute;
    background: black;
    opacity: 0.8;
    z-index: 9;
  }
`;

export const ImageContent = styled.div<{ url: string }>`
  background: url(${(props) => props.url}) center bottom;
  background-color: black;
  background-size: cover;
  height: 100vh;

  position: absolute;

  width: 100%;
  height: 100vh;

  transition: opacity 2s ease;

  &.active {
    opacity: 1;
  }

  &.inactive {
    opacity: 0;
  }
`;

export const CircleController = styled.button<{ iscurrent: number }>`
  border: 0;
  cursor: pointer;

  width: 8px;
  height: 8px;
  background-color: white;
  border-radius: 100%;

  filter: ${(props) => (props.iscurrent ? "brightness(0.6)" : "brightness(1)")};

  &:hover {
    filter: brightness(0.6);
  }
`;

export const CircleControllerGroup = styled.div`
  display: flex;
  flex-direction: row;

  position: absolute;
  gap: 10px;
  z-index: 50;

  left: 50%;
  transform: translate(-50%, -50%);
  bottom: 10px;
`;

export const ImageData = styled.div`
  z-index: 10;
  position: absolute;
  right: 0;
  bottom: 20px;
  color: white;
  text-align: right;
  padding: 0 15px;

  h5 {
    font-weight: 400;
    font-size: 18px;
  }

  h6 {
    font-weight: 400;
    font-size: 14px;
  }
`;
