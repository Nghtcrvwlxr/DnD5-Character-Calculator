import React, {FC} from "react";

import styled from "styled-components";

import {CardListContainer} from "../../card-list/card-list-container";
import {InformationSheet} from "../../information-sheet/information-sheet";

export const RaceSelectionPage: FC = () => {
    return (
        <>
            <Subtitle>Раса</Subtitle>
            <Wrapper>
                <InnerWrapper>
                    <CardListContainer/>
                </InnerWrapper>
                <InformationSheet/>
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
  grid-template: auto / minmax(auto, auto);
  grid-auto-flow: column;
  grid-auto-columns: minmax(max-content, auto);
  padding: 20px;
  transition: 3s all;
`;

const InnerWrapper = styled.div`
  display: grid;
  grid-template: repeat(3, minmax(auto, max-content)) / repeat(3, minmax(auto, max-content));
  gap: 40px;
  margin: 0 auto;
  transition: 3s all;
`;
