import React, {FC, useContext, useEffect} from "react";
import {Link} from "react-router-dom";

import styled from "styled-components";

import {useTypedDispatch, useTypedSelector} from "../../../store/utils";
import {dataCleared} from "../../../store/slices/service-slice";
import {getNextPage, updateCurrentPage} from "../../../store/slices/navigation-slice";

import {Service} from "../../service-context/service-context";

import {ProficienciesListContainer} from "../../proficiencies-lists/proficiencies-list-container";

export const ProficienciesSelectionPage: FC = () => {
    const dispatch = useTypedDispatch();
    const nextPageURL = useTypedSelector(state => state.navigationReducer.nextPage);

    const url = window.location.pathname;

    const service = useContext(Service);

    useEffect(() => {
        dispatch(updateCurrentPage(url));
        dispatch(getNextPage(url));
        service.fetchSkills(dispatch);
        service.fetchTools(dispatch);
        service.fetchLanguages(dispatch);
        return () => {
            dispatch(dataCleared());
        };
    }, [service, dispatch, url]);

    return (
        <>
            <Subtitle>Proficiencies</Subtitle>

            <Wrapper>
                <ProficienciesListContainer label={'Skills'}/>
                <ProficienciesListContainer label={'Tools'}/>
                <ProficienciesListContainer label={'Languages'}/>
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
  grid-template-columns: repeat(3, 1fr);
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
