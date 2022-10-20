import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";
import BREAKPOINT from "../../../variables/breakpoint.js";
import React from "react";

const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.M}
  @media screen and (min-width:${BREAKPOINT.MEDIUM}) {
    font-family: ${FONTFAMILY.ROBOTO};
    ${TEXT.L}
  }
`;
