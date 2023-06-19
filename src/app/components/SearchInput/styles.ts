import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 50px;
  width: 100%;
  .top {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  .bottom {
    display: flex;
    gap: 20px;
    h3 {
      font-weight: 500;
      color: ${(props) => props.theme.isDark ? props.theme.colors.primary[500] : 'black'};
      
    }
  }

  .select {
    .ant-select {
      .ant-select-selector {
        height: 50px !important;
        width: 160px !important;
      }
      .ant-select-selection-item {
        display: flex;
        align-items: center;
      }
    }
  }

  .button {
    background: ${(props) => props.theme.colors.primary[500]};
    height: 50px;
    border-radius: 10px;
    padding: 0 20px;
    cursor: pointer;
    button {
      cursor: pointer;
      background: none;
      border: none;
      height: 100%;
    }

    &:hover {
      filter: brightness(0.8);
    }
  }

  .input {
    position: relative;
    width: 100%;
    .icon {
      position: absolute;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;

      &.search {
        left: 15px;
      }

      &.clear {
        right: 15px;
        cursor: pointer;
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
`;
