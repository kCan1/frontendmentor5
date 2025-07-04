import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Card from "./components/Card";

function App() {
  return (
    <>
      <main className="min-h-screen flex justify-center w-full bg-[hsl(30,38%,92%)]">
        <article
          id="product"
          className="w-full flex justify-center items-center p-10"
        >
          <Card />
        </article>
      </main>
    </>
  );
}

export default App;
