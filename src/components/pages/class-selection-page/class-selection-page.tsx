import React, {FC, useContext} from "react";

import {Service} from "../../service-context/service-context";

import {CardsPage} from "../cards-page";

export const ClassSelectionPage: FC = () => {
    const service = useContext(Service);
    const fetchClasses = service.fetchClasses;

    const fieldKey: string = 'class';

    return (
        <CardsPage fieldKey={fieldKey} fetchData={fetchClasses} label={'Class'} />
    );
};
