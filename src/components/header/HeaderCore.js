import React from "react";
import styled from 'styled-components'

export const HeaderCore =() => {
    // data goes here
    let ok='https://aws.random.cat/meow';

const StyledHeader=styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`


    return (
        <StyledHeader>
            <div>{ok}</div>
            <img src="https://purr.objects-us-east-1.dream.io/i/iKy1W.gif" alt="Paris"></img>
        </StyledHeader>


    )
}