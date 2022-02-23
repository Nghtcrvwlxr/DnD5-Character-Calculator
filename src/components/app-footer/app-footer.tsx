import React, {FC} from "react";

import styled from "styled-components";

interface Button {
    id: number;
    active: boolean;
    locked: boolean;
}

interface ButtonProps {
    isActive: boolean;
    isLocked: boolean;
}

export const AppFooter: FC = () => {
    const buttons: Button[] = [
        {id: 1, active: false, locked: false},
        {id: 2, active: true, locked: false},
        {id: 3, active: false, locked: true},
        {id: 4, active: false, locked: true},
        {id: 5, active: false, locked: true},
        {id: 6, active: false, locked: true},
        {id: 7, active: false, locked: true},
        {id: 8, active: false, locked: true},
        {id: 9, active: false, locked: true},
        {id: 10, active: false, locked: true}
    ];

    const elements = buttons.map((element) => {
        return (
            <Li key={element.id}>
                <Circle
                    key={element.id}
                    isActive={element.active}
                    isLocked={element.locked}>
                </Circle>
            </Li>
        );
    });

    return (
        <footer>
            <Wrapper>
                <nav>
                    <Ul>
                        {elements}
                    </Ul>
                </nav>
            </Wrapper>
        </footer>
    );
};

const Wrapper = styled.div`
  height: 60px;
  text-align: center;
  width: 400px;
  margin-left: 50px;
  color: white;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Li = styled.li`
  list-style: none;
`;

const Circle = styled.button<ButtonProps>`
  height: 30px;
  width: 30px;
  border: 1px solid white;
  border-radius: 100%;
  background-color: #E25608;
  transition: 1s all;
  ${props => (props.isActive) ? `
  background-color: #3FA7AE;
  transform: scale(1.1);
  ` : `
  background-color: #E25608;
  `};
  ${props => (props.isLocked) ? `
  background-color: #A2A2A2;
  ` : ``};
`;
