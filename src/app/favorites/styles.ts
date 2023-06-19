import { styled } from "styled-components";

export const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 70px;
  min-height: 900px;
  max-width: 1640px;
  margin: 0 auto;

  .header {
    margin-bottom: 20px;
    width: 100%;
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

  .ant-pagination-options-size-changer {
    display: none;
  }
`;
