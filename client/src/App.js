import { Grommet } from "grommet";
import { BrowserRouter, Route } from "react-router-dom";

import Myform from "./Myform";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>
      <Grommet plain>
        <Navbar />
        <Route path={"/"} exact>
          <Myform />
        </Route>
      </Grommet>
    </BrowserRouter>
  );
}

export default App;
