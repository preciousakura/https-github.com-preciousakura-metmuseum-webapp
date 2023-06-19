import { styled } from "styled-components";

export const Box = styled.div`
  position: relative;
  max-width: 1200px;
  min-width: 500px;
  display: flex;
  margin: 100px auto;
  align-items: flex-start;
  gap: 20px;
  background: ${(props) => (props.theme.isDark ? "#121212" : "white")};
  width: max-content;
  padding: 20px;
  min-height: 500px;
  justify-content: center;

  a {
    display: inherit;
    max-width: max-content;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    font-weight: 600;
    color: ${(props) =>
      props.theme.isDark ? props.theme.colors.primary[500] : "black"};

    &:hover {
      color: ${(props) =>
        !props.theme.isDark ? props.theme.colors.primary[500] : "white"};
    }

    &:hover .more-info-artist {
      border: 1px solid
        ${(props) =>
          !props.theme.isDark ? props.theme.colors.primary[500] : "white"};
    }

    .more-info-artist {
      margin-top: 12px;
      border: 1px solid
        ${(props) =>
          props.theme.isDark ? props.theme.colors.primary[500] : "black"};
      padding: 10px 15px;
      border-radius: 10px;
      cursor: pointer;

      width: max-content;
    }
  }

  h5 {
    font-size: 16px;
    font-weight: 500;
    color: ${(props) =>
      props.theme.isDark ? props.theme.colors.primary[500] : "black"};
  }

  h2 {
    color: ${(props) => props.theme.colors.text};
    font-size: 28px;
  }

  .image {
    min-width: 500px;
    .no-image {
      width: 500px;
      height: 500px;
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
  }

  .title-art {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 12px 0;

    h3 {
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
      font-size: 22px;
    }
    svg {
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
    }
  }

  .is-highlight {
    left: 84px;
    background: #f97316;
    &:after {
      border-color: #f97316;
    }
  }

  .public-domain {
    left: 36px;
    background: #0284c7;
    &:after {
      border-color: #0284c7;
    }
  }

  .is-highlight,
  .public-domain {
    z-index: 10;
    position: absolute;
    top: 0;
    width: 40px;
    height: 55px;
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
      border-width: 0 20px 20px 20px;
      border-bottom-color: transparent;
      border-style: solid;
      box-sizing: border-box;
    }
  }
`;

export const ImageStyle = styled.div<{ src: string }>`
  background: url(${(props) => props.src}) center;
  width: 500px;
  height: 500px;
  position: relative;
  background-size: cover;
`;
