import React, {FC} from "react";

import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {addAttribute, removeAttribute, selectField} from "../../store/slices/attributes-slice";

interface AttributesListItemProps {
    index: string;
    name: string;
    value: number;
    modifier: number;
}

export const AttributesListItem: FC<AttributesListItemProps> = (props) => {
    const dispatch = useTypedDispatch();

    return (
        <TableItem key={props.index} onMouseEnter={() => dispatch(selectField(props.name))}>
            <InputBlock>
                <Button onClick={() => dispatch(removeAttribute(props.index))}>
                    <span>{'<'}</span>
                </Button>
                <Input value={props.value} readOnly/>
                <Button onClick={() => dispatch(addAttribute(props.index))}>
                    <span>{'>'}</span>
                </Button>
            </InputBlock>
            <Divider/>
            <Span>{props.name}</Span>
            <Divider/>
            <span>{props.modifier}</span>
        </TableItem>
    );
};

const TableBlock = styled.div`
  box-sizing: content-box;
  background: white;
  border: 1px solid black;
  border-radius: 5px;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  text-align: center;
  transition: 0.1s all;
  &:hover {
    box-shadow: 0 0 10px black;
  };
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
