import React, {FC} from "react";

import styled from "styled-components";

export const RaceSelectionPage: FC = () => {
    const cardImage = require('./sample_card_image.jpg');

    return (
        <>
            <Subtitle>Раса</Subtitle>
            <Wrapper>
                <InnerWrapper>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                    <Card>
                        <Img src={cardImage} alt="card"/>
                        <Span>Class name</Span>
                    </Card>
                </InnerWrapper>
                <Sheet/>
            </Wrapper>
        </>
    );
};

const Subtitle = styled.h2`
  margin: 5px auto 14px auto;
  font-size: 36px;
  line-height: 49px;
  text-align: center;
  color: white;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template: auto / minmax(max-content, auto);
  grid-auto-flow: column;
  grid-auto-columns: minmax(max-content, auto);
  padding: 20px;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template: repeat(3, minmax(auto, max-content)) / repeat(3, minmax(auto, max-content));
  gap: 40px;
  margin: 0 auto;
`;

const Card = styled.button`
  box-sizing: border-box;
  position: relative;
  max-height: 200px;
  max-width: 200px;
  padding: 0;
  border: 1px solid white;
  text-align: center;
  color: white;
  cursor: pointer;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1);
    border: 1px solid #E25608;
    box-shadow: 0 0 25px #E25608;
  }
  &:focus {
    transform: scale(1.1);
    border: 1px solid #3FA7AE;
    box-shadow: 0 0 25px #3FA7AE;
  }
`;

const Sheet = styled.div`
  display: block;
  margin: 0 auto;
  background-color: white;
  width: 520px;
  height: 680px;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Span = styled.span`
  position: absolute;
  width: 100%;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 18px;
  line-height: 21px;
`;
