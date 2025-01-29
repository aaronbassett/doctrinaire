import content from "@/components/About.mdx";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return <div className="space-y-4 text-center">{content({})}</div>;
}
