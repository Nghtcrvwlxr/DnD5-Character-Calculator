import React, { FC } from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export const AppHeader: FC = () => {
  return (
    <header>
      <Title>
        <StyledLink to="/">
          DnD Character Calculator
        </StyledLink>
      </Title>
    </header>
  );
};

const Title = styled.h1`
  margin: 10px auto 0 auto;
  text-align: center;
  font-size: 48px;
  line-height: 65px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;
