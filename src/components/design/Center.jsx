import React from "react";
import styled from 'styled-components'
import {LeftBar} from "./LeftBar";
import {Flip} from "./Flip"
import {RightBar} from "./RightBar";

const StyledCenter = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

`

export const Center = () => {
    return (
        <StyledCenter>
            <LeftBar/>
            <Flip/>
            <RightBar/>
        </StyledCenter>
    )
}