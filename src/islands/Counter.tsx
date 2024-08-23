import { Signal } from "@preact/signals";
import { ComponentChildren } from "preact";
import { Button } from "../components/Button.tsx";
import { Card } from "../components/Card.tsx";

interface Props {
  count: Signal<number>;
  children: ComponentChildren;
}

export default function Counter({ count, children }: Props) {
  return (
    <Card title="Counter">
      <div class="flex gap-8 items-center justify-center">
        <Button onClick={() => count.value -= 1}>-</Button>
        <p class="text-3xl tabular-nums">{count}</p>
        <Button onClick={() => (count.value += 1)}>+</Button>
      </div>
      <div>{children}</div>
    </Card>
  );
}
