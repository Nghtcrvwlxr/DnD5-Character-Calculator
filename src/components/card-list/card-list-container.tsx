import React, {FC} from "react";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {CardList} from "./card-list";
import {LoadingIndicator} from "../loading-indicator/loading-indicator";
import {ErrorIndicator} from "../error-indicator/error-indicator";

import {ActionCreatorWithPayload} from "@reduxjs/toolkit";

interface CardListContainerProps {
    selectedField: string;
    selectFn: ActionCreatorWithPayload<string>;
}

export const CardListContainer: FC<CardListContainerProps> = (props) => {
    const state = useTypedSelector(state => state.serviceReducer);
    const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);

    if (state.loading) {
        return (
            <LoadingWrapper>
                <LoadingIndicator/>
            </LoadingWrapper>
        );
    }
    if (state.error) {
        return (
            <ErrorWrapper>
                <ErrorIndicator/>
            </ErrorWrapper>
        );
    }
    return <CardList data={state.data}
                     selectedField={props.selectedField}
                     selectFn={props.selectFn}
                     showInfo={showInfo}/>
};

const LoadingWrapper = styled.div`
  grid-column: 2;
  grid-row-start: 2;
`;

const ErrorWrapper = styled.div`
  grid-column: 2;
  grid-row-start: 2;
  color: red;
`;
