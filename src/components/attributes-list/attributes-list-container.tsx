import React, {FC} from "react";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {AttributesList} from "./attributes-list";
import {LoadingIndicator} from "../loading-indicator/loading-indicator";
import {ErrorIndicator} from "../error-indicator/error-indicator";

export const AttributesListContainer: FC = () => {
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

    return <AttributesList data={state.data}
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
