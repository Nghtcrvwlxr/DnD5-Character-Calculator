import React, {FC, useContext} from "react";

import {Service} from "../../service-context/service-context";

import {CardsPage} from "../cards-page";

export const RaceSelectionPage: FC = () => {
    const service = useContext(Service);
    const fetchRaces = service.fetchRaces;

    const fieldKey: string = 'race';

    return (
        <CardsPage fieldKey={fieldKey} fetchData={fetchRaces} label={'Race'} />
    );
};
