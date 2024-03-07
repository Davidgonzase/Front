// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $_layout from "./routes/_layout.tsx";
import * as $add_index from "./routes/add/index.tsx";
import * as $index from "./routes/index.tsx";
import * as $post_id_ from "./routes/post/[id].tsx";
import * as $posts_index from "./routes/posts/index.tsx";
import * as $Counter from "./islands/Counter.tsx";
import { type Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/_layout.tsx": $_layout,
    "./routes/add/index.tsx": $add_index,
    "./routes/index.tsx": $index,
    "./routes/post/[id].tsx": $post_id_,
    "./routes/posts/index.tsx": $posts_index,
  },
  islands: {
    "./islands/Counter.tsx": $Counter,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
