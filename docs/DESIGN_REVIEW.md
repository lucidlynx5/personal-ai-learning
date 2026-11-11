# LA News · Editorial typography review

Branch: `design/editorial-typography-v3`
Baseline: `51bcb1af7cc94b29bbcb94d18a95cfcee609c201`
Main website remains https://lucidlynx5.github.io/personal-ai-learning/ .
This branch must not be merged or deployed to that website until the user approves the design.

## Changes

- Remove the visible Competition Index heading and Share Index button, as well as the redundant top overview strip.
- Keep the name, source directory and explicit 中文 / English switch in the masthead.
- Move update cadence, last update date and update notes to the footer.
- Replace the accumulated CSS overrides with one type and spacing system.
- Self-host Inter-derived LA Sans and Noto Sans SC-derived LA Han variable subsets, with OFL attribution. No runtime Google Fonts requests.
- Typography: 22px English / 20px Chinese titles, 16px body, 13px metadata; responsive sizes stay legible rather than shrinking every label.
- Use consistent columns for row number, content and deadline; lighter separators, fixed row spacing and clearer grouping.
- Replace green with restrained cobalt (#2855e8), used for update labels, active counts, focus and interaction feedback.
- Retain search, all filter combinations, bilingual content, local favorites, detail sharing, unknown entry status, source links and date logic.

## Review preview

An isolated, owner-private Sites copy is used only for design review. It does not replace GitHub Pages, change main, or add another automatic update task.
Preview URL: https://la-news-editorial-review.dingwen-wu.chatgpt.site

The preview is owner-private; sign in with the same ChatGPT account. Deployment was confirmed successful by Sites.
Preview source is a snapshot of this branch; existing production updates continue to target GitHub main only.

## Verification

Data, date boundaries, unknown-entry status, filtering, translations, static assets, HTML structure, fonts and JavaScript syntax are checked.
Browser visual/interaction QA is unavailable in this managed environment because its required cua_repl.js controller is absent. Do not report browser screenshots or browser tests as completed.

## Approval

Draft only. No merge to main before user approval. Changes can be compared against the baseline in the draft PR.
