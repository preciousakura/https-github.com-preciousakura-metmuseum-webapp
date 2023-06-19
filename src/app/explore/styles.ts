import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 70px;

  min-height: 900px;

  .cards-area-cards {
    display: grid;
    min-height: 900px;
    align-items: baseline;
    p {
      color: ${(props) =>
        props.theme.isDark
          ? props.theme.colors.trueGray[500]
          : props.theme.colors.trueGray[300]};
    }
    .cards {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 10px;
      padding-bottom: 50px;
    }
  }

  .cards-area-spinner {
    display: grid;
    min-height: 900px;
    align-items: center;
  }

  ul.ant-pagination.css-dev-only-do-not-override-noj3jr {
    margin: 0 auto;
  }
  li.ant-pagination-options {
    display: none;
  }
  li.ant-pagination-item {
    a {
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
    }
    &:hover {
      background: ${(props) =>
        props.theme.isDark ? "#121212" : undefined} !important;
    }
  }

  button.ant-pagination-item-link {
    &:hover {
      background: ${(props) =>
        props.theme.isDark ? "#121212" : undefined} !important;
    }
  }
  .anticon svg,
  span.ant-pagination-item-ellipsis {
    color: ${(props) =>
      props.theme.isDark
        ? props.theme.colors.primary[500]
        : "black"} !important;
  }

  li.ant-pagination-item.ant-pagination-item-active {
    background: none;
    a {
      color: ${(props) => props.theme.colors.primary[500]};
    }
  }
`;
