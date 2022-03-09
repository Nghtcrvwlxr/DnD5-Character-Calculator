import React, {FC} from "react";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {CardList} from "./card-list";
import {LoadingIndicator} from "../loading-indicator/loading-indicator";
import {ErrorIndicator} from "../error-indicator/error-indicator";
import {Race, Class, Background} from "../../utils/types";

interface CardListContainerProps {
    fieldKey: string;
    currentField: Race | Class | Background;
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
                     fieldKey={props.fieldKey}
                     currentField={props.currentField}
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
