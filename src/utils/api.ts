export const statusCheck = (
  status: Deno.KvCommitResult | Deno.KvCommitError,
) => {
  if (!status) throw new Error("Something went wrong.");
};

export const getUserKey = (id: string) => ["user", id];

export const handleUserNotFound = (id: string) =>
  new Response(`No user with id ${id} found`);
