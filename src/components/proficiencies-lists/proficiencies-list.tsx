import React, {FC} from "react";

import styled from "styled-components";

import {ProficienciesListItem} from "../proficiencies-list-item/proficiencies-list-item";

interface ProficienciesListProps {
    label: string;
    data: any[];
}

export const ProficienciesList: FC<ProficienciesListProps> = (props) => {
    const elements = props.data.map(item => {
        return (
            <ProficienciesListItem key={item.index} label={item.label}/>
        );
    });

    return (
        <List>
            <Subtitle>{props.label}</Subtitle>

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

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
`;
