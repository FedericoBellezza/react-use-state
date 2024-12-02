import { useState } from "react";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";

function App() {
  const [count, setCount] = useState("html");

  return (
    <>
      <Header />
      <Main />
    </>
  );
}

export default App;
