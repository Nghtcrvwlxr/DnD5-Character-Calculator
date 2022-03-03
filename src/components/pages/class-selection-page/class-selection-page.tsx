import React, {FC, useContext} from "react";

import {Service} from "../../service-context/service-context";

import {CardPageProps} from "../../../utils/types";
import {CardsPage} from "../cards-page";

export const ClassSelectionPage: FC<CardPageProps> = ({fieldKey}) => {
    const service = useContext(Service);
    const fetchClasses = service.fetchClasses;

    return (
        <CardsPage fieldKey={fieldKey} fetchData={fetchClasses} label={'Class'} />
    );
};
