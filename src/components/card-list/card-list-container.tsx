import React, { FC } from "react";
import styled from "styled-components";

import { useTypedSelector } from "../../store/utils";
import { ErrorIndicator } from "../error-indicator/error-indicator";
import { LoadingIndicator } from "../loading-indicator/loading-indicator";
import { CardList } from "./card-list";

interface CardListContainerProps {
  fieldKey: string;
  currentField: string;
}

export const CardListContainer: FC<CardListContainerProps> = props => {
  const { loading, data, error } = useTypedSelector(state => state.serviceReducer);
  const showInfo = useTypedSelector(state => state.calculatorReducer.showInfo);

  if (loading) {
    return (
      <LoadingWrapper>
        <LoadingIndicator />
      </LoadingWrapper>
    );
  }
  if (error) {
    return (
      <ErrorWrapper>
        <ErrorIndicator />
      </ErrorWrapper>
    );
  }
  return (
    <CardList
      data={data}
      fieldKey={props.fieldKey}
      currentField={props.currentField}
      showInfo={showInfo}
    />
  );
};

const LoadingWrapper = styled.div`
  grid-column: 2;
  grid-row-start: 2;
`;

const ErrorWrapper = styled.div`
  grid-column: 2;
  grid-row-start: 2;
  color: red;
`;
