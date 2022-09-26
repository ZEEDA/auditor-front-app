import React, { useContext } from "react";
import { AppContext } from "../../contexts";

type Props = {};

const HomePage = (props: Props) => {
  const {
    state: { auth },
  } = useContext(AppContext);
  return (<>
  <h1>HomePage</h1>
  <p>Welcome: {auth.userData?.username}</p>
  </>
  );
};

export default HomePage;
