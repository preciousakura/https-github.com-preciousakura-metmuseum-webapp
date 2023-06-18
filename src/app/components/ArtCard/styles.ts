import { styled } from "styled-components";

export const Box = styled.div`
  width: 300px;
  min-height: 400px;
  padding: 10px;
  position: relative;

  background: ${(props) => (props.theme.isDark ? "#121212" : "white")};
  .art-info {
    padding-top: 10px;
    h2 {
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
    }
    .title {
      font-size: 20px;
    }

    .artist {
      font-size: 14px;
    }
  }

  .no-image {
    width: 300px;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) =>
      props.theme.isDark
        ? props.theme.colors.trueGray[900]
        : props.theme.colors.trueGray[100]};

    svg {
      color: ${(props) =>
        props.theme.isDark
          ? props.theme.colors.trueGray[700]
          : props.theme.colors.trueGray[300]};
    }
  }

  .favorite {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 5px;
    cursor: pointer;
    border: none;
    background: none;
    svg {
      color: #e11d48;
    }
  }
  .public-domain {
    position: absolute;
    top: 0;
    left: 25px;
    background: #0284c7;
    width: 30px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:after {
      content: "";
      width: 30px;
      top: 100%;
      position: absolute;
      display: block;
      border-width: 0 15px 15px 15px;
      border-color: #0284c7;
      border-bottom-color: transparent;
      border-style: solid;
      box-sizing: border-box;
    }
  }
`;

export const ImageStyle = styled.div<{ src: string }>`
  background: url(${(props) => props.src}) center;
  height: 300px;
  position: relative;
  background-size: cover;
`;
