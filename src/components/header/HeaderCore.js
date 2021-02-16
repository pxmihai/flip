import React, { useState, useEffect } from 'react';
// import styled from 'styled-components';
import axios from "axios";

// const StyledHeader=styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: orange;
// `

export const HeaderCore =() => {
    // data goes here

    const [postId, setPostId] = useState(null);

    useEffect(() => {
        // PUT request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'PUT',

            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React Hooks PUT Request Example' })
        };
        fetch('https://jsonplaceholder.typicode.com/posts/1', requestOptions)
            .then(response => response.json())
            .then(data => setPostId(data.id));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">PUT Request with React Hooks</h5>
            <div className="card-body">
                Returned Id: {postId}!
            </div>
        </div>
    );
}