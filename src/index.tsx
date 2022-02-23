import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

import {store} from "./store/store";

import TestService from "./services/test-service";
import {Service} from "./components/service-context/service-context";

import {App} from "./components/app/app";

import "normalize.css";
import "./index.css";

const service = new TestService();

ReactDOM.render(
    <Provider store={store}>
        <Service.Provider value={service}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Service.Provider>
    </Provider>,
    document.getElementById('root')
);
