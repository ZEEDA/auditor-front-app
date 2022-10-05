import { Button } from "@mui/material";
import React from "react";
import DataTable from "react-data-table-component";
import MainHeader from "../../shared/main-header";
import styles from "./index.module.scss";
import TemplatesList from "./tempates-list";

type Props = {};

const TemplatesPage: React.FC<Props> = ({}) => {
  return (
    <>
      <MainHeader title="Templates" />
      <button className={`btn ${styles.add_new}`}>
        <span className={styles.icon}>+</span>
        <span className={styles.text}>New template</span>
      </button>
      <TemplatesList />
    </>
  );
};

export default TemplatesPage;
