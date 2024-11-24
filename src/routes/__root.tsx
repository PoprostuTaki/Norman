import Footer from "@/components/footer";
import Header from "@/components/header";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Outlet />
      <Footer />
      <TanStackRouterDevtools />
    </div>
  ),
});
