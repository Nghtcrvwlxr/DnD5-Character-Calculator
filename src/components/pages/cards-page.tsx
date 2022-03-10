import React, {FC, useEffect} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../store/utils";

import {dataCleared} from "../../store/slices/service-slice";
import {hideInformation} from "../../store/slices/calculator-slice";
import {getNextPage, updateCurrentPage} from "../../store/slices/navigation-slice";

import {CardListContainer} from "../card-list/card-list-container";
import {InformationSheet} from "../information-sheet/information-sheet";

interface CardPageProps {
    fieldKey: string;
    fetchData: Function;
    label: string;
}

export const CardsPage: FC<CardPageProps> = ({fieldKey, fetchData, label}) => {
    const dispatch = useTypedDispatch();

    const currentField = useTypedSelector(state => state.calculatorReducer[fieldKey]);
    const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);
    const nextPageURL = useTypedSelector(state => state.navigationReducer.nextPage);

    const url = window.location.pathname;

    useEffect(() => {
        dispatch(updateCurrentPage(url));
        dispatch(getNextPage(url));
        fetchData!(dispatch);
        return () => {
            dispatch(dataCleared());
            dispatch(hideInformation());
        };
    }, [fetchData, dispatch, url]);

    return (
        <>
            <Subtitle>{label}</Subtitle>
            <Wrapper>
                <CardListContainer currentField={currentField} fieldKey={fieldKey}/>

                <InformationSheet isShown={showInfo}>
                    <Description>
                        <h3>{currentField.name}</h3>
                        <h5>{currentField.name} description:</h5>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto at deleniti dolor ducimus eaque ex, facere fugit harum id inventore necessitatibus nemo numquam quaerat quos rerum sint, veritatis.
                        </span>
                    </Description>
                    <SelectButton to={nextPageURL}>Select</SelectButton>
                </InformationSheet>
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

const Description = styled.div`
  margin-top: 40px;
`;

const SelectButton = styled(Link)`
  height: 40px;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3FA7AE;
  color: white;
  margin-top: auto;
  text-decoration: none;
  text-transform: uppercase;
  align-self: center;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px black;
    background: #19b7c5;
  };
  &:active {
    transform: scale(0.9);
  };
`;
