import React from "react";
import styled from 'styled-components'

const StyledRightBar = styled.div`
  background-color: blue;
  position: relative;
  width: 20px;
  height: 60px;
  right: 0;

`

export const RightBar = () => {
    return (
        <StyledRightBar>
        </StyledRightBar>
    )
}