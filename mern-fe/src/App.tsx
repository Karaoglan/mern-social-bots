import React, { useEffect, useState } from "react";
import "./App.css";
import { getHello, getList } from "./services/list.js";
import { Card, Container, Toolbar, Typography } from "@material-ui/core";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getList().then(console.log);
    getHello().then(console.log);
  }, []);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <Container component="main" maxWidth="xs">
        <div>
          <Toolbar>
            <Typography variant="h6">Sign In</Typography>
          </Toolbar>
        </div>
        <Card>SELAM</Card>
      </Container>
    </div>
  );
}

export default App;
