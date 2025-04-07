import { Readability } from "@mozilla/readability";
import React from "react";
import { JSDOM } from "jsdom";

export default async function Home() {
  const doc = new JSDOM(``, {
    url: "https://example.org/",
    referrer: "https://example.com/",
    contentType: "text/html",
    includeNodeLocations: true,
    storageQuota: 10000000,
  });
  const reader = new Readability(doc.window.document);
  const article = reader.parse();

  return <>{JSON.stringify(article)}</>;
}
