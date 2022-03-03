import React, {FC, useContext} from "react";

import {Service} from "../../service-context/service-context";

import {CardPageProps} from "../../../utils/types";
import {CardsPage} from "../cards-page";

export const BackgroundSelectionPage: FC<CardPageProps> = ({fieldKey}) => {
    const service = useContext(Service);
    const fetchBackgrounds = service.fetchBackgrounds;

    return (
        <CardsPage fieldKey={fieldKey} fetchData={fetchBackgrounds} label={'Background'} />
    );
};
