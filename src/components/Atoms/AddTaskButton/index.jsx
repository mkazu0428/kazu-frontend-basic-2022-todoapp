import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = (props) => {
  return (
    <AddTaskButtonTag onClick={props.onclick}>
      <ImgPlus src={plus} />
      <AddTaskButtonText>タスクを追加</AddTaskButtonText>
    </AddTaskButtonTag>
  );
};

<AddTaskButton onClick={() => console.log("click")} />;

const AddTaskButtonTag = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 126px;
  height: 24px;
  border: none;
  border-radius: 12px;
  padding: 0 6px;
  background-color: transparent;

  &:hover {
    background-color: rgba(70, 163, 129, 0.2);
  }
`;

const ImgPlus = styled.img`
  width 20px;
`;
const AddTaskButtonText = styled.div`
  width: 84px;
  ${TEXT.S}
  font-family:${FONTFAMILY.NOTO_SANS};
  color: ${COLOR.GREEN};
`;

export default AddTaskButton;
