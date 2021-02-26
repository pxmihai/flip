import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from "axios";

const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
`
const StyledBox = styled.div`
  display: flex;
  margin: 10px;
  background-color: tomato;
`

export const HeaderCore = () => {
    // data goes here

    const [postId, setPostId] = useState({});
    const [startValue, endValue] = useState(0);
    const [start, reStart] = useState({a: 1, b: 2, c: "potato"})
    const [potato, tomato] = useState("words");
    const [users, setUsers] = useState({hits: []});

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios(
                "https://jsonplaceholder.typicode.com/users"
            );
            setUsers({hits: data});
        };
        fetchData();
    }, [setUsers]);


    useEffect(() => {
        // PUT request using fetch inside useEffect React hook
        endValue("eraser 991");
        reStart(state => ({ ...state, a: 'tomato' }));
        tomato("extra words");

        const requestOptions = {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
            // body: JSON.stringify({title: 'React Hooks PUT Request Example'})
        };
        fetch('https://jsonplaceholder.typicode.com/users/3', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div>
            <StyledHeader>

                <StyledBox>Value : {postId.id}</StyledBox>
                <StyledBox>Value : {startValue}</StyledBox>
                <StyledBox>Value : {start.a}</StyledBox>
                <StyledBox>Value : {potato}</StyledBox>
                <StyledBox>

                    {users.hits &&
                    users.hits.map(item => (
                        <li key={item.id}>
                            <span>{item.name}</span>
                        </li>
                    ))}

                </StyledBox>


            </StyledHeader>


        </div>);
}

// https://jasonwatmore.com/post/2020/11/02/react-fetch-http-put-request-examples
