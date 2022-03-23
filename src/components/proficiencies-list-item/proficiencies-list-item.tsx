import React, {FC} from "react";

import styled from "styled-components";

interface ProficienciesListItemProps {
    name: string;
    setVisibleItems: Function;
}

export const ProficienciesListItem: FC<ProficienciesListItemProps> = (props) => {
    return (
        <ListItem onClick={() => props.setVisibleItems()}>
            <Span>{props.name}</Span>
            <Indicator/>
        </ListItem>
    );
};

const ListItem = styled.li`
  box-sizing: border-box;
  padding: 5px 15px;
  margin-bottom: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    outline: 1px solid black;
  };
`;

const Span = styled.span`
  font-size: 14px;
  line-height: 14px;
  color: white;
`;

const Indicator = styled.div`
  height: 10px;
  width: 10px;
  border: 1px solid black;
  border-radius: 100%;
  background-color: white;
`;
