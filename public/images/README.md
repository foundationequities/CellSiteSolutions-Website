# Images

Localized site images live here, mirroring the original `wp-content/uploads/...`
sub-paths where practical. Download every image from the live site (including the
homepage partner logos formerly served from `fzl.jwb.temporary.site`) and place
them here, then reference via `next/image` from `/images/...`.

This could not be automated in the build environment because outbound network
access to the live site was blocked by policy. See MIGRATION-PLAN / CLAUDE.md Phase 2.
