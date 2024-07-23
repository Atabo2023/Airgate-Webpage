import React from "react";
import Home from "./Home";
import Textcontent from "./Textcontent";
import Icons from "./Icons";
import Grid from "./Grid";
import Connect from "./Connect";
import Faqs from "./Faqs";
import Prefooter from "./Prefooter";

const App = () => {
  return (
    <>
      <Home />
      <Icons />
      <Textcontent />
      <Grid />
      <Connect />
      <Faqs />
      <Prefooter />
      {/* <div className="text-3xl font-bold text-blue-500">Hello World</div> */}
    </>
  );
};

export default App;
