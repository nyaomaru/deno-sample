import { defineRoute } from "$fresh/server.ts";
import Countdown from "../islands/Countdown.tsx";

export default defineRoute(async (req, ctx) => {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <article class="prose lg:prose-xl">
            <p>
                The big event is happening{" "}
                <Countdown target={date.toISOString()} />.
            </p>
        </article>
    );
});
