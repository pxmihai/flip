import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
// import axios from "axios";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`
const StyledBox = styled.div`
  display: flex;
  margin:10px;
  background-color:tomato;
`

export const HeaderCore = () => {
    // data goes here

    const [postId, setPostId] = useState(null);
    const [startValue, endValue] = useState(0);
    const [starBit, moveBit] = useState({a: 1, b: 2, c: "potato"})
    const [potato, tomato] = useState("words");


    useEffect(() => {
        // PUT request using fetch inside useEffect React hook
        endValue("eraser 991");
        moveBit({c:"erase 99c"});
        moveBit({a:"erase 99a"});
        tomato("erase 993")
        const requestOptions = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({title: 'React Hooks PUT Request Example'})
        };
        fetch('https://jsonplaceholder.typicode.com/posts/2', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
            <StyledHeader>

                    <StyledBox>Value : {postId}</StyledBox>
                    <StyledBox>Value : {startValue}</StyledBox>
                    <StyledBox>Value : {starBit.a}</StyledBox>
                    <StyledBox>Value : {potato}</StyledBox>



            </StyledHeader>


        </div>);
}

// https://jasonwatmore.com/post/2020/11/02/react-fetch-http-put-request-examples
