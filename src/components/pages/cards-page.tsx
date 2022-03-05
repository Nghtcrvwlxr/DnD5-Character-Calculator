import React, {FC, useEffect} from "react";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";

import {hideInformation} from "../../store/slices/calculator-slice";
import {getNextPage, updateCurrentPage} from "../../store/slices/navigation-slice";

import {CardListContainer} from "../card-list/card-list-container";
import {InformationSheet} from "../information-sheet/information-sheet";

import {CardPageProps} from "../../utils/types";

export const CardsPage: FC<CardPageProps> = ({fieldKey, fetchData, label}) => {
    const dispatch = useTypedDispatch();
    // @ts-ignore
    const currentField = useTypedSelector(state => state.calculatorReducer[fieldKey]);
    const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);

    const url = window.location.pathname;

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
            <Subtitle>{label}</Subtitle>
            <Wrapper>
                <CardListContainer currentField={currentField} fieldKey={fieldKey}/>
                <InformationSheet currentField={currentField} isShown={showInfo} fieldKey={fieldKey}/>
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