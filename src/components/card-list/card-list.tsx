import React, {FC} from "react";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {selectRace} from "../../store/slices/calculator-slice";

import {Race} from "../../utils/types";

interface CardListProps {
    data: Race[];
}

export const CardList: FC<CardListProps> = (props) => {
    const dispatch = useTypedDispatch();
    const selectedRace = useTypedSelector(state => state.calculatorReducer.race);
    const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);

    const cardImage = require('./sample_card_image.jpg');

    const elements = props.data.map(item => {
        return (
            <Card
                key={item.index}
                selectedRace={selectedRace}
                label={item.name}
                onClick={() => dispatch(selectRace(item.name))}>
                <Img src={cardImage} alt="card"/>
                <Span>{item.name}</Span>
            </Card>
        );
    });
    return (
        <CardsWrapper showInfo={showInfo}>
            {elements}
        </CardsWrapper>
    );
};

interface CardProps {
    selectedRace: string;
    label: string;
}

const Card = styled.button<CardProps>`
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
  ${props => (!props.selectedRace) ? `
    &:hover {
        transform: scale(1.1);
        border: 1px solid #3FA7AE;
        box-shadow: 0 0 25px #3FA7AE;
    };
  ` : `
    &:hover {
        transform: scale(1.1);
        border: 1px solid #E25608;
        box-shadow: 0 0 25px #E25608;
    };
  `};
  ${props => (props.selectedRace === props.label) ? `
    transform: scale(1.15);
    border: 1px solid #3FA7AE;
    box-shadow: 0 0 25px #3FA7AE;
    &:hover {
        transform: scale(1.1);
        border: 1px solid #3FA7AE;
        box-shadow: 0 0 25px #3FA7AE;
    };
    &:focus {
        transform: scale(1.15);
        border: 1px solid #3FA7AE;
        box-shadow: 0 0 25px #3FA7AE;
    };
  ` : ``};
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

interface CardsWrapperProps {
    showInfo: boolean;
}

const CardsWrapper = styled.div<CardsWrapperProps>`
  display: grid;
  grid-template: repeat(3, minmax(max-content, max-content)) / repeat(3, minmax(max-content, max-content));
  gap: 40px;
  transition: 1s all;
  ${props => (props.showInfo) ? `
    margin-right: 50vw;
  ` : ``};
`;
