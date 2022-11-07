import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

const Checkbox = (props) => {
  return (
    <CheckboxTag onClick={props.onClick}>
      <ImgCheck src={check} />
    </CheckboxTag>
  );
};

const ImgCheck = styled.img`
  width: 16px;
  height: 16px;
  opacity: 0;
`;
const CheckboxTag = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  padding: 0;
  background-color: transparent;
  cursor: pointer;
  &:hover ${ImgCheck} {
    opacity: 1;
  }
`;

export default Checkbox;
