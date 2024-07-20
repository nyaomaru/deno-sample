import { Handlers, PageProps } from "$fresh/server.ts";

const loadFooValue = async () => {
    return "nyaomaru";
};

export const handler: Handlers = {
    async GET(_req, ctx) {
        const resp = await ctx.render();
        resp.headers.set("X-Custom-Header", "Hello");
        return resp;
    },
};

export default async function AboutPage(props: PageProps) {
    const value = await loadFooValue();

    return (
        <main>
            <h1>About</h1>
            <p>This is the about page.</p>
            <div>You are on the page '{props.url.href}'.</div>
            <p>foo is: {value}</p>
        </main>
    );
}
