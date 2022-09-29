import React, { useEffect } from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import MainContent from "../shared/main-content";
import CenterContent from "../shared/main-content/content-center";
import UserSide from "../shared/main-content/user_side";
import SignOut from "../shared/main-content/user_side/Signout";
import UserActivity from "../shared/main-content/user_side/user_activity";
import UserTeam from "../shared/main-content/user_side/user_team";
import UserInfo from "../shared/main-content/user_side/usr-info";
import MainSidebar from "../shared/main-sidebar";
import Separator from "../shared/separator";

type Props = {
  children: React.ReactNode;
};

const LayoutAside: React.FC<Props> = ({ children }) => {
  const [showInfo, setShowInfo] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowInfo(true);
    }, 1000);
    return () => {
      setShowInfo(false);
    };
  }, []);

  return (
    <>
      <MainSidebar />
      <MainContent>
        <CenterContent>{children}</CenterContent>
        <UserSide>
          <SignOut />
          <UserInfo />
          {showInfo ? (
            <>
              <Separator />
              <UserTeam />
              <Separator />
              <UserActivity />
            </>
          ) : (
            <></>
          )}
        </UserSide>
      </MainContent>
    </>
  );
};

export default LayoutAside;
