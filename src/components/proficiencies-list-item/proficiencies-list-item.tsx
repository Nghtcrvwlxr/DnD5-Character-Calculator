import React, {FC} from "react";

import styled from "styled-components";

interface ProficienciesListItemProps {
    label: string;
}

export const ProficienciesListItem: FC<ProficienciesListItemProps> = (props) => {
    return (
        <ListItem>
            <Span>{props.label}</Span>
            <input type="checkbox"/>
        </ListItem>
    );
};

const ListItem = styled.div`
  box-sizing: border-box;
  padding: 5px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    outline: 1px solid black;
  };
`;

const Span = styled.span`
  font-size: 18px;
  line-height: 18px;
  color: white;
`;
