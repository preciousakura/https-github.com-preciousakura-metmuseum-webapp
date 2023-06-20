import { styled } from "styled-components";

export const Box = styled.div`
  min-height: 500px;
  max-width: 1640px;
  margin: 0 auto;
  padding: 30px 70px;

  @media (max-width: 1000px) {
    padding: 30px 20px;
  }

  .header {
    margin-bottom: 20px;
    width: 100%;

    .title {
      margin-bottom: 20px;
      h1,
      p {
        color: ${(props) =>
          props.theme.isDark ? props.theme.colors.primary[500] : "black"};
        text-align: left;
      }

      h1 {
        font-size: 50px;
      }
    }
  }

  .spinner {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: ${(props) =>
        props.theme.isDark ? props.theme.colors.primary[500] : "black"};
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .content-feedback {
      display: flex;
      align-items: center;
      min-height: 400px;
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

    .content-cards-area {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      grid-template-rows: repeat(2, 1fr);
      gap: 10px;
      min-height: 903px;
      align-items: flex-start;

      padding-bottom: 60px;
    }
  }

  .ant-pagination-options-size-changer {
    display: none;
  }
`;
