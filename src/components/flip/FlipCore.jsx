import React from "react";
import styled from 'styled-components'
import img1 from './img/bg-stars.svg'
import img2 from './img/pattern-hills.svg'

const StyledBackground =styled.div`
  display: flex;
  background-image: url(${img1});
  position:relative;
  width:100%;
  height:100%;
`
const BottomImage =styled.div`
  display: flex;
  align-items: flex-end;
  background-image: url(${img2});
  width:100%;
  height:100%;
`

export const FlipCore = () => {
    return (
        <StyledBackground>
            <BottomImage/>
        </StyledBackground>
    )
}