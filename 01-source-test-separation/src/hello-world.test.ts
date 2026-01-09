import { expect, test } from "vitest";
import { helloWorld } from "./hello-world";

test("helloWorld function", () => {
  expect(helloWorld()).toBe("Hello World");
});

