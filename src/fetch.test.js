import { expect, test } from "vitest";
import { createFetchActor, fetchPageOf } from "./fetch";
import { _compose_, _pipe_ } from "./pipe/pipe";

const fetchGooglePage = _compose_([fetchPageOf, "https://google.com"]);

const googleHost = createFetchActor("https://google.com");

const expectPage = ({ path, html }) => {
  expect(path).toBeTypeOf("string");
  expect(html).toBeTypeOf("string");
};



test("fetch from google.com", _pipe_([
  "/",
  googleHost.fetchPage,
  expectPage,
]));


test("fetch from google.com", _pipe_([
  "/",
  fetchGooglePage,
  expectPage,
]));
