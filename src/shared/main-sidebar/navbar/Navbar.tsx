import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../index.module.scss";
type navItemType = {
  title: string;
  icon: string;
  url: string;
};
const Navbar: React.FC = ({}) => {
  const navList: navItemType[] = [
    {
      title: "Dashboard",
      icon: `<svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M30 37.5L38.75 28.75"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50.75 45C51.75 42.5 52.5 39.5 52.5 36.5C52.5 24.5 42.5 15 30 15C17.5 15 7.5 24.5 7.5 36.5C7.5 39.5 8.25 42.5 9.25 45"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>`,
      url: "/dashboard",
    },
    {
      title: "Notifications",
      icon: `
            <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
              d="M33 14.6667C33 11.7493 31.8411 8.9514 29.7782 6.8885C27.7153 4.8256 24.9174 3.66667 22 3.66667C19.0826 3.66667 16.2847 4.8256 14.2218 6.8885C12.1589 8.9514 11 11.7493 11 14.6667C11 27.5 5.5 31.1667 5.5 31.1667H38.5C38.5 31.1667 33 27.5 33 14.6667Z"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M25.1717 38.5C24.8494 39.0556 24.3867 39.5169 23.8301 39.8375C23.2735 40.1581 22.6424 40.3268 22 40.3268C21.3576 40.3268 20.7266 40.1581 20.1699 39.8375C19.6133 39.5169 19.1507 39.0556 18.8283 38.5"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            </svg>      
      `,
      url: "/notifications",
    },
    {
      title: "Templates",
      icon: `
            <svg
            width="45"
            height="45"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.375 5.625H5.625V18.75H39.375V5.625Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M39.375 26.25H30V39.375H39.375V26.25Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 26.25H5.625V39.375H22.5V26.25Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>      
      `,
      url: "/templates",
    },
    {
      title: "Inspection",
      icon: `
            <svg
            width="32"
            height="39"
            viewBox="0 0 32 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.1667 1H10.1667C9.15415 1 8.33334 1.82081 8.33334 2.83333V6.5C8.33334 7.51252 9.15415 8.33333 10.1667 8.33333H21.1667C22.1792 8.33333 23 7.51252 23 6.5V2.83333C23 1.82081 22.1792 1 21.1667 1Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M23 4.66667H26.6667C27.6391 4.66667 28.5718 5.05298 29.2594 5.74061C29.947 6.42825 30.3333 7.36088 30.3333 8.33334V34C30.3333 34.9725 29.947 35.9051 29.2594 36.5927C28.5718 37.2804 27.6391 37.6667 26.6667 37.6667H4.66667C3.69421 37.6667 2.76158 37.2804 2.07394 36.5927C1.38631 35.9051 1 34.9725 1 34V8.33334C1 7.36088 1.38631 6.42825 2.07394 5.74061C2.76158 5.05298 3.69421 4.66667 4.66667 4.66667H8.33333"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.1667 23L13.8333 26.6667L21.1667 19.3333"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>      
      `,
      url: "/inspection",
    },
    {
      title: "Schaduale",
      icon: `
            <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.4583 6.83334H8.54167C6.65469 6.83334 5.125 8.36303 5.125 10.25V34.1667C5.125 36.0536 6.65469 37.5833 8.54167 37.5833H32.4583C34.3453 37.5833 35.875 36.0536 35.875 34.1667V10.25C35.875 8.36303 34.3453 6.83334 32.4583 6.83334Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.3333 3.41666V10.25"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.6667 3.41666V10.25"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.125 17.0833H35.875"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.6667 23.9167H13.6837"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 23.9167H20.5171"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.3333 23.9167H27.3504"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.6667 30.75H13.6837"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20.5 30.75H20.5171"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M27.3333 30.75H27.3504"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>      
      `,
      url: "/schaduale",
    },
    {
      title: "settings",
      icon: `
            <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.33 3H17.67C16.8744 3 16.1113 3.31607 15.5487 3.87868C14.9861 4.44129 14.67 5.20435 14.67 6V6.27C14.6695 6.79609 14.5306 7.31278 14.2673 7.76826C14.004 8.22373 13.6256 8.60196 13.17 8.865L12.525 9.24C12.0689 9.5033 11.5516 9.64192 11.025 9.64192C10.4984 9.64192 9.98106 9.5033 9.525 9.24L9.3 9.12C8.6116 8.72289 7.79376 8.61517 7.02601 8.82046C6.25825 9.02576 5.60333 9.5273 5.205 10.215L4.875 10.785C4.4779 11.4734 4.37017 12.2912 4.57546 13.059C4.78076 13.8268 5.28231 14.4817 5.97 14.88L6.195 15.03C6.64842 15.2918 7.02543 15.6676 7.28858 16.1202C7.55173 16.5729 7.69184 17.0865 7.695 17.61V18.375C7.6971 18.9036 7.55948 19.4234 7.29607 19.8818C7.03266 20.3401 6.65282 20.7207 6.195 20.985L5.97 21.12C5.28231 21.5183 4.78076 22.1732 4.57546 22.941C4.37017 23.7088 4.4779 24.5266 4.875 25.215L5.205 25.785C5.60333 26.4727 6.25825 26.9742 7.02601 27.1795C7.79376 27.3848 8.6116 27.2771 9.3 26.88L9.525 26.76C9.98106 26.4967 10.4984 26.3581 11.025 26.3581C11.5516 26.3581 12.0689 26.4967 12.525 26.76L13.17 27.135C13.6256 27.398 14.004 27.7763 14.2673 28.2317C14.5306 28.6872 14.6695 29.2039 14.67 29.73V30C14.67 30.7956 14.9861 31.5587 15.5487 32.1213C16.1113 32.6839 16.8744 33 17.67 33H18.33C19.1257 33 19.8887 32.6839 20.4513 32.1213C21.0139 31.5587 21.33 30.7956 21.33 30V29.73C21.3305 29.2039 21.4694 28.6872 21.7327 28.2317C21.996 27.7763 22.3744 27.398 22.83 27.135L23.475 26.76C23.9311 26.4967 24.4484 26.3581 24.975 26.3581C25.5016 26.3581 26.0189 26.4967 26.475 26.76L26.7 26.88C27.3884 27.2771 28.2062 27.3848 28.974 27.1795C29.7418 26.9742 30.3967 26.4727 30.795 25.785L31.125 25.2C31.5221 24.5116 31.6298 23.6938 31.4245 22.926C31.2192 22.1582 30.7177 21.5033 30.03 21.105L29.805 20.985C29.3472 20.7207 28.9673 20.3401 28.7039 19.8818C28.4405 19.4234 28.3029 18.9036 28.305 18.375V17.625C28.3029 17.0964 28.4405 16.5766 28.7039 16.1182C28.9673 15.6599 29.3472 15.2793 29.805 15.015L30.03 14.88C30.7177 14.4817 31.2192 13.8268 31.4245 13.059C31.6298 12.2912 31.5221 11.4734 31.125 10.785L30.795 10.215C30.3967 9.5273 29.7418 9.02576 28.974 8.82046C28.2062 8.61517 27.3884 8.72289 26.7 9.12L26.475 9.24C26.0189 9.5033 25.5016 9.64192 24.975 9.64192C24.4484 9.64192 23.9311 9.5033 23.475 9.24L22.83 8.865C22.3744 8.60196 21.996 8.22373 21.7327 7.76826C21.4694 7.31278 21.3305 6.79609 21.33 6.27V6C21.33 5.20435 21.0139 4.44129 20.4513 3.87868C19.8887 3.31607 19.1257 3 18.33 3V3Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18 22.5C20.4853 22.5 22.5 20.4853 22.5 18C22.5 15.5147 20.4853 13.5 18 13.5C15.5147 13.5 13.5 15.5147 13.5 18C13.5 20.4853 15.5147 22.5 18 22.5Z"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>      
      `,
      url: "/settings",
    },
  ];
  return (
    <ul className={`${styles.nav_wrapper} main-nav`}>
      {navList.map((item, index) => (
        <li className={`${styles.nav_item} main-item`} key={index}>
          <NavLink to={item.url} className={`${styles.nav_link}`}>
            <span
              className={styles.nav_link_icon}
              dangerouslySetInnerHTML={{ __html: item.icon }}
            ></span>
            <span className={styles.nav_link_text}>{item.title}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
