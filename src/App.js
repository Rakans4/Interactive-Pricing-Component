import React from "react";
import "./App.css";
import Card from "./components/card";
import Header from "./components/header";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Pricings from "./components/pricings";

const theme = extendTheme({
  colors: {
    cyan: {
      500: "#10d5c2",
    },
  },
})
function App() {
  console.log(theme);
  return (
    <ChakraProvider theme={theme}>
      <div className="h-screen w-screen bg-VeryPaleBlue bg-[url('/src/assets/bg-pattern.svg')] bg-no-repeat bg-auto">
        <div className="flex flex-col items-center">
          <Header />
          <Card>
            <Pricings />
          </Card>
        </div>
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/Rakans4/interactive-pricing-component" target="_blank">Rakan</a>.
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
