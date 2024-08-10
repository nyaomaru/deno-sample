import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="author" content="nyaomaru" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="This fresh sample brought to you by nyaomaru"
        />
        <meta name="og:title" content="nyaomaru-deno-sample" />
        <meta property="og:locale" content="ja_JP" key="ogLocale" />
        <meta
          property="og:site_name"
          content="nyaomaru-deno-sample"
          key="ogSiteName"
        />
        <meta
          name="og:description"
          content="This fresh sample brought to you by nyaomaru"
        />
        <meta property="og:type" content="website" key="ogType" />
        <meta
          name="apple-mobile-web-app-title"
          content="nyaomaru-deno-sample"
        />
        <title>nyaomaru-deno-sample</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
