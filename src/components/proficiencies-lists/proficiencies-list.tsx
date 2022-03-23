import React, {FC, useState} from "react";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";

import {ProficienciesListItem} from "../proficiencies-list-item/proficiencies-list-item";

import {Skill, Tool, Language} from "../../utils/types";

type Data = Skill[] | Tool[] | Language[];

interface ProficienciesListProps {
    label: string;
    data: Data;
}

export const ProficienciesList: FC<ProficienciesListProps> = (props) => {
    const fields: string[] = ['race', 'class', 'background'];
    const [fieldIndex, setFieldIndex] = useState(0);
    let field = fields[fieldIndex];

    const fieldSwitch = (action: string) => {
        if(fieldIndex < 2 && action === 'inc') {
            setFieldIndex(fieldIndex + 1);
            setVisible(false);
            setSublistData(null);
        }
        if(fieldIndex > 0 && action === 'dec') {
            setFieldIndex(fieldIndex - 1);
            setVisible(false);
            setSublistData(null);
        }
    };

    const currentField = useTypedSelector(state => state.calculatorReducer[field].proficiencies);
    const data = props.data;
    const dataIndex = props.label.toLowerCase();

    const filterData = (array: Data, filters: string[]) => {
        let filteredData: Data = [];
        filters.forEach((filter) => {
            array.forEach((item) => {
                if(filter === 'all') {
                    filteredData.push(item);
                }
                if (item.index === filter) {
                    filteredData.push(item);
                }
            });
        });
        return filteredData;
    };

    const excludeDuplicates = (array: Data, ...duplicates: string[]) => {
        duplicates.forEach((duplicate) => {
            array.forEach((item, index) => {
                if (item.index === duplicate) {
                    array.splice(index, 1);
                }
            });
        });
        return array;
    };

    const renderElements = (array: Data): JSX.Element[] | JSX.Element => {
        if(array.length === 0) {
            return <NoItemsSpan>None</NoItemsSpan>
        }
        return array.map(item => {
            if(item.items) {
                return <ProficienciesListItem key={item.index} name={item.name} setVisibleItems={() => onItemClick(item.items)}/>
            }
            return <ProficienciesListItem key={item.index} name={item.name} setVisibleItems={() => {}}/>
        });
    };

    let passive = filterData(data, currentField[dataIndex].preselected);
    let active = excludeDuplicates(filterData(data, currentField[dataIndex].available.items), ...currentField[dataIndex].preselected);

    const [sublistData, setSublistData] = useState<Data | null>(null);
    const [visible, setVisible] = useState(false);

    const onItemClick = (data: Data | null) => {
        setVisible(!visible);
        if(sublistData) {
            setSublistData(null);
        } else {
            setSublistData(data);
        }
    };

    const passiveElements = renderElements(passive);
    const activeElements = renderElements(active);
    let sublistElements: JSX.Element[] | JSX.Element = [];
    if(sublistData) {
        sublistElements = renderElements(sublistData);
    }

    return (
        <List>
            <Subtitle>{props.label} ({field})</Subtitle>
            <Span>2 remaining</Span>
            <ListWrapper>
                <ItemsWrapper isVisible={visible}>
                    <Span>Passive</Span>
                    {passiveElements}
                </ItemsWrapper>
                <ItemsWrapper isVisible={visible}>
                    <Span>Available</Span>
                    {activeElements}
                </ItemsWrapper>
                {sublistElements}
                <ReturnButton isVisible={visible} onClick={() => onItemClick(null)}>return</ReturnButton>
                <ButtonsWrapper>
                    <PrevButton isVisible={visible} currentIndex={fieldIndex} onClick={() => fieldSwitch('dec')}>{'<'}</PrevButton>
                    <NextButton isVisible={visible} currentIndex={fieldIndex} onClick={() => fieldSwitch('inc')}>{'>'}</NextButton>
                </ButtonsWrapper>
            </ListWrapper>
        </List>
    );
};

const List = styled.div`
  padding: 0 20px;
`;

const Subtitle = styled.h3`
  text-align: center;
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
  color: white;
`;

const Span = styled.span`
  display: block;
  margin-bottom: 5px;
  text-align: center;
  color: white;
`;

const NoItemsSpan = styled.span`
  display: block;
  color: white;
  font-size: 14px;
  margin-left: 15px;
`;

const ListWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  height: 600px;
  background: rgba(255, 255, 255, .3);
`;

interface ItemsWrapperProps {
    isVisible: boolean;
}

const ItemsWrapper = styled.ul<ItemsWrapperProps>`
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: 5px 0 5px 0;
  ${props => (props.isVisible) && `
    display: none;
  `};
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgray;
  border: 1px solid black;
  align-self: center;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 5px black;
    background: white;
  };
  &:active {
    transform: scale(0.9);
  };
`;

interface ReturnButtonProps {
    isVisible: boolean;
}

const ReturnButton = styled(Button)<ReturnButtonProps>`
  display: none;
  margin: 10px auto 0 auto;
  ${props => (props.isVisible) && `
    display: block;
  `};
`;

const ButtonsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
`;

const SwitchButton = styled(Button)`
  height: 30px;
  width: 60px;
  font-size: 25px;
`;

interface SwitchButtonProps {
    currentIndex: number;
    isVisible: boolean;
}

const PrevButton = styled(SwitchButton)<SwitchButtonProps>`
  ${props => (props.isVisible || props.currentIndex === 0) && `
    display: none;
  `};
`;

const NextButton = styled(SwitchButton)<SwitchButtonProps>`
  ${props => (props.isVisible || props.currentIndex === 2) && `
    display: none;
  `};
`;
