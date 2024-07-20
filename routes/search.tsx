import { Handlers, PageProps } from "$fresh/server.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
    results: string[];
    query: string;
}

export const handler: Handlers<Data> = {
    GET(req, ctx) {
        const url = new URL(req.url);
        const query = url.searchParams.get("q") || "";
        const results = NAMES.filter((name) => name.includes(query));
        return ctx.render({ results, query });
    },
};

export default function Page({ data }: PageProps<Data>) {
    const { results, query } = data;
    return (
        <>
            <h1 class="text-4xl font-bold">Search</h1>
            <form class="mt-4">
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    name="q"
                    value={query}
                />
                <div class="mt-4">
                    <button
                        type="submit"
                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Search
                    </button>
                </div>
            </form>
            <div class="mt-4">
                <article class="prose lg:prose-xl">
                    <h2>
                        Result
                    </h2>
                    <ul>
                        {results.map((name) => <li key={name}>{name}</li>)}
                    </ul>
                </article>
            </div>
        </>
    );
}
