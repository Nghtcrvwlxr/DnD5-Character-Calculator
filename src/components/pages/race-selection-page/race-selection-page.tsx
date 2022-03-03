import React, {FC, useContext} from "react";

import {Service} from "../../service-context/service-context";

import {CardPageProps} from "../../../utils/types";
import {CardsPage} from "../cards-page";

export const RaceSelectionPage: FC<CardPageProps> = ({fieldKey}) => {
    const service = useContext(Service);
    const fetchRaces = service.fetchRaces;

    return (
        <CardsPage fieldKey={fieldKey} fetchData={fetchRaces} label={'Race'} />
    );
};
