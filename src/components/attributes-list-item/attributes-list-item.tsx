import React, {FC, useState} from "react";

import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {addAttribute, removeAttribute, selectField} from "../../store/slices/attributes-slice";
import {toggleInformation} from "../../store/slices/calculator-slice";

interface AttributesListItemProps {
    index: string;
    name: string;
    value: number;
    modifier: number;
    bonuses: {};
}

export const AttributesListItem: FC<AttributesListItemProps> = (props) => {
    const dispatch = useTypedDispatch();
    const [visible, setVisible] = useState(false);
    let highlight: boolean = false;

    for (let key in props.bonuses) {
        if (key === props.index) {
            highlight = true;
        }
    }

    return (
        <TableItem key={props.index} onMouseEnter={() => dispatch(selectField(props.name))} onMouseOver={() => setVisible(!visible)} onMouseOut={() => setVisible(!visible)}>
            <InputBlock>
                <Button onClick={() => dispatch(removeAttribute(props.index))}>
                    <span>{'<'}</span>
                </Button>
                <Input value={props.value} highlight={highlight} readOnly/>
                <Button onClick={() => dispatch(addAttribute(props.index))}>
                    <span>{'>'}</span>
                </Button>
            </InputBlock>

            <Divider/>

            <Span highlight={highlight}>{props.name}</Span>
            <InfoBtn isVisible={visible} onClick={() => dispatch(toggleInformation())}>
                <span>?</span>
            </InfoBtn>

            <Divider/>

            <span>{props.modifier}</span>
        </TableItem>
    );
};

const TableBlock = styled.div`
  position: relative;
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

interface InputProps {
    highlight: boolean;
}

const Input = styled.input<InputProps>`
  text-align: center;
  margin: 0 5px;
  width: 50px;
  border: 1px solid black;
  border-radius: 3px;
  ${props => (props.highlight) && `color: #E25608;`}
`;

interface SpanProps {
    highlight: boolean;
}

const Span = styled.span<SpanProps>`
  text-align: start;
  padding-left: 3rem;
  ${props => (props.highlight) && `color: #E25608;`};
`;

interface InfoBtnProps {
    isVisible: boolean;
}

const InfoBtn = styled.button<InfoBtnProps>`
  position: absolute;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  height: 30px;
  width: 30px;
  border: none;
  border-radius: 100%;
  background-color: lightgray;
  right: 20%;
  transition: 0.5s all;
  &:hover {
    transform: scale(1.1);
  };
  &:active {
    transform: scale(0.9);
  };
  ${props => (props.isVisible) ? `display: block` : `display: none`};
`;
