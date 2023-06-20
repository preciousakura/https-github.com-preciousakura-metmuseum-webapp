import { styled } from "styled-components";

export const Box = styled.div`
  width: 100%;
  height: 100%;
  min-height: 400px;
  padding: 10px;
  position: relative;
  box-sizing: border-box;
  background: ${(props) => (props.theme.isDark ? "#121212" : "white")};

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    svg {
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
    }
  }

  .content-feedback {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    p {
      color: ${(props) =>
        props.theme.isDark
          ? props.theme.colors.trueGray[500]
          : props.theme.colors.trueGray[300]};
    }
  }

  .art-info {
    padding-top: 10px;
    display: flex;
    flex-direction: column;
    h2 {
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
      font-weight: 600;
    }
    a {
      font-weight: 800;
      margin-bottom: 7px;

      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
      text-decoration: none;
      font-size: 20px;

      transition: all 0.2s ease;

      &:hover {
        filter: contrast(0.2);
      }
    }

    .artist {
      font-size: 14px;
    }
  }

  .no-image {
    width: 100%;
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

    &.active {
      svg {
        color: ${(props) => props.theme.colors.primary[500]};

        &:hover {
          color: ${(props) => props.theme.colors.trueGray[400]};
        }
      }
    }
    &.inactive {
      svg {
        color: ${(props) => props.theme.colors.trueGray[400]};
        &:hover {
          color: ${(props) => props.theme.colors.primary[500]};
        }
      }
    }
  }

  .is-highlight {
    left: 60px;
    background: #f97316;
    &:after {
      border-color: #f97316;
    }
  }

  .public-domain {
    left: 25px;
    background: #0284c7;
    &:after {
      border-color: #0284c7;
    }
  }

  .is-highlight,
  .public-domain {
    position: absolute;
    top: 0;
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
      border-bottom-color: transparent;
      border-style: solid;
      box-sizing: border-box;
    }
  }
`;

export const ImageStyle = styled.div<{ src: string }>`
  background: url(${(props) => props.src}) center top;
  height: 300px;
  position: relative;
  background-size: cover;
`;
