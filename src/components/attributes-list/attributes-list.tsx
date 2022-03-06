import React, {FC} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {Attribute} from "../../utils/types";

interface AttributesListProps {
    data: Attribute[];
}

export const AttributesList: FC<AttributesListProps> = (props) => {
    const nextPageURL = useTypedSelector(state => state.navigationReducer.nextPage);
    const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);

    const elements = props.data.map(item => {
        return (
            <TableItem key={item.index}>
                <InputBlock>
                    <Button>
                        <span>{'<'}</span>
                    </Button>
                    <Input value={item.value} readOnly/>
                    <Button>
                        <span>{'>'}</span>
                    </Button>
                </InputBlock>
                <Divider/>
                <Span>{item.name}</Span>
                <Divider/>
                <span>{item.modifier}</span>
            </TableItem>
        );
    });

    return (
        <TableWrapper showInfo={showInfo}>
            <LevelBlock>
                <span>Level</span>
                <Divider/>
                <InputBlock>
                    <Button>
                        <span>{'<'}</span>
                    </Button>
                    <Input value={1} readOnly/>
                    <Button>
                        <span>{'>'}</span>
                    </Button>
                </InputBlock>
            </LevelBlock>

            <TableHeader>
                <span>Value</span>
                <Divider/>
                <span>Attribute</span>
                <Divider/>
                <span>Modifier</span>
            </TableHeader>

            {elements}

            <ButtonsWrapper>
                <InfoButton>info</InfoButton>
                <SelectButton to={nextPageURL}>select</SelectButton>
            </ButtonsWrapper>
        </TableWrapper>
    );
};

interface TableWrapperProps {
    showInfo: boolean;
}

const TableWrapper = styled.div<TableWrapperProps>`
  width: 50%;
  display: grid;
  grid-template-rows: 70px 50px repeat(6, 75px);
  row-gap: 15px;
  transition: 1s all;
  ${props => (props.showInfo) ? `
    margin-right: 40vw;
  ` : ``};
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

const LevelBlock = styled(TableBlock)`
  height: 50px;
  margin: 0 auto;
  grid-template-columns: 150px min-content 150px;
  font-size: 18px;
`;

const TableHeader = styled(TableBlock)`
  grid-template-columns: minmax(100px, 150px) min-content minmax(400px, auto) min-content minmax(100px, 150px);
  font-size: 18px;
`;

const TableItem = styled(TableBlock)`
  grid-template-columns: minmax(100px, 150px) min-content minmax(400px, auto) min-content minmax(100px, 150px);
  font-size: 24px;
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

const Span = styled.span`
  text-align: start;
  padding-left: 3rem;
`;

const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SelectButton = styled(Link)`
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3FA7AE;
  color: white;
  margin-top: auto;
  text-decoration: none;
  text-transform: uppercase;
  align-self: center;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px black;
    background: #19b7c5;
  };
  &:active {
    transform: scale(0.9);
  };
`;

const InfoButton = styled.button`
  height: 40px;
  width: 100px;
  background: #E25608;
  color: white;
  border: none;
  text-transform: uppercase;
  align-self: flex-end;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px black;
    background: #ef6725;
  };
  &:active {
    transform: scale(0.9);
  };
`;