import React, {useState, useEffect} from "react";
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

const StyledDaysID = styled.p`
  background-color: orange;

  //    testing purposes
`

export const FlipCore = () => {
    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);

    let launchDate = new Date("July 10, 2021 16:17:18").getTime();
    let now = new Date().getTime();
    let eta = launchDate - now;
    let day = 1000 * 60 * 60 * 24;
    useEffect(() => {
        let timer = setInterval(() => {
                setDays(days = Math.floor(eta / day));
                setHours(hours = Math.floor(eta % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                setMinutes(minutes = Math.floor(eta % ((1000 * 60 * 60)) / (1000 * 60)));
                setSeconds(seconds = Math.floor(eta % (1000 * 60) / 1000));
            },
            1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <StyledBackground>

            <div className="wrapper">
                <div className="top">WE'RE LAUNCHING SOON</div>
                <div className="countdown">
                    <div className="flip_label">
                        <div>
                            <p id="days" className="value">{days}</p>
                        </div>
                        <div id="mess">
                            <StyledDaysID>
                                <p id="days">days</p>
                            </StyledDaysID>
                        </div>
                    </div>
                    <div className="flip_label">{hours}hours</div>
                    <div className="flip_label">{minutes}minutes</div>
                    <div className="flip_label">{seconds}seconds</div>
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