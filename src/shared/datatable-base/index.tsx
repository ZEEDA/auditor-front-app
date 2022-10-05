import React from "react";
import DataTable, { TableProps } from "react-data-table-component";

const sortIcon = (
  <div style={{ marginInlineStart: "2px" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        fillRule="evenodd"
        d="M8 4a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 1 1 .708-.708L7.5 10.293V4.5A.5.5 0 0 1 8 4z"
      />
    </svg>
  </div>
);
const selectProps = {
  indeterminate: (isIndeterminate: boolean) => isIndeterminate,
};

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  const customStyles = {
    rows: {
      style: {
        minHeight: "60px", // override the row height
      },
    },
    headCells: {
      style: {
        fontWeight: "600",
        fontSize: "16px",
      },
    },
    headRow: {
      style: {
        minHeight: "60px",
        borderBottom: "1px solid #86D2FC",
      },
    },
    cells: {
      style: {
        fontSize: "16px",
        color: "var(--text-color)",
      },
    },
  };
  return (
    <DataTable
      pagination
      selectableRowsComponent={<></>}
      selectableRowsComponentProps={selectProps}
      sortIcon={sortIcon}
      customStyles={customStyles}
      {...props}
    />
  );
}

export default DataTableBase;
