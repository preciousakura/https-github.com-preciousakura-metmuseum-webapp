import { styled } from "styled-components";

export const Box = styled.div`
  .content-search {
    display: flex;
    align-items: center;
    gap: 10px;

    .input-search {
      position: relative;
      width: 100%;
      .icon {
        position: absolute;
        align-items: center;
        display: flex;
        height: 100%;
        top: 0;

        &.search {
          left: 15px;
        }

        &.clear {
          cursor: pointer;
          right: 15px;
        }

        svg {
          color: ${(props) => props.theme.colors.trueGray[500]};
        }
      }

      input {
        width: 100%;
        box-sizing: border-box;
        border-radius: 10px;
        border: none;
        background: none;
        font-size: 1.4rem;
        padding: 10px 45px;
        border-radius: 10px;
        background: ${(props) =>
          props.theme.isDark ? props.theme.colors.trueGray[900] : "white"};
        border: 1px solid
          ${(props) =>
            props.theme.isDark
              ? props.theme.colors.trueGray[600]
              : props.theme.colors.trueGray[200]};

        color: ${(props) =>
          props.theme.isDark ? props.theme.colors.primary[500] : "black"};

        &:focus {
          outline: none;
          border: 1px solid
            ${(props) =>
              props.theme.isDark
                ? props.theme.colors.primary[500]
                : props.theme.colors.trueGray[800]};
        }
      }
    }

    .select-filter-search {
      .ant-select {
        .ant-select-selector {
          transition: none;

          height: 50px;
          width: 160px;
        }
        .ant-select-selection-item {
          display: flex;
          align-items: center;
        }
      }
    }

    button {
      background: ${(props) =>
        !props.theme.isDark
          ? props.theme.colors.primary[500]
          : props.theme.colors.trueGray[900]};

      border: ${(props) =>
        props.theme.isDark
          ? `1px solid ${props.theme.colors.primary[500]}`
          : "none"};
      border-radius: 10px;
      font-weight: 400;
      padding: 0 20px;
      cursor: pointer;
      height: 50px;

      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "white"};

      &:hover {
        filter: brightness(0.8);
      }
    }

    @media (max-width: 800px) {
      flex-direction: column;
      button {
        width: 100%;
      }

      .select-filter-search {
        width: 100%;
        .ant-select {
          width: 100%;
          .ant-select-selector {
            width: 100%;
          }
        }
      }
    }
  }

  .content-filter {
    display: flex;
    gap: 20px;
    margin: 20px 0;
    h3 {
      font-weight: 600;
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
    }

    @media (max-width: 800px) {
      flex-direction: column;
    }
  }
`;
