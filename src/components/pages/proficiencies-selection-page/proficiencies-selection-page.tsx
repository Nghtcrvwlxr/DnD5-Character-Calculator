import React, {FC, useEffect} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../../store/utils";
import {dataCleared} from "../../../store/slices/service-slice";
import {getNextPage, updateCurrentPage} from "../../../store/slices/navigation-slice";

import {ProficienciesList} from "../../proficiencies-lists/proficiencies-list";

export const ProficienciesSelectionPage: FC = () => {
    const dispatch = useTypedDispatch();
    const nextPageURL = useTypedSelector(state => state.navigationReducer.nextPage);

    const url = window.location.pathname;

    useEffect(() => {
        dispatch(updateCurrentPage(url));
        dispatch(getNextPage(url));
        return () => {
            dispatch(dataCleared());
        };
    }, [dispatch, url]);

    const testData = [
        {index: '1', label: 'Test'},
        {index: '2', label: 'Test'},
        {index: '3', label: 'Test'},
    ];

    return (
        <>
            <Subtitle>Proficiencies</Subtitle>

            <Wrapper>
                <ProficienciesList label={'Skills'} data={testData}/>
                <ProficienciesList label={'Languages'} data={testData}/>
                <ProficienciesList label={'Tools'} data={testData}/>
                <ProficienciesList label={'Weapons'} data={testData}/>
                <ProficienciesList label={'Armor'} data={testData}/>
            </Wrapper>

            <ButtonsWrapper>
                <SelectButton to={nextPageURL}>select</SelectButton>
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
  display: grid;
  padding: 0 50px;
  grid-template-columns: repeat(5, 1fr);
`;

const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 0;
  transform: translateX(-50%);
  left: 50%;
  display: flex;
  justify-content: space-between;
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
