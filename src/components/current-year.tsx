"use client";

// The homepage is statically exported, so a server-rendered year would be
// frozen at build time; the client recomputes it during hydration and
// suppressHydrationWarning absorbs the mismatch after a New Year.
function CurrentYear() {
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}

export { CurrentYear };
