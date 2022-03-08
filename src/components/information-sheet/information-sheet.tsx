import React, {FC} from "react";

import styled from "styled-components";

import {useTypedDispatch} from "../../store/utils";
import {hideInformation} from "../../store/slices/calculator-slice";

interface InformationSheetProps {
    isShown: boolean;
}

export const InformationSheet: FC<InformationSheetProps> = (props) => {
    const dispatch = useTypedDispatch();

    if (!props.isShown) {
        return <Sheet isShown={props.isShown}/>
    }

    return (
        <Sheet {...props}>
            <Wrapper>
                <CloseButton onClick={() => dispatch(hideInformation())}>
                    Close
                </CloseButton>
                {props.children}
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
