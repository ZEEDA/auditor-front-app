import React, { useState } from "react";
import { TableColumn } from "react-data-table-component";
import DataTable from "../../../shared/datatable-base";
import styles from "./index.module.scss";
import TemplateDropMenu from "./inspection-drop-menu";
type Props = {};
export type InspectionRowData = {
  id: number;
  inspection_name: string;
  template_name: string;
  last_modified: string;
  actions: string;
  score: string;
  status: "inprogress" | "done";
};

const InspectionsList: React.FC<Props> = ({}) => {
  const columns: TableColumn<InspectionRowData>[] = [
    {
      name: "Inspection",
      cell: (row) => (
        <div className="inspc_name_wrapper">
          <p>{row.inspection_name}</p>
          <span>{row.template_name}</span>
        </div>
      ),
      sortable: true,
    },
    {
      name: "Actions",
      selector: (row) => row.actions,
      sortable: true,
      width: "15%",
    },
    {
      name: "Score",
      selector: (row) => row.score,
      sortable: true,
      width: "100px",
    },
    {
      name: "Last Updated",
      selector: (row) => row.last_modified,
      sortable: true,
      width: "15%",
    },
    {
      cell: (row) => (
        <div className="actions-wrapper">
          {row.status == "done" ? (
            <button className="btn btn-main done">View Report</button>
          ) : (
            <button className="btn btn-main">Continue</button>
          )}
          <div className="more">
            <TemplateDropMenu row={row} />
          </div>
        </div>
      ),
      allowOverflow: false,
      button: true,
      width: "160px",
    },
  ];

  const data: InspectionRowData[] = [
    {
      id: 1,
      inspection_name: "10 Sep 2022 / Mohamed ELgafy",
      template_name: "JCI Report",
      last_modified: "28 AUG 2022",
      actions: "2 open",
      score: "25%",
      status: "inprogress",
    },
    {
      id: 2,
      inspection_name: "10 Sep 2022 / Mohamed ELgafy",
      template_name: "JCI Report",
      last_modified: "28 AUG 2022",
      actions: "2 open",
      score: "100%",
      status: "done",
    },
    {
      id: 3,
      inspection_name: "10 Sep 2022 / Mohamed ELgafy",
      template_name: "JCI Report",
      last_modified: "28 AUG 2022",
      actions: "2 open",
      score: "25%",
      status: "inprogress",
    },
    {
      id: 4,
      inspection_name: "10 Sep 2022 / Mohamed ELgafy",
      template_name: "JCI Report",
      last_modified: "28 AUG 2022",
      actions: "2 open",
      score: "25%",
      status: "inprogress",
    },
    {
      id: 5,
      inspection_name: "10 Sep 2022 / Mohamed ELgafy",
      template_name: "JCI Report",
      last_modified: "28 AUG 2022",
      actions: "2 open",
      score: "100%",
      status: "done",
    },
  ];

  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className={styles.tamplates_table_wrapper}>
      <div
        className={`${styles.table_filter} ${
          !!searchQuery ? styles.has_query : ""
        }`}
      >
        <div className="iconic-input">
          <span className="icon">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.7043 15.267L14.3054 12.0899C15.402 10.7801 15.9971 9.16266 15.9948 7.49759C15.9948 6.01471 15.5258 4.56512 14.647 3.33215C13.7683 2.09918 12.5192 1.1382 11.0579 0.570723C9.59657 0.00324856 7.98855 -0.145229 6.43721 0.144067C4.88586 0.433363 3.46085 1.14744 2.34239 2.19599C1.22393 3.24455 0.462254 4.58049 0.153672 6.03488C-0.15491 7.48927 0.00346513 8.99678 0.608771 10.3668C1.21408 11.7368 2.23913 12.9078 3.5543 13.7316C4.86947 14.5554 6.41569 14.9952 7.99743 14.9952C9.77351 14.9972 11.4988 14.4394 12.8958 13.4113L16.2848 16.5978C16.3777 16.6856 16.4883 16.7553 16.6101 16.8029C16.7319 16.8505 16.8626 16.875 16.9945 16.875C17.1265 16.875 17.2572 16.8505 17.379 16.8029C17.5008 16.7553 17.6114 16.6856 17.7043 16.5978C17.798 16.5107 17.8724 16.407 17.9231 16.2928C17.9739 16.1786 18 16.0561 18 15.9324C18 15.8086 17.9739 15.6861 17.9231 15.5719C17.8724 15.4577 17.798 15.3541 17.7043 15.267ZM1.99936 7.49759C1.99936 6.38543 2.35114 5.29824 3.01022 4.37351C3.66929 3.44878 4.60606 2.72804 5.70207 2.30244C6.79807 1.87683 8.00408 1.76548 9.16759 1.98245C10.3311 2.19942 11.3999 2.73498 12.2387 3.52139C13.0775 4.30781 13.6488 5.30977 13.8802 6.40056C14.1117 7.49135 13.9929 8.62198 13.5389 9.64949C13.0849 10.677 12.3162 11.5552 11.3298 12.1731C10.3434 12.791 9.18373 13.1208 7.99743 13.1208C6.40664 13.1208 4.88101 12.5283 3.75615 11.4738C2.6313 10.4192 1.99936 8.98895 1.99936 7.49759Z"
                fill="#86D2FC"
              />
            </svg>
          </span>
          <input
            type="text"
            placeholder="Search for template"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setSearchQuery(e.target.value)
            }
          />
        </div>
        <button className={`btn ${styles.submit_search}`}>Search</button>
        <div className={styles.result_num}>300 results</div>
      </div>
      <div className={styles.table_responsive}>
        <div className={styles.table}>
          <DataTable columns={columns} data={data} highlightOnHover />
        </div>
      </div>
    </div>
  );
};

export default InspectionsList;
