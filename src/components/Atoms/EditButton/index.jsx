import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color.js";

const EditButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Circle />
      <Img src={pencil} />
    </Button>
  );
};
const Circle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: transparent;
}`;
const Button = styled.button`
  position:relative;
  width:20px;
  height:20px;
  padding:0;
  background: transparent;
  border :none;
  &:hover  ${Circle}{
    opacity: 0.2;
    background: ${COLOR.LIGHT_GRAY};
  }
}`;
const Img = styled.img`
  position:absolute;
  width:20px;
  top:0;
  left:0;
}`;

<EditButton onClick={() => console.log("click")} label="ラベル" />;

export default EditButton;
