import React, {FC, useContext, useEffect} from "react";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../../store/utils";
import {dataError, dataLoaded, dataRequested} from "../../../store/slices/service-slice";
import {hideInformation, selectClass, clearClass} from "../../../store/slices/calculator-slice";

import {Service} from "../../service-context/service-context";

import {CardListContainer} from "../../card-list/card-list-container";
import {InformationSheet} from "../../information-sheet/information-sheet";

import {AppDispatch} from "../../../store/store";
import {Class} from "../../../utils/types"

export const ClassSelectionPage: FC = () => {
    const dispatch = useTypedDispatch();
    const classField = useTypedSelector(state => state.calculatorReducer.class);
    const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);

    const selectFn = selectClass;
    const clearFn = clearClass;

    const pageId = 2;

    const service = useContext(Service);

    const fetchData = (dataService: any, dispatch: AppDispatch) => {
        dispatch(dataRequested());
        dataService.getClasses()
            .then((data: Class[]) => dispatch(dataLoaded(data)))
            .catch(() => dispatch(dataError()));
    };

    useEffect(() => {
        fetchData(service, dispatch);
        return () => {
            dispatch(hideInformation());
        };
    }, [service, dispatch]);

    return (
        <>
            <Subtitle>Class</Subtitle>
            <Wrapper>
                <CardListContainer selectedField={classField} selectFn={selectFn}/>
                <InformationSheet selectedField={classField} isShown={showInfo} clearFn={clearFn} pageId={pageId}/>
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
