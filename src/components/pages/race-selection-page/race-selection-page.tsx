import React, {FC} from "react";

import styled from "styled-components";

import {CardListContainer} from "../../card-list/card-list-container";
import {InformationSheet} from "../../information-sheet/information-sheet";

export const RaceSelectionPage: FC = () => {
    return (
        <>
            <Subtitle>Раса</Subtitle>
            <Wrapper>
                <CardListContainer/>
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
  position: relative;
  justify-content: center;
  display: flex;
  padding: 20px;
  transition: 3s all;
`;
