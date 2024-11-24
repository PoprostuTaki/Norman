import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/product-list")({
  component: ProductList,
});

function ProductList() {
  return (
    <main className="bg-green-200 flex-1">
      <div className="container">Hello from Products!</div>
    </main>
  );
}
