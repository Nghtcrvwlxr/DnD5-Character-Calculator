import React, { FC, useContext } from "react";

import { CardPageProps } from "../../../utils/types";
import { Service } from "../../service-context/service-context";
import { CardsPage } from "../cards-page";

export const ClassSelectionPage: FC<CardPageProps> = ({ fieldKey }) => {
    const { fetchClasses } = useContext(Service);

    return (
      <CardsPage fieldKey={fieldKey} fetchData={fetchClasses} label={"Class"} />
    );
};
