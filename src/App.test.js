import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import App from "./App";
import { cv } from "./content_option";

const html = renderToStaticMarkup(<App />);

test("has exactly one h1, holding the name from the CV", () => {
  const headings = html.match(/<h1[\s>][\s\S]*?<\/h1>/g);
  expect(headings).toHaveLength(1);
  expect(headings[0].replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim()).toBe(
    "Saeid Asgharian Shirvan"
  );
});

test("every PDF link points to the current CV", () => {
  const pdfLinks = html.match(/href="[^"]*\.pdf"/g);
  expect(pdfLinks.length).toBeGreaterThanOrEqual(5);
  pdfLinks.forEach((link) => expect(link).toBe(`href="${cv.url}"`));
});

test("has no contact form and no details from the old CV", () => {
  expect(html).not.toMatch(/<form/);
  expect(html).not.toMatch(/studenti\.unipd\.it/);
  expect(html).not.toMatch(/Saeid_Asgharian_CV/);
});
