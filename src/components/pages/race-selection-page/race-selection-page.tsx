import React, {FC, useContext, useEffect} from "react";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../../store/utils";
import {dataError, dataLoaded, dataRequested} from "../../../store/slices/service-slice";
import {hideInformation, selectRace} from "../../../store/slices/calculator-slice";

import {Service} from "../../service-context/service-context";

import {CardListContainer} from "../../card-list/card-list-container";
import {InformationSheet} from "../../information-sheet/information-sheet";

import {AppDispatch} from "../../../store/store";
import {Race} from "../../../utils/types"

export const RaceSelectionPage: FC = () => {
    const dispatch = useTypedDispatch();
    const raceField = useTypedSelector(state => state.calculatorReducer.race);

    const selectFn = selectRace;

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

    return (
        <>
            <Subtitle>Раса</Subtitle>
            <Wrapper>
                <CardListContainer selectedField={raceField} selectFn={selectFn}/>
                <InformationSheet/>
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
