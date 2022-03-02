import React, {FC} from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import styled from "styled-components";

import {AppHeader} from "../app-header/app-header";
import {AppFooter} from "../app-footer/app-footer";
import {RaceSelectionPage} from "../pages/race-selection-page/race-selection-page";
import {ClassSelectionPage} from "../pages/class-selection-page/class-selection-page";
import {BackgroundSelectionPage} from "../pages/background-selection-page/background-selection-page";

export const App: FC = () => {
    return (
        <>
            <AppHeader/>
            <Main>
                <Routes>
                    <Route path="/" element={<Navigate to='/race-selection'/>}/>
                    <Route path="/race-selection" element={<RaceSelectionPage fieldKey={'race'}/>}/>
                    <Route path="/class-selection" element={<ClassSelectionPage fieldKey={'class'}/>}/>
                    <Route path="/background-selection" element={<BackgroundSelectionPage fieldKey={'background'}/>}/>
                    <Route path="/stats-selection" element={<h3 style={{textAlign: 'center'}}>Stats selection page</h3>}/>
                    <Route path="/proficiencies-selection" element={<h3 style={{textAlign: 'center'}}>Proficiencies selection page</h3>}/>
                    <Route path="/equipment-selection" element={<h3 style={{textAlign: 'center'}}>Equipment selection page</h3>}/>
                    <Route path="/spells-selection" element={<h3 style={{textAlign: 'center'}}>Spells selection page</h3>}/>
                    <Route path="/character-list" element={<h3 style={{textAlign: 'center'}}>Character list page</h3>}/>
                    <Route path="*" element={<h3 style={{textAlign: 'center'}}>This page does not exist</h3>}/>
                </Routes>
            </Main>
            <AppFooter/>
        </>
    );
};

const Main = styled.main`
  flex: 1 0 auto;
`;
