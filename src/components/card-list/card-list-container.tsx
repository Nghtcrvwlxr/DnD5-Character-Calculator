import React, {FC, useContext, useEffect} from "react";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";
import {dataError, dataLoaded, dataRequested} from "../../store/slices/service-slice";
import {hideInformation} from "../../store/slices/calculator-slice";

import {Service} from "../service-context/service-context";

import {CardList} from "./card-list";
import {LoadingIndicator} from "../loading-indicator/loading-indicator";
import {ErrorIndicator} from "../error-indicator/error-indicator";

import {AppDispatch} from "../../store/store";
import {Race} from "../../utils/types";

export const CardListContainer: FC = () => {
    const dispatch = useTypedDispatch();
    const state = useTypedSelector(state => state.serviceReducer);

    const service = useContext(Service);

    const fetchData = (dataService: any, dispatch: AppDispatch) => {
        dispatch(dataRequested());
        dataService.getRaces()
            .then((data: Race[]) => dispatch(dataLoaded(data)))
            .catch(() => dispatch(dataError()));
    };

    useEffect(() => {
        fetchData(service, dispatch);
        return () => {
            dispatch(hideInformation());
        };
    }, [service, dispatch]);

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
    return <CardList data={state.data}/>
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