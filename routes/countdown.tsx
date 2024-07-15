import Countdown from "../islands/Countdown.tsx";

export default function Page() {
    const date = new Date();
    date.setHours(date.getHours() + 1);
    return (
        <div class="px-4 py-8 mx-auto bg-cyan-300 h-screen">
            <article class="prose lg:prose-xl">
                <p>
                    The big event is happening{" "}
                    <Countdown target={date.toISOString()} />.
                </p>
            </article>
        </div>
    );
}
