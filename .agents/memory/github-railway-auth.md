---
name: GitHub and Railway authentication
description: Secure fallback used when Replit's GitHub App did not authenticate Git operations.
---

The Replit GitHub App connection may attach successfully without installing usable Git CLI credentials in the running workspace. If HTTPS Git still reports an invalid username or token after reconnecting, do not repeat the same authorization loop.

**Why:** In this project, both the Git pane and shell remained unauthenticated after multiple GitHub App reconnections. A fine-grained token limited to the target repository and Contents read/write, stored only in Replit Secrets, allowed the push.

**How to apply:** Prefer the GitHub App first. If its connection is attached but Git remains unauthenticated, use the secure Secrets flow for a repository-scoped token, never request or expose the token in chat, and recommend revoking it when no longer needed.