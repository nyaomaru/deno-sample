import { useSignal } from "@preact/signals";

interface Props {
  name: string;
}

export default function NextContentButton({ name }: Props) {
  const id = useSignal(0);

  return (
    <a
      class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none bg-white text-black border-2 border-black hover:border-transparent hover:border-transparent hover:text-white hover:bg-black"
      href="/about"
      f-partial={`/partials/about/${id}`}
      onClick={() => (id.value += 1)}
    >
      {name}
    </a>
  );
}
