---
name: un-observances-weekly
description: Weekly UN International Observances content engine for UshKa. Each Friday it finds the United Nations international days and weeks that fall in the coming Monday–Sunday, researches each one, writes a social carousel per observance using Megan's 8-part framework (Hook with the 2026 theme, Why today, The problem, The context, Why it matters + SDGs, Solutions that work, Call to Action at local/state/federal level, Outro), and builds each one as a draft in Gamma. Use it when Megan says "run the observances", "next week's UN days", "observance content", "International Days content", or when the Friday routine fires.
---

# UN International Observances: weekly social content

You make next week's social content for every **United Nations International Day and Week** and build each one as a **draft** in Gamma for Megan to review.

This skill sits on top of the **UshKa Chief of Staff** skill (`.claude/skills/ushka-chief-of-staff/SKILL.md`). Read it first. Its voice, banned words, brand look, Gamma design instructions and three rules all apply here. The one difference is approved by Megan: **in this weekly loop you go straight to Gamma without waiting for an outline OK.** Everything is still a private draft. Nothing is shared, posted, scheduled or emailed.

## Megan's three rules (unchanged)

1. Never contact anyone. Never set Gamma `sharingOptions`, `emailOptions` or `folderId` unless Megan asks.
2. Never post or publish. Every Gamma is a draft for Megan's review.
3. Never set, quote or suggest a price. Write **ASK ME**.

## Step 1. Work out the week

- Today is normally a Friday. The target week is **the next Monday through the following Sunday** (7 days). If run on any other day, use the next Monday on or after tomorrow.
- Write the range out, for example `Mon 5 Oct 2026 – Sun 11 Oct 2026`.

## Step 2. Find the observances

Source of truth: the UN list at **https://www.un.org/en/observances/list-days-weeks** (and the individual observance pages at `https://www.un.org/en/observances/<slug>`).

1. Try to read the UN list page (WebFetch). If it is blocked or fails, carry on with steps 2–3; say in the weekly summary that un.org could not be reached.
2. Read `references/un-observances-calendar.md` and pull every entry whose date (or week) falls in the target range. Work out floating dates (for example "first Monday of October") for the current year.
3. Check with WebSearch: `"International Day" site:un.org <month> <year>` and the name of each observance with `<year> theme`. Add any new UN day the calendar is missing, and note it in the summary so the calendar file can be updated.

Only include days and weeks **designated by the UN General Assembly or a UN specialized agency** (UNESCO, WHO, FAO, ILO, UNEP and so on). Ignore national days, commercial "days" and awareness days from other bodies, even if search results list them.

A week-long observance (for example World Space Week) gets one piece, placed on its first day in the range.

## Step 3. Research each observance

For each observance, gather and keep the source URL for every fact:

- **Official name and date**, and the UN resolution or agency behind it.
- **The 2026 theme.** Look on the UN observance page, the lead agency's site (for example FAO for World Food Day, WHO for World Mental Health Day) and the UN News site. If no 2026 theme has been announced, use the most recent official theme and mark it `THEME: ASK ME (2026 theme not yet announced; last theme was "…")`.
- **2–3 hard facts** for The Problem and The Context: one headline statistic from the UN, a UN agency, the World Bank, the OECD or a US federal agency (for example the CDC, EPA, BLS or Census Bureau). Every number must have a source. If you can't source a number, write **ASK ME** instead of inventing one.
- **The SDGs it advances.** Use the primary SDGs listed in the calendar, and confirm or adjust them from the official page. Pick 1–3 SDGs, the main one first, and the most relevant SDG target (for example "Target 2.1: end hunger").
- **1–2 solutions that work**: a proven program, policy, business practice or community model with a sourced result (for example "a city cut X by Y% after Z"). Prefer examples small and medium-sized businesses or local communities could copy. No sourced result → describe the approach and write **ASK ME** for the number.
- **US action points** for the Call to Action: real, current levers at the **local** (city, county, school district, local business), **state** (state legislature, governor, state agency) and **federal** (Congress, a federal agency, a named federal program) levels. Prefer actions an individual or a small or medium-sized business can actually take: show up, vote, call, volunteer, buy, change a policy at work, host a conversation. Name specific bills or programs only if you found them in a source; otherwise describe the lever in general terms.

## Step 4. Write the content: the framework

Each observance becomes **one 4:5 Instagram/LinkedIn carousel of 9 cards** (the 8 framework parts plus a Sources card), plus a caption. Write in Megan's voice: bold, focused, fearless. Short sentences, active verbs, sharp questions, outcomes not declarations. No banned words.

| Card | Framework part | What goes on it |
|---|---|---|
| 1 | **Hook: 2026 theme** | Gold eyebrow: `<DATE> · <OBSERVANCE NAME>`. Big serif headline built from the 2026 theme, sharpened into a bold claim or question. One short line underneath. |
| 2 | **Why today / why now** | Why this day exists and why it matters *this* year: the news, the deadline (2030 is four years away), the moment. |
| 3 | **The problem** | One sharp statement of the problem, with one sourced headline number. |
| 4 | **The context** | What is driving it, who it hits hardest, what has been tried. 2–3 short labelled points with thin gold rules. |
| 5 | **Why it matters: the SDGs** | Name the SDG(s) and target. Place the SDG graphic(s) (see Step 5). One line linking the problem to the goal, and one line on why it matters to small and medium-sized businesses and communities. |
| 6 | **Solutions that work** | 1–2 bright spots: what was done, where, and the sourced result. Short labelled points with thin gold rules. End on "It can be done." energy, not a lecture. |
| 7 | **Call to Action: local · state · federal** | Three labelled points, `LOCAL`, `STATE`, `FEDERAL`, each one concrete action. |
| 8 | **Outro** | A sharp question to the reader, and a direct invitation to connect, in Megan's style ("Message me. I'd love to connect."). Small sign-off: `UshKa · Impact, connection, memorable experiences`. |
| 9 | **Sources** | Small text: the sources used, plus the SDG disclaimer: "The content of this publication has not been approved by the United Nations and does not reflect the views of the United Nations or its officials or Member States." and a link to https://www.un.org/sustainabledevelopment/. |

Notes:
- Keep each card to one strong idea: a headline plus no more than about 35 words.
- Mark photo spaces as `PHOTO: UshKa event, [what it should show]` (Chief of Staff rule). Don't use stock photos.

**Caption** (for Megan to paste when she posts it herself), 80–150 words:
- First line: the hook.
- 3–4 short lines covering why now, the problem, the SDG and one solution that works.
- The local/state/federal ask in one line.
- A closing question and an invitation to connect.
- 4–6 hashtags: the official one for the day (for example `#WorldFoodDay`), `#SDGs`, `#SDG<n>`, and 1–3 topical ones.

Before moving on, check every piece for banned words, invented facts and missing sources.

## Step 5. SDG graphics

Read `references/sdg-graphics.md`. It maps each SDG (1–17, plus the colour wheel) to the image URL Megan has provided.

- If an SDG has a URL, put it in card 5 as a Markdown image on its own line: `![SDG 2: Zero Hunger](<url>)`. Use the full official icon: never crop it, recolour it or put text on it (UN SDG icon guidelines).
- Known issue (first test, 1 Oct 2026): with `imageOptions.source: "placeholder"`, Gamma turned the SDG icon URLs into empty image placeholders instead of loading them. Until that's solved, list in the summary which SDG icons Megan needs to drop into card 5 by hand, with their URLs.
- If the SDG has no URL yet (`ASK ME`), put a marked space on card 5: `GRAPHIC: SDG <n> icon (<name>), add from Megan's SDG graphics`, and list it in the summary.

## Step 6. Build each carousel in Gamma

Load `mcp__Gamma__generate` with ToolSearch if needed. Make **one Gamma per observance** with:

- `format`: `"social"`
- `cardOptions.dimensions`: `"4x5"`
- `numCards`: `9`
- `cardSplit`: `"inputTextBreaks"`, with the 9 cards written in full and separated by `---`
- `textMode`: `"preserve"`
- `title`: `"<YYYY-MM-DD> · <Observance name> · DRAFT"`
- `additionalInstructions`: the full Chief of Staff design instructions **plus**: `"Social carousel, 4:5 portrait. Keep the SDG icon images exactly as supplied: full size, never cropped, recoloured or covered with text. The last card is small-print sources."`
- `imageOptions.source`: `"placeholder"`
- `textOptions.tone`: `"bold, focused, fearless; no consulting jargon"`
- `textOptions.audience`: `"small and medium-sized businesses, nonprofits, startups and government partners who care about the SDGs"`
- `themeId`: the dark green theme picked by the Chief of Staff process (`get_themes`); leave it out if none fits.
- Never set `sharingOptions`, `exportAs` or email options.

Poll `get_generation_status` until each Gamma is done. If one fails, retry it once; if it fails again, record the error and move on to the next observance.

## Step 7. Weekly summary for Megan

Finish with one summary, in this order:

1. **Week:** the date range.
2. **Observance table:** date · observance · 2026 theme (or ASK ME) · SDGs · Gamma link.
3. **Captions:** one caption per observance, ready to paste.
4. **ASK ME list:** missing themes, unsourced numbers, missing SDG graphic URLs, photo spaces.
5. **Notes:** whether un.org could be reached, and any new observance not yet in `references/un-observances-calendar.md`.
6. One line: *"These are drafts for your review. Nothing has been posted or shared."*

If no UN observance falls in the week, say so and stop. Don't make up an occasion.
