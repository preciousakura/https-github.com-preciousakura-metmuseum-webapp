import styled from "styled-components";
import { Select } from "antd";

export const Box = styled.div`
  position: absolute;
  z-index: 9999;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  display: flex;
  align-items: center;
  border: 1px solid white;

  .icon,
  .clean {
    padding: 0 20px;
  }

  .clean {
    cursor: pointer;
  }

  input {
    width: 770px;
    font-size: 36px;
    background: none;
    color: white;
    border: none;
    padding: 15px 0;
    font-family: "Outfit", sans-serif;

    &:focus {
      border: none;
      outline: none;
    }
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary[500]};
  }
`;

export const SelectInput = styled(Select)``;
