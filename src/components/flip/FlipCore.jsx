import React from "react";
import styled from 'styled-components'
import img1 from './img/bg-stars.svg'
import './css/flip.css'

const StyledBackground = styled.div`
  background-image: url(${img1});
  background-color: hsl(235, 16%, 14%);
  position: relative;
  width: 100%;
  height: 100%;
`

export const FlipCore = () => {
    return (
        <StyledBackground>

            <div className="wrapper">
                <div className="top">WE'RE LAUNCHING SOON</div>
                <div className="countdown">
                    <div className="flip_label">days</div>
                    <div className="flip_label">hours</div>
                    <div className="flip_label">minutes</div>
                    <div className="flip_label">seconds</div>
                </div>
                <div className="bottom">
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-pinterest"></i>
                    <i className="fab fa-instagram"></i>

                </div>
            </div>
        </StyledBackground>
    )
}