import React from "react";
import "./App.css";
import Card from "./components/card";
import Header from "./components/header";
import { ChakraProvider } from "@chakra-ui/react";
import Pricings from "./components/pricings";

function App() {
  return (
    <ChakraProvider>
      <div className="h-screen w-screen bg-VeryPaleBlue bg-[url('/src/assets/bg-pattern.svg')] bg-no-repeat bg-contain">
        <div className="flex flex-col items-center">
          <Header />
          <Card>
            <Pricings />
          </Card>
        </div>
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Your Name Here</a>.
        </div>
      </div>
    </ChakraProvider>
  );
}

export default App;
