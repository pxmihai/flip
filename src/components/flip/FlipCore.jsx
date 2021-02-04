import React, { useState, useEffect } from 'react';
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

// const StyledID = styled.p`
//   background-color: orange;
//
//   //    testing purposes
// `

export const FlipCore = () => {
    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let launchDate = new Date("Mar 1, 2021 16:20:00").getTime();
    let now = new Date().getTime();
    let eta = launchDate - now;
    let day = 1000 * 60 * 60 * 24;
    useEffect(() => {
        //https://medium.com/create-a-clocking-in-system-on-react/create-a-react-app-displaying-the-current-date-and-time-using-hooks-21d946971556
        let timer = setInterval(() => {
                setDays(Math.floor(eta / day));
                setHours(Math.floor(eta % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                setMinutes(Math.floor(eta % ((1000 * 60 * 60)) / (1000 * 60)));
                setSeconds(Math.floor(eta % (1000 * 60) / 1000));
            },
            1000)
        return () => clearInterval(timer)
    });

    return (
        <StyledBackground>

            <div className="wrapper">
                <div className="top">WE'RE LAUNCHING SOON</div>
                <div className="countdown">
                    <div className="flip">

                        <div className="value">
                            <div id="leftC"></div>
                            {days}
                            <div id="rightC"></div>
                        </div>

                        <div className="unit">
                            <p>DAYS</p>
                        </div>
                    </div>
                    <div className="flip">

                        <div className="value">
                            <div id="leftC"></div>
                            {hours}
                            <div id="rightC"></div>
                        </div>

                        <div className="unit">
                            <p>HOURS</p>
                        </div>
                    </div>
                    <div className="flip">

                        <div className="value">
                            <div id="leftC"></div>
                            {minutes}
                            <div id="rightC"></div>
                        </div>

                        <div className="unit">
                            <p>MINUTES</p>
                        </div>
                    </div>
                    <div className="flip">

                            <div  className="value">
                                <div id="leftC"></div>
                                {seconds}
                                <div id="rightC"></div>
                            </div>

                        <div class="unit">
                                <p>SECONDS</p>
                        </div>
                    </div>

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