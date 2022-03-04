import React from "react";
import TestService from "../../services/test-service";

export const Service = React.createContext<TestService>(new TestService());
