import React from "react";
import styled from "styled-components";
import posed from "react-pose"

export const ImageCharacter = ({image}) => {
    const onClick = () => {
        console.log('click')
    };
    return (
        <ImageBlock onClick={onClick}>
            <Circle>
                <StyledImage src={image}/>
            </Circle>
        </ImageBlock>
    );
};

const Image = posed.img({
    hoverable: true,
    init: {
        scale: 1.0,
    },
    hover: {
        scale: 1.03,
        transaction:{type: "spring"}
    }
});

const StyledImage = styled(Image)` 
    bottom: 0px;
    position: relative;
    right: 5px;
    height: 200px;
    width: 194px;
    &:hover{
      bottom: 3px
    }
`;
const ImageBlock = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    margin: 0 15px 0 15px;
`;
const Circle = styled.div`
   border: 3px solid rgb(255,255,255, 0.7);
   width: 100%;
   height: 100%;
   border-radius: 200px;
   display: flex;
   justify-content: center;
`;