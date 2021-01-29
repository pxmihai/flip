import React, {useState} from "react";
import styled from 'styled-components';



const StyledMiddle = styled.div`
  display: grid;
  grid-template-columns: 150px 150px 150px 150px;
  grid-gap: 20px;
`

const Background = () => {
// const [showResults, setShowResult] = useState(false)
    const arrayOfCircles = Array.from(Array(10).keys())
    console.log(arrayOfCircles)
    return (
        <div>
            <Header/>
            <StyledMiddle>
                {
                    arrayOfCircles.map((circle) => <Circle key={circle}/>)
                }


                {/* <MathBox value1={value1} value2={value2} value3={value3} value4={value4} /> */}

                {/*{showResults && <Result />}*/}
            </StyledMiddle>
            <Footer/>

        </div>
    )
}

export default Background;