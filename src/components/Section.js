import React from 'react';
import styled from 'styled-components';

function Section({title,description,rightBtnTesxt,leftBtnText,backgroundImg}) {
  return (
    <Wrap bgImage = {backgroundImg}>
     <ItemText>
        <h1 >{title}</h1>
        <p >{description}</p>
     </ItemText>
     <ButtonGroup>
        <LeftButton>
{leftBtnText}
        </LeftButton>
        {rightBtnTesxt &&
                <RightButton>
                {rightBtnTesxt}
                        </RightButton>
        }

     </ButtonGroup>
     <DownArrow src= "/images/down-arrow.svg"/>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url('/images/model-s.jpg');
  background-position: center;  
  background-size: cover;       
  background-repeat: no-repeat;
  display : flex;
  flex-direction : column;
  justify-content : space-between;
  align-items : center ;
  background-image : ${props => `url("/images/${props.bgImage}")`}
`;
 const ItemText = styled.div`
 padding-top : 15vh;
 text-align : center;
 `
 const LeftButton = styled.div`
 background-color: rgba(23,26,32,0.8);
height : 40px;
width : 256px;
color : white;
display: flex;
justify-content : center;
align-items : center;
border-radius: 100px;
opacity : 0.85;
text-transform : uppercase;
font-size : 12px;
cursor : pointer;
`
 const RightButton = styled.div`
background-color: rgba(23,26,32,0.8);
height : 40px;
width : 256px;
color : white;
display: flex;
justify-content : center;
align-items : center;
border-radius: 100px;
opacity : 0.85;
text-transform : uppercase;
font-size : 12px;
cursor : pointer;
margin : 8px;
background : white;
color : black;
opacity : 0.65
`
 const ButtonGroup = styled.div`
 display: flex;
 margin-buttom : 30px;
 justify-content: space-around;
 align-items : center;
 margin-top : 400px;
 @media (max-width: 768px){
 flex-direction : column}
 `


const DownArrow = styled.img`
// margin : 20px;
height : 40px;
animation: animateDown infinite 1.5s
// overflow-x: hidden;


`
const Buttons = styled.div`

`