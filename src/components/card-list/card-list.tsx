import React, { FC } from "react";
import styled from "styled-components";

import { selectField } from "../../store/slices/calculator-slice";
import { useTypedDispatch } from "../../store/utils";
import { Background, Class, Race } from "../../utils/types";
import cardImage from "./sample_card_image.jpg";

type Data = Race[] | Class[] | Background[];

interface CardListProps {
  data: Data;
  fieldKey: string;
  currentField: string;
  showInfo: boolean;
}

export const CardList: FC<CardListProps> = props => {
  const dispatch = useTypedDispatch();

  const elements = props.data.map(item => {
    return (
      <Card
        key={item.index}
        selectedField={props.currentField}
        label={item.name}
        onClick={() =>
          dispatch(selectField({ field: props.fieldKey, name: item.name }))
        }
      >
        <Img src={cardImage} alt="card" />
        <Span>{item.name}</Span>
      </Card>
    );
  });
  return <CardsWrapper showInfo={props.showInfo}>{elements}</CardsWrapper>;
};

interface CardProps {
  selectedField: string;
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

  &:hover {
    transform: scale(1.1);
    border: 1px solid #e25608;
    box-shadow: 0 0 25px #e25608;
  }

  ${props =>
    props.selectedField === props.label &&
    `
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
  `};
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
  grid-template: repeat(3, minmax(max-content, max-content)) / repeat(
      3,
      minmax(max-content, max-content)
    );
  grid-auto-flow: column;
  grid-auto-columns: minmax(max-content, max-content);
  gap: 40px;
  transition: 1s all;
  ${props =>
    props.showInfo &&
    `
    margin-right: 40vw;
  `};
`;
