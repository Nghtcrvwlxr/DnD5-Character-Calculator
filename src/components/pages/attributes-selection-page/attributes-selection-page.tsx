import React, {FC, useContext, useEffect} from 'react';

import styled from "styled-components";

import {Service} from "../../service-context/service-context";

import {useTypedDispatch, useTypedSelector} from "../../../store/utils";
import {getNextPage, updateCurrentPage} from "../../../store/slices/navigation-slice";
import {hideInformation} from "../../../store/slices/calculator-slice";

import {AttributesListContainer} from "../../attributes-list/attributes-list-container";

export const AttributesSelectionPage: FC = () => {
    const dispatch = useTypedDispatch();
    const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);

    const url = window.location.pathname;

    const service = useContext(Service);
    const fetchData = service.fetchAttributes;

    useEffect(() => {
        dispatch(updateCurrentPage(url));
        dispatch(getNextPage(url));
        fetchData!(dispatch);
        return () => {
            dispatch(hideInformation());
        };
    }, [fetchData, dispatch, url]);

    return (
        <>
            <Subtitle>Attributes</Subtitle>
            <Wrapper>
                <AttributesListContainer/>
                <Sheet isShown={showInfo}/>
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
  transition: 3s all;
`;

interface InformationSheetProps {
    isShown: boolean;
}

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
