import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="px-4 py-8 mx-auto bg-cyan-300 h-screen">
      <Component />
    </div>
  );
}
