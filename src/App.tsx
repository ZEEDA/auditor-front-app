import { useContext, useEffect } from "react";
import { AppContext } from "./contexts";
import RootRouter from "./routes";

import { AUTH_CHECK } from "./utils/strings";

function App() {
  const {
    state: { auth },
    dispatch,
  } = useContext(AppContext);
  useEffect(() => dispatch({ type: AUTH_CHECK }), []);
  return <RootRouter />;
}

export default App;
