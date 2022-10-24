import React from "react";
import MainHeader from "../../shared/main-header";
import InspectionsList from "./inspections-list";

type Props = {};

const InspectionsPage: React.FC<Props> = ({}) => {
  return (
    <>
      <MainHeader title="Inespections" />
      <InspectionsList />
    </>
  );
};

export default InspectionsPage;
