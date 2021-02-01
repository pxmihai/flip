import React from "react";
import styled from 'styled-components'
import img1 from './img/bg-stars.svg'

import './css/flip.css'

const StyledBackground = styled.div`
  background-image: url(${img1});
  position: relative;

  width: 100%;
  height: 100%;

`


export const FlipCore = () => {
    return (
        <StyledBackground>

            <div className="cover">
                <div className="aa">WE'RE LAUNCHING SOON</div>
                <div className="bb"> </div>
                <div className="cc">

                </div>
            </div>
        </StyledBackground>
    )
}