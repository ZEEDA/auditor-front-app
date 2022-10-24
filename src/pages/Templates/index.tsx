import React from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import MainHeader from "../../shared/main-header";
import styles from "./index.module.scss";
import TemplatesList from "./tempates-list";

type Props = {};

const TemplatesPage: React.FC<Props> = ({}) => {
  return (
    <>
      <MainHeader title="Templates" />
      <Link to='/templates/add' className={`btn ${styles.add_new}`}>
        <span className={styles.icon}>+</span>
        <span className={styles.text}>New template</span>
      </Link>
      <TemplatesList />
    </>
  );
};

export default TemplatesPage;
