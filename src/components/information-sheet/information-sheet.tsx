import React, {FC} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {hideInformation} from "../../store/slices/calculator-slice";

interface InformationSheetProps {
    selectedField: string;
    clearFn: Function;
    isShown: boolean;
    pageId: number;
}

export const InformationSheet: FC<InformationSheetProps> = (props) => {
    const dispatch = useTypedDispatch();

    const closeAndClear = () => {
        dispatch(hideInformation());
        dispatch(props.clearFn());
    };

    if (!props.selectedField) {
        return <Sheet selectedField={props.selectedField} isShown={props.isShown} clearFn={props.clearFn} pageId={props.pageId}/>;
    }

    return (
        <Sheet selectedField={props.selectedField} isShown={props.isShown} clearFn={props.clearFn} pageId={props.pageId}>
            <Wrapper>
                <CloseButton
                        onClick={() => closeAndClear()}>
                    Close
                </CloseButton>
                <Description>
                    <h3>{props.selectedField}</h3>
                    <h5>{props.selectedField} description:</h5>
                    <span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto at deleniti dolor ducimus eaque ex, facere fugit harum id inventore necessitatibus nemo numquam quaerat quos rerum sint, veritatis.
                    </span>
                </Description>
                <SelectButton to={{pathname: `/${props.pageId + 1}`}}>Select</SelectButton>
            </Wrapper>
        </Sheet>
    );
};

const Sheet = styled.div<InformationSheetProps>`
  position: fixed;
  box-sizing: border-box;
  background-color: white;
  width: 520px;
  height: 680px;
  padding: 20px;
  transition: 1s all;
  ${props => (props.isShown) ? `
    visibility: visible;
    right: 10vw;
    opacity: 1;
  ` : `
    visibility: hidden;
    right: 0;
    opacity: 0;
    transform: translateX(100%);
  `};
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled.button`
  height: 30px;
  width: 80px;
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

const Description = styled.div`
  margin-top: 40px;
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
