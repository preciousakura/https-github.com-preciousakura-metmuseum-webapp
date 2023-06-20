import { styled } from "styled-components";

export const Box = styled.div`
  margin: 0 auto;

  max-width: 1500px;
  background: ${(props) => (props.theme.isDark ? "#121212" : "white")};
  padding: 10px;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${(props) => (props.theme.isDark ? "white" : "black")};
  }

  .content-feedback {
    justify-content: center;
    align-items: center;
    min-height: 500px;
    display: flex;
    padding: 10px;

    svg {
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
    }

    p {
      color: ${(props) =>
        props.theme.isDark
          ? props.theme.colors.trueGray[500]
          : props.theme.colors.trueGray[300]};
    }
  }

  .content {
    position: relative;
    display: flex;
    gap: 20px;

    @media (max-width: 960px) {
      flex-direction: column;
    }

    .content-image {
      position: relative;
      min-width: 500px;
      height: 500px;

      display: flex;
      justify-content: center;
      align-items: center;

      @media (max-width: 600px) {
        flex-direction: column;
        width: 100%;
        min-width: auto;
      }

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
    }

    .content-text {
      padding: 20px;
      .label {
        display: flex;
        align-items: center;
        gap: 15px;
        margin: 10px 0;

        svg {
          color: ${(props) =>
            props.theme.isDark
              ? props.theme.colors.primary[500]
              : props.theme.colors.primary[500]};
        }
      }
      .content-text-header {
        h3 {
          font-size: 18px;
        }
        h2 {
          font-size: 27px;
          color: ${(props) => props.theme.colors.primary[500]};
        }
      }

      .details {
        margin-top: 25px;
        .information {
          b {
            color: ${(props) =>
              props.theme.isDark ? props.theme.colors.primary[500] : "black"};
          }
          span {
            font-weight: 500;
          }
        }
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
  }
`;
