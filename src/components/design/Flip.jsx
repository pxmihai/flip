import React from "react";
import styled from 'styled-components'
import {FlipCore} from "../flip/FlipCore";

const StyledFlip = styled.div`
  width: 80vw;
  height: 80vh;
`

export const Flip = () => {
    return (
        <StyledFlip>
            <FlipCore/>
        </StyledFlip>
    )
}

