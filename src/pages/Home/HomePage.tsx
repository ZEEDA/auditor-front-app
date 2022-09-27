import React, { useContext } from "react";
import { AppContext } from "../../contexts";
import MainContent from "./../../shared/main-content";
import ContentCenter from "./../../shared/main-content/content-center";
import MainSidebar from "../../shared/main-sidebar";
import MainHeader from "../../shared/main-header";
import UserSide from "../../shared/main-content/user_side";
import SignOut from "../../shared/main-content/user_side/Signout";
import UserInfo from "../../shared/main-content/user_side/usr-info";
import Separator from "../../shared/separator";
type Props = {};

const HomePage: React.FC = (props: Props) => {
  const {
    state: { auth },
  } = useContext(AppContext);
  return (
    <>
      <MainSidebar />
      <MainContent>
        <ContentCenter>
          <MainHeader />
        </ContentCenter>
        <UserSide>
          <SignOut />
          <UserInfo />
          <Separator />
        </UserSide>
      </MainContent>
    </>
  );
};

export default HomePage;
