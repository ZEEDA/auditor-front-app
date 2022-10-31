import React, { useContext, useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { Dropdown, Menu, Space, Typography, message } from "antd";
import styles from "./index.module.scss";
import { AppContext } from "../../contexts";
import { THEME_CHECK, THEME_TOGGLE } from "../../utils/strings";

type Props = {};

const ZThemeSwitcher = (props: Props) => {
  const initialTheme = { key: "", icon: <></>, label: "" };
  const darkIcon = (
    <svg
      width="14"
      height="14"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1C8.81342 2.19491 8.14882 3.81141 8.15176 5.49539C8.15471 7.17936 8.82497 8.79353 10.0157 9.98428C11.2065 11.175 12.8206 11.8453 14.5046 11.8482C16.1886 11.8512 17.8051 11.1866 19 10C19 11.78 18.4722 13.5201 17.4832 15.0001C16.4943 16.4802 15.0887 17.6337 13.4442 18.3149C11.7996 18.9961 9.99002 19.1743 8.24419 18.8271C6.49836 18.4798 4.89472 17.6226 3.63604 16.364C2.37737 15.1053 1.5202 13.5016 1.17294 11.7558C0.82567 10.01 1.0039 8.20038 1.68509 6.55585C2.36628 4.91131 3.51983 3.50571 4.99987 2.51677C6.47991 1.52784 8.21997 1 10 1V1Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const lightIcon = (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16V16Z"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0001 8C11.4696 8.53043 11.1716 9.24985 11.1716 10C11.1716 10.7501 11.4696 11.4696 12.0001 12C12.5305 12.5304 13.2499 12.8284 14.0001 12.8284C14.7502 12.8284 15.4696 12.5304 16.0001 12"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 2V4"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 20V22"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.92993 4.92999L6.33993 6.33999"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.6599 17.66L19.0699 19.07"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 12H4"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 12H22"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.33993 17.66L4.92993 19.07"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0699 4.92999L17.6599 6.33999"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
  const menuItems = [
    {
      key: "1",
      label: "Light",
      icon: <span className="icon">{lightIcon}</span>,
    },
    {
      key: "2",
      label: "Dark",
      icon: <span className="icon">{darkIcon}</span>,
    },
  ];
  const {
    state: { theme },
    dispatch,
  } = useContext(AppContext);
  const [currentTheme, setcurrentTheme] = useState(initialTheme);

  useEffect(() => {
    // dispatch({ type: THEME_CHECK });
  }, []);

  useEffect(() => {
    if (!!theme) {
      setcurrentTheme(
        menuItems.filter(
          (i) => i.label.toLocaleLowerCase() == theme.toLowerCase()
        )[0]
      );
    }
    return () => {};
  }, [theme]);

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    message.success({
      content: ` 
      ${menuItems.filter((i) => i.key == e.key)[0].label} 
       theme applied successfully`,
      duration: 2,
      style: {
        marginTop: "32px",
      },
    });
    setcurrentTheme(menuItems.filter((i) => i.key == e.key)[0]);
    dispatch({type: THEME_TOGGLE, payload: menuItems.filter((i) => i.key == e.key)[0].label})
  };
  const menu = (
    <Menu
      className="themeTogglerDropdown"
      onClick={handleMenuClick}
      items={menuItems}
    />
  );
  console.log("=====>Current: ", currentTheme);
  
  return !!currentTheme ? (
    <div className={`theme-toggler ${styles.themToggleWrapper}`}>
      <Dropdown overlay={menu} trigger={["click"]}>
        <div className={styles.currentThemeWrapper}>
          <span className={styles.icon}>{currentTheme.icon}</span>
          Theme
        </div>
      </Dropdown>
    </div>
  ) : (
    <>Loading... {theme}</>
  );
};

export default ZThemeSwitcher;
