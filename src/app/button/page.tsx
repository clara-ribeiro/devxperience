import type { Metadata } from "next";
import { Button } from "@/components/atoms/Button";

export const metadata: Metadata = {
  title: "Button Example",
  description: "Page demonstrating the Button atom",
};

export default function ButtonExamplePage() {
  return (
    <div style={{ padding: 24 }}>
      <h1 style={{ marginBottom: 16 }}>Button example</h1>
      <div style={{ display: "flex", gap: 12 }}>
        <Button>Primary</Button>
        <Button variant="ghost">Ghost</Button>
        <Button size="lg">Large</Button>
      </div>
    </div>
  );
}


