import daisyUiLogo from "@/assets/daisyUI.svg";
import reactLogo from "@/assets/react.svg";
import AnimatedButton from "@/components/AnimatedButton";
import MotionIcon from "@/components/MotionIcon";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";

function App() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="mockup-browser mx-auto mt-30 max-w-5/6 border border-base-400">
      <div className="mockup-browser-toolbar">
        <div className="input">https://github.com/aaronbassett/doctrinaire</div>
      </div>
      <div className="grid place-content-center space-y-10 bg-base-200 py-10">
        <div className="flex items-center justify-center gap-4">
          {isLoading ? (
            <>
              <Skeleton className="h-20 w-30 flex-auto" />
              <Skeleton className="h-20 w-30 flex-auto" />
              <Skeleton className="h-20 w-30 flex-auto" />
              <Skeleton className="h-20 w-30 flex-auto" />
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center space-y-4">
            <Skeleton className="h-12 w-full" />
            <Skeleton className="btn btn-lg w-1/4" />
            <Skeleton className="h-6 w-5/6" />
          </div>
        ) : (
          <>
            <h1 className="text-center font-bold text-5xl">Vite + React + daisyUI</h1>
            <div className="flex flex-col items-center justify-center space-y-4">
              <AnimatedButton onTap={() => setCount((count) => count + 1)}>
                count is {count}
              </AnimatedButton>
              <p>
                Edit <code>src/App.tsx</code> and save to test HMR
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
