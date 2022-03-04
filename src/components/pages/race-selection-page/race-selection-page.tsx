import React, {FC, useContext} from "react";

import {CardPageProps} from "../../../utils/types";
import {Service} from "../../service-context/service-context";
import {CardsPage} from "../cards-page";

export const RaceSelectionPage: FC<CardPageProps> = ({fieldKey}) => {
    const { fetchRaces } = useContext(Service);

    return (
        <CardsPage fieldKey={fieldKey} fetchData={fetchRaces} label={'Race'} />
    );
};
