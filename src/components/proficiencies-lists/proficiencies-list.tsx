import React, {FC} from "react";

import styled from "styled-components";

import {ProficienciesListItem} from "../proficiencies-list-item/proficiencies-list-item";

import {Skill, Tool, Language} from "../../utils/types";

type Data = Skill[] | Tool[] | Language[];

interface ProficienciesListProps {
    label: string;
    data: Data;
}

export const ProficienciesList: FC<ProficienciesListProps> = (props) => {
    const elements = props.data.map(item => {
        return (
            <ProficienciesListItem key={item.index} name={item.name}/>
        );
    });

    return (
        <List>
            <Subtitle>{props.label}</Subtitle>
            <Span>2 remaining</Span>
            <ItemsWrapper>
                {elements}
            </ItemsWrapper>
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
  margin-bottom: 10px;
  display: block;
  text-align: center;
  color: white;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 20px;
  background: rgba(255, 255, 255, .3);
  height: 90%;
`;
