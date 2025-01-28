import { useState } from "react";
import viteLogo from "/vite.svg";
import daisyUiLogo from "./assets/daisyUI.svg";
import reactLogo from "./assets/react.svg";
import AnimatedButton from "./components/AnimatedButton";
import MotionIcon from "./components/MotionIcon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="mockup-browser mx-auto mt-30 max-w-5/6 border border-base-400">
      <div className="mockup-browser-toolbar">
        <div className="input">https://github.com/aaronbassett/doctrinaire</div>
      </div>
      <div className="grid place-content-center space-y-10 bg-base-200 py-10">
        <div className="flex items-center justify-center gap-4">
          <a href="https://vite.dev" className="h-20 flex-auto">
            <img src={viteLogo} alt="Vite logo" className="h-full" />
          </a>
          <a href="https://react.dev" className="h-20 flex-auto">
            <img src={reactLogo} alt="React logo" className="h-full" />
          </a>
          <a href="https://v5.daisyui.com/" className="h-20 flex-auto">
            <img src={daisyUiLogo} alt="daisyUI logo" className="h-full" />
          </a>
          <a href="https://motion.dev/" className="h-20 flex-auto">
            <MotionIcon />
          </a>
        </div>
        <h1 className="text-center font-bold text-5xl">Vite + React + daisyUI</h1>
        <div className="flex flex-col items-center justify-center space-y-4">
          <AnimatedButton onTap={() => setCount((count) => count + 1)}>
            count is {count}
          </AnimatedButton>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
