import Navbar from "@/components/Navbar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="mockup-browser mx-auto mt-30 max-w-5/6 border border-base-400">
      <div className="mockup-browser-toolbar">
        <div className="input">https://github.com/aaronbassett/doctrinaire</div>
      </div>
      <Navbar />
      <div className="grid min-h-96 place-content-center space-y-10 bg-base-200 py-10">
        <Outlet />
        <TanStackRouterDevtools />
      </div>
    </div>
  ),
});
