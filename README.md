# Busbora Town Trips: prototype

A clickable prototype of **town-trip (short-distance bus) ticketing** for Busbora, built on top of the existing intercity system.
It shows the main device (Android handheld with a thermal printer), the web counter and the web admin in one page.

Goal: sell a ticket **in 1–2 taps, one-handed, in a crowd**, while still recording where every passenger is going.

Live: <https://codewareltd.com/apps/BBTownTrips/>

---

## Open it

`index.html` is a single self-contained file (logo and data inlined). Open it in a browser or upload it anywhere.

| URL | Opens |
|-----|-------|
| `index.html` | Tanzania (default) |
| `index.html?country=bd` | Bangladesh (Dhaka) |

The Country switch in the top bar is hidden for now, so Bangladesh is reachable only with `?country=bd`.

Inside the page, the top bar picks the **sale model** (B · Fixed fare, C · Destination), the **platform**
(Android app, Web counter, Admin), the operator and the signed-in staff member. Press **F** for focus view.

## Project layout

```
src/
  prototype.html      screens and logic (edit this, not index.html)
  countries/
    tz.js             Tanzania data: operators, stops, staff, buses, fares (default)
    bd.js             Bangladesh data
assets/
  busbora-logo-original.png
build.sh              builds index.html from src/
index.html            built output, the file you share or deploy
PLAN.md               product plan: sale models, flows, ticket design, phases, open questions
COUNTRIES.md          developer guide for country data and adding a country
```

## Edit and build

1. Edit files in `src/`. You can open `src/prototype.html` directly in a browser while working.
2. Rebuild the shareable file:

   ```bash
   ./build.sh
   ```

   This inlines the logo and `src/countries/*.js` into `index.html`. Needs `python3`.
3. Deploy by uploading `index.html`.

To test `?country=` locally, serve the folder instead of opening the file (some viewers drop the query string):

```bash
python3 -m http.server 8765
```

Then open <http://localhost:8765/index.html?country=bd>.

## More

- [PLAN.md](PLAN.md): why Model C (current stop → destination) is the recommended sale model, user flows, fraud control.
- [COUNTRIES.md](COUNTRIES.md): how country switching works and what a new country file must define.
