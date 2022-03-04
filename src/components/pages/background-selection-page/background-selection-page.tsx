import React, { FC, useContext } from "react";

import { CardPageProps } from "../../../utils/types";
import { Service } from "../../service-context/service-context";
import { CardsPage } from "../cards-page";

export const BackgroundSelectionPage: FC<CardPageProps> = ({ fieldKey }) => {
  const { fetchBackgrounds } = useContext(Service);

  return (
    <CardsPage
      fieldKey={fieldKey}
      fetchData={fetchBackgrounds}
      label={"Background"}
    />
  );
};
