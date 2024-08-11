import { useSignal } from "@preact/signals";

interface Props {
  name: string;
}

export default function NextContentButton({ name }: Props) {
  const id = useSignal(0);

  return (
    <a
      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
      href="/about"
      f-partial={`/partials/about/${id}`}
      onClick={() => (id.value += 1)}
    >
      {name}
    </a>
  );
}
