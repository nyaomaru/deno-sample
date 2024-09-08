// The purpose of this below line is to pass the test with unstable api.
/// <reference lib="deno.unstable" />

export const kv = await Deno.openKv();
