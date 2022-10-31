import { useContext, useEffect, useState } from "react";
import { AppContext } from "./contexts";
import RootRouter from "./routes";

import { AUTH_CHECK, THEME_CHECK } from "./utils/strings";

function App() {
  const [loading, setLoading] = useState(true);
  const {
    state: { auth },
    dispatch,
  } = useContext(AppContext);

  useEffect(() => {
    dispatch({ type: AUTH_CHECK });
    dispatch({ type: THEME_CHECK });
  }, []);

  useEffect(() => {
    if (auth.token !== undefined) {
      setLoading(false);
    }
    return () => {};
  }, [auth]);
  console.log("State: ", auth);

  return loading ? <>"Loading..."</> : <RootRouter auth={auth} />;
}

export default App;
