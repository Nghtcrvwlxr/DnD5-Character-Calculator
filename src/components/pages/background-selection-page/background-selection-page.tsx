import React, {FC, useContext} from "react";

import {Service} from "../../service-context/service-context";

import {CardsPage} from "../cards-page";

export const BackgroundSelectionPage: FC = () => {
    const service = useContext(Service);
    const fetchBackgrounds = service.fetchBackgrounds;

    const fieldKey: string = 'background';

    return (
        <CardsPage fieldKey={fieldKey} fetchData={fetchBackgrounds} label={'Background'} />
    );
};
