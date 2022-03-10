import React, {FC, useEffect} from "react";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {
    loadData,
    toggleLevel,
    calculateRemainingPoints,
    calculateBonusPoints
} from "../../store/slices/attributes-slice";

import {AttributesListItem} from "../attributes-list-item/attributes-list-item";

import {Attribute} from "../../utils/types";

interface AttributesListProps {
    data: Attribute[];
    showInfo: boolean;
}

export const AttributesList: FC<AttributesListProps> = (props) => {
    const dispatch = useTypedDispatch();
    const state = useTypedSelector(state => state.attributesReducer);
    const selectedRace = useTypedSelector(state => state.calculatorReducer.race);
    const selectedClass = useTypedSelector(state => state.calculatorReducer.class);

    useEffect(() => {
        dispatch(loadData(props.data));
    }, [dispatch, props.data]);

    useEffect(() => {
        dispatch(calculateRemainingPoints(selectedClass));
    }, [dispatch, state.level, selectedClass]);

    useEffect(() => {
        dispatch(calculateBonusPoints(selectedRace))
    }, [dispatch, selectedRace]);

    const elements = state.data.map(item => {
        return (
            <AttributesListItem key={item.index} {...item} bonuses={selectedRace.bonusStats}/>
        );
    });

    return (
        <TableWrapper showInfo={props.showInfo}>
            <TableInfoWrapper>
                <TopBlock>
                    <span>Level</span>
                    <Divider/>
                    <InputBlock>
                        <Button onClick={() => {dispatch(toggleLevel('dec'))}}>
                            <span>{'<'}</span>
                        </Button>
                        <Input value={state.level} readOnly/>
                        <Button onClick={() => {dispatch(toggleLevel('inc'))}}>
                            <span>{'>'}</span>
                        </Button>
                    </InputBlock>
                </TopBlock>

                <TopBlock>
                    <span>Remaining points:</span>
                    <Divider/>
                    <span>{state.remainingPoints}</span>
                </TopBlock>
            </TableInfoWrapper>

            <TableHeader>
                <span>Value</span>
                <Divider/>
                <span>Attribute</span>
                <Divider/>
                <span>Modifier</span>
            </TableHeader>

            {elements}
        </TableWrapper>
    );
};

interface TableWrapperProps {
    showInfo: boolean;
}

const TableWrapper = styled.div<TableWrapperProps>`
  width: 50%;
  display: grid;
  grid-template-rows: 75px 50px repeat(6, 75px);
  row-gap: 15px;
  transition: 1s all;
  ${props => (props.showInfo) ? `
    margin-right: 40vw;
  ` : ``};
`;

const TableInfoWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TableBlock = styled.div`
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  text-align: center;
`;

const TopBlock = styled(TableBlock)`
  height: 50px;
  grid-template-columns: 150px min-content 150px;
  font-size: 18px;
`;

const TableHeader = styled(TableBlock)`
  grid-template-columns: minmax(100px, 150px) min-content minmax(400px, auto) min-content minmax(100px, 150px);
  font-size: 18px;
`;

const Divider = styled.div`
  background: black;
  width: 1px;
  height: 80%;
`;

const InputBlock = styled.div`
  display: flex;
  justify-content: center; 
`;

const Button = styled.button`
  text-align: center;
  font-size: 30px;
  line-height: 30px;
  height: 30px;
  background-color: white;
  border: 1px solid black;
  border-radius: 3px;
  transition: 0.25s all;
  &:hover {
    border: 1px solid #E25608;
    box-shadow: 0 0 5px #E25608;
  };
  &:active {
    border: 1px solid #3FA7AE;
    box-shadow: 0 0 5px #3FA7AE;
    transform: scale(0.9);
  };
`;

const Input = styled.input`
  text-align: center;
  margin: 0 5px;
  width: 50px;
  border: 1px solid black;
  border-radius: 3px;
`;
