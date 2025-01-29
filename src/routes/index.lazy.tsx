import daisyUiLogo from "@/assets/daisyUI.svg";
import reactLogo from "@/assets/react.svg";
import AnimatedButton from "@/components/AnimatedButton";
import MotionIcon from "@/components/MotionIcon";
import { Skeleton } from "@/components/ui/skeleton";
import useCount from "@/state/count";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import viteLogo from "/vite.svg";

const Index = () => {
  const { count, inc } = useCount();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="flex items-center justify-center gap-4">
        {isLoading ? (
          <>
            <Skeleton className="h-15 w-30 flex-auto" />
            <Skeleton className="h-15 w-30 flex-auto" />
            <Skeleton className="h-15 w-30 flex-auto" />
            <Skeleton className="h-15 w-30 flex-auto" />
          </>
        ) : (
          <>
            <a href="https://vite.dev" className="h-15 flex-auto">
              <img src={viteLogo} alt="Vite logo" className="h-full" />
            </a>
            <a href="https://react.dev" className="h-15 flex-auto">
              <img src={reactLogo} alt="React logo" className="h-full" />
            </a>
            <a href="https://v5.daisyui.com/" className="h-15 flex-auto">
              <img src={daisyUiLogo} alt="daisyUI logo" className="h-full" />
            </a>
            <a href="https://motion.dev/" className="h-15 flex-auto">
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
          <h1 className="mb-4 text-center font-bold text-3xl">Vite + React + daisyUI</h1>
          <div className="flex flex-col items-center justify-center space-y-4">
            <AnimatedButton onTap={inc}>count is {count}</AnimatedButton>
            <p className="text-xs">
              Edit <code>src/routes/index.lazy.tsx</code> and save to test HMR
            </p>
          </div>
        </>
      )}
    </>
  );
};

export const Route = createLazyFileRoute("/")({
  component: Index,
});
