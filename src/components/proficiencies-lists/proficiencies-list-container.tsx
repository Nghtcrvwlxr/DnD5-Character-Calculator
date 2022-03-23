import React, {FC} from "react";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {LoadingIndicator} from "../loading-indicator/loading-indicator";
import {ErrorIndicator} from "../error-indicator/error-indicator";
import {ProficienciesList} from "./proficiencies-list";

interface ProficienciesListContainerProps {
    label: string;
}

export const ProficienciesListContainer: FC<ProficienciesListContainerProps> = (props) => {
    const dataIndex = props.label.toLowerCase();
    const state = useTypedSelector(state => state.proficienciesReducer[dataIndex]);

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
    return <ProficienciesList label={props.label} data={state.data}/>
};

const LoadingWrapper = styled.div`
    margin: 0 auto;
`;

const ErrorWrapper = styled.div`
  color: red;
  margin: 0 auto;
`;
