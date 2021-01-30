import React from "react";
import styled from 'styled-components'

const StyledLeftBar = styled.div`
  display: flex;
  background-color: black;
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