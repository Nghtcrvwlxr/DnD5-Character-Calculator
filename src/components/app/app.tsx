import React, {FC} from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import styled from "styled-components";

import {AppHeader} from "../app-header/app-header";
import {AppFooter} from "../app-footer/app-footer";
import {RaceSelectionPage} from "../pages/race-selection-page/race-selection-page";

export const App: FC = () => {
    return (
        <>
            <AppHeader/>
            <Main>
                <Routes>
                    <Route path="/" element={<Navigate to='/1'/>}/>
                    <Route path="/1" element={<RaceSelectionPage/>} />
                    <Route path="/2"/>
                    <Route path="/3"/>
                    <Route path="/4"/>
                    <Route path="/5"/>
                    <Route path="/6"/>
                    <Route path="/7"/>
                    <Route path="/8"/>
                    <Route path="/9"/>
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
