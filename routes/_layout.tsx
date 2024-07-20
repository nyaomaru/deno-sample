import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
    // do something with state here
    return (
        <div class="px-4 py-8 mx-auto bg-cyan-300 h-screen">
            <Component />
        </div>
    );
}
