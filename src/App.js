import { useState } from "react";
import GlobalStyle from "./globalStyle";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/home";
import Nav from "./components/nav";
function App() {
  const [doorOpen, setDoorOpen] = useState(false);
  return (
    <div className="app">
      <GlobalStyle />
      <Nav doorOpen={doorOpen} />
      <Switch>
        <Route path="/" exact>
          <Home doorOpen={doorOpen} setDoorOpen={setDoorOpen} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
