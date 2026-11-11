# LA News review fonts

Self-hosted, subsetted variable WOFF fonts:

- `la-sans.woff`: Inter by The Inter Project Authors. Source: https://github.com/google/fonts/tree/main/ofl/inter
- `la-han.woff`: Noto Sans SC by Adobe / Google. Source: https://github.com/google/fonts/tree/main/ofl/notosanssc

Both are distributed under the SIL Open Font License 1.1; the original copyright notices and complete licenses accompany these files.
Internal family names are LA Sans / LA Han to distinguish the subset derivatives from the original families.
The Latin subset covers Latin and punctuation. The Chinese subset covers current interface and dataset characters, common punctuation and Latin; future unsupported characters fall back to the user's system Chinese font without losing content.
Fonts use font-display:swap. This review branch does not depend on Google Fonts runtime requests.
