# Public hosting

GitHub Pages Free hosts the static output of this public repository at https://brierfieldpathway.github.io/pathway-public-docs/ with HTTPS. GitHub Actions builds on PRs and publishes only from main. There is no dependency on local Proxmox, CT206, CT120 or a local reverse proxy.

Astro Starlight provides responsive reading, sidebar navigation, accessible themes and client-side search. Node.js 24 is required. Versions are fixed in package.json and a lockfile.

No confidential documents, client records, recovery secrets or unreleased PDFs are included. Future public PDFs require human approval of exact revisions and an independent publication gate.

Rollback: revert the relevant release commit in a reviewed pull request, let GitHub Pages redeploy, and verify the public URL.

GitHub Pages and public repo Actions are available at £0 additional recurring cost, subject to GitHub limits. Changes to DNS, custom domains and existing production websites require separate approval. Cloudflare private hosting remains undecided under issue #12.
