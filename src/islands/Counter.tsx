import { useSignal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { Button } from "../components/Button.tsx";
import { Card } from "../components/Card.tsx";

interface Props {
  children: ComponentChildren;
}

export default function Counter({ children }: Props) {
  const count = useSignal(0);

  return (
    <Card title={"Counter"}>
      <div class="flex gap-8">
        <Button onClick={() => count.value -= 1}>-</Button>
        <p class="text-3xl tabular-nums">{count}</p>
        <Button onClick={() => (count.value += 1)}>+</Button>
      </div>
      <div class="mt-4">{children}</div>
    </Card>
  );
}
