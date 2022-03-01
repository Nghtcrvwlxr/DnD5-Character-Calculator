import React, {FC} from "react";

import styled from "styled-components";

import {useTypedSelector} from "../../store/utils";
import {useNavigate} from "react-router-dom"

interface ButtonProps {
    isActive: boolean;
    isLocked: boolean;
}

export const AppFooter: FC = () => {
    const navigationState = useTypedSelector(state => state.navigationReducer);

    const navigate = useNavigate();

    let currentIdx = navigationState.pages.findIndex(page => page.url === navigationState.currentPage)

    const elements = navigationState.pages.map((element, idx) => {
        let isActive: boolean;
        let isLocked: boolean;

        isLocked = idx > currentIdx;
        isActive = idx === currentIdx;

        return (
            <Li key={element.id}>
                <Circle
                    onClick={() => navigate(element.url)}
                    isActive={isActive}
                    isLocked={isLocked}/>
            </Li>

        );
    });

    return (
        <footer>
            <nav>
                <Ul>
                    {elements}
                </Ul>
            </nav>
        </footer>
    );
};

const Ul = styled.ul`
  height: 60px;
  width: min-content;
  margin: 0 0 0 15px;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Li = styled.li`
  list-style: none;
  line-height: 0;
`;

const Circle = styled.button<ButtonProps>`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border: 1px solid white;
  border-radius: 100%;
  background-color: #E25608;
  cursor: pointer;
  transition: 1s all;
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 20px #E25608;
  }
  ${props => (props.isActive) ? `
  background-color: #3FA7AE;
  transform: scale(1.15);
  box-shadow: 0 0 20px #3FA7AE;
  ` : `
  background-color: #E25608;
  `};
  ${props => (props.isLocked) ? `
  background-color: #A2A2A2;
  pointer-events: none;
  ` : ``};
`;
