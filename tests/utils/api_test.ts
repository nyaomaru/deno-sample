import * as modAssertEqual from "https://deno.land/std@0.224.0/assert/assert_equals.ts";
import * as modAssertThrows from "https://deno.land/std@0.224.0/assert/assert_throws.ts";
import { getUserKey, handleUserNotFound, statusCheck } from "#src/utils/api.ts";

Deno.test("statusCheck", async (t) => {
  await t.step("#1 throws error when status is falsy", () => {
    modAssertThrows.assertThrows(
      () => statusCheck(null as unknown as Deno.KvCommitResult),
      Error,
      "Something went wrong.",
    );
  });

  await t.step("#2 does not throw when status is truthy", () => {
    const mockStatus = {} as Deno.KvCommitResult;
    statusCheck(mockStatus);
  });
});

Deno.test("getUserKey returns correct user key", () => {
  const id = "123";
  const expectedKey = ["user", "123"];
  modAssertEqual.assertEquals(getUserKey(id), expectedKey);
});

Deno.test("handleUserNotFound returns correct response", async () => {
  const id = "123";
  const response = handleUserNotFound(id);
  modAssertEqual.assertEquals(response.status, 200);

  const bodyText = await response.text();
  modAssertEqual.assertEquals(bodyText, `No user with id ${id} found`);
});
