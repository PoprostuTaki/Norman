import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="bg-orange-300 flex-1">
      <div className="container">Welcome Home!</div>
    </main>
  );
}
