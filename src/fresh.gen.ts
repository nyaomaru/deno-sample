// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_slug_ from "./routes/[slug].tsx";
import * as $_404 from "./routes/_404.tsx";
import * as $_500 from "./routes/_500.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $_middleware from "./routes/_middleware.ts";
import * as $about from "./routes/about.tsx";
import * as $api_joke from "./routes/api/joke.ts";
import * as $api_random_uuid from "./routes/api/random-uuid.ts";
import * as $api_users_id_ from "./routes/api/users/[id].ts";
import * as $api_users_index from "./routes/api/users/index.ts";
import * as $chart from "./routes/chart.tsx";
import * as $correctCSP from "./routes/correctCSP.tsx";
import * as $countdown from "./routes/countdown.tsx";
import * as $greet_name_ from "./routes/greet/[name].tsx";
import * as $greet_middleware from "./routes/greet/_middleware.ts";
import * as $index from "./routes/index.tsx";
import * as $partials_about_id_ from "./routes/partials/about/[id].tsx";
import * as $projects_id_ from "./routes/projects/[id].tsx";
import * as $search from "./routes/search.tsx";
import * as $subscribe from "./routes/subscribe.tsx";
import * as $Chart from "./islands/Chart.tsx";
import * as $Countdown from "./islands/Countdown.tsx";
import * as $Counter from "./islands/Counter.tsx";
import * as $NextContentButton from "./islands/NextContentButton.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/[slug].tsx": $_slug_,
    "./routes/_404.tsx": $_404,
    "./routes/_500.tsx": $_500,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/_middleware.ts": $_middleware,
    "./routes/about.tsx": $about,
    "./routes/api/joke.ts": $api_joke,
    "./routes/api/random-uuid.ts": $api_random_uuid,
    "./routes/api/users/[id].ts": $api_users_id_,
    "./routes/api/users/index.ts": $api_users_index,
    "./routes/chart.tsx": $chart,
    "./routes/correctCSP.tsx": $correctCSP,
    "./routes/countdown.tsx": $countdown,
    "./routes/greet/[name].tsx": $greet_name_,
    "./routes/greet/_middleware.ts": $greet_middleware,
    "./routes/index.tsx": $index,
    "./routes/partials/about/[id].tsx": $partials_about_id_,
    "./routes/projects/[id].tsx": $projects_id_,
    "./routes/search.tsx": $search,
    "./routes/subscribe.tsx": $subscribe,
  },
  islands: {
    "./islands/Chart.tsx": $Chart,
    "./islands/Countdown.tsx": $Countdown,
    "./islands/Counter.tsx": $Counter,
    "./islands/NextContentButton.tsx": $NextContentButton,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
