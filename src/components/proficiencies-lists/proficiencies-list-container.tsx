import React, {FC} from "react";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {LoadingIndicator} from "../loading-indicator/loading-indicator";
import {ErrorIndicator} from "../error-indicator/error-indicator";
import {ProficienciesList} from "./proficiencies-list";

interface ProficienciesListProps {
    label: string;
}

export const ProficienciesListContainer: FC<ProficienciesListProps> = (props) => {
    const state = useTypedSelector(state => state.proficienciesReducer);

    const field = props.label.toLowerCase();

    if (state[field].loading) {
        return (
            <LoadingWrapper>
                <LoadingIndicator/>
            </LoadingWrapper>
        );
    }
    if (state[field].error) {
        return (
            <ErrorWrapper>
                <ErrorIndicator/>
            </ErrorWrapper>
        );
    }
    return <ProficienciesList label={props.label} data={state[field].data}/>
};

const LoadingWrapper = styled.div`
    margin: 0 auto;
`;

const ErrorWrapper = styled.div`
  color: red;
  margin: 0 auto;
`;
