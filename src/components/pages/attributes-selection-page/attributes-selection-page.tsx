import React, {FC, useContext, useEffect} from 'react';
import {Link} from "react-router-dom";

import styled from "styled-components";

import {Service} from "../../service-context/service-context";

import {useTypedDispatch, useTypedSelector} from "../../../store/utils";
import {dataCleared} from "../../../store/slices/service-slice";
import {getNextPage, updateCurrentPage} from "../../../store/slices/navigation-slice";
import {hideInformation, setAttributes, toggleInformation} from "../../../store/slices/calculator-slice";

import {AttributesListContainer} from "../../attributes-list/attributes-list-container";
import {InformationSheet} from "../../information-sheet/information-sheet";

export const AttributesSelectionPage: FC = () => {
    const dispatch = useTypedDispatch();
    const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);
    const currentField = useTypedSelector(state => state.attributesReducer.currentField);
    const nextPageURL = useTypedSelector(state => state.navigationReducer.nextPage);
    const attributes = useTypedSelector(state => state.attributesReducer.data);

    const url = window.location.pathname;

    const service = useContext(Service);
    const fetchData = service.fetchAttributes;

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
            <Subtitle>Attributes</Subtitle>

            <Wrapper>
                <AttributesListContainer/>

                <InformationSheet isShown={showInfo}>
                    <Description>
                        <h3>Attributes</h3>
                        <h5>Attributes general description:</h5>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto at deleniti dolor ducimus eaque ex, facere fugit harum id inventore necessitatibus nemo numquam quaerat quos rerum sint, veritatis.
                        </span>
                    </Description>
                    <Description>
                        <h3>{currentField}</h3>
                        <h5>{currentField} description:</h5>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet architecto at deleniti dolor ducimus eaque ex, facere fugit harum id inventore necessitatibus nemo numquam quaerat quos rerum sint, veritatis.
                        </span>
                    </Description>
                </InformationSheet>
            </Wrapper>

            <ButtonsWrapper>
                <InfoButton onClick={() => dispatch(toggleInformation())}>info</InfoButton>
                <SelectButton to={nextPageURL} onClick={() => dispatch(setAttributes(attributes))}>select</SelectButton>
            </ButtonsWrapper>
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
  transition: 3s all;
`;

const Description = styled.div`
  margin-top: 40px;
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  justify-content: space-between;
  width: 30vw;
  margin: 0 auto;
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

const InfoButton = styled.button`
  height: 40px;
  width: 100px;
  background: #E25608;
  color: white;
  border: none;
  text-transform: uppercase;
  align-self: flex-end;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px black;
    background: #ef6725;
  };
  &:active {
    transform: scale(0.9);
  };
`;
