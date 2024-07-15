import { Handlers } from "$fresh/server.ts";

export const handler: Handlers = {
    async GET(_req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello");
        return resp;
    },
};

export default function AboutPage() {
    return (
        <main>
            <div class="px-4 py-8 mx-auto bg-cyan-300 h-screen">
                <h1>About</h1>
                <p>This is the about page.</p>
            </div>
        </main>
    );
}
