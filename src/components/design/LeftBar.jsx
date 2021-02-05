import React from "react";
import styled from 'styled-components'

const StyledLeftBar = styled.div`
  display: flex;
  background:  linear-gradient(hsl(236, 25%, 23%) 50%, hsl(236, 21%, 26%) 50%);
  position: relative;
  width: 10vw;
  height: 80vh;
  left: 0;

`

export const LeftBar = () => {
    return (
        <StyledLeftBar>
        </StyledLeftBar>
    )
}