# Countries: developer guide

The prototype runs with data for two countries. **Tanzania is the default**; Bangladesh (Dhaka) is the other one.
Switching country changes every platform at once: Android app, web counter and admin (operator and Busbora company views).

This file is for developers. It explains where country data lives, how the switch works, and what a country has to define.

---

## 1. Switching country

| How | What happens |
|-----|--------------|
| **Country** control in the top bar (🇹🇿 Tanzania · 🇧🇩 Bangladesh), **hidden for now** | Switches in place. Every screen re-renders with the other country's operators, stops, staff, buses, currency and phone format. |
| `index.html?country=bd` (or `?country=tz`) | Opens straight into that country. Without the parameter, or with an unknown code, you get Tanzania (`DEFAULT_COUNTRY`). |

Each country keeps its own demo state while you switch back and forth: tickets you printed, fare edits and fare mode are saved per operator.
The Country control (hidden in the prototype bar for now; use `?country=bd`) also updates `?country=` in the address bar (when the browser allows it), so a reload stays in the same country.

---

## 2. Files

```
src/
  prototype.html        screens and logic (country-neutral, reads the globals below)
  countries/
    tz.js               Tanzania: Arusha, Moshi, Dar es Salaam operators (default)
    bd.js               Bangladesh: Dhaka operators and stops
build.sh                inlines the logo and countries/*.js into index.html
index.html              built, self-contained file to open or share (don't edit by hand)
```

`src/prototype.html` loads the country files with plain `<script src="countries/xx.js">` tags, so it works when opened
directly from `src/`. `./build.sh` replaces those tags with the file contents. **After editing anything in `src/`, run `./build.sh`.**

---

## 3. How it works

1. `prototype.html` creates `const COUNTRIES = {}`.
2. Each country file adds itself: `COUNTRIES.TZ = (() => { ...; return {...}; })();`
3. At start-up, `useCountry(startCountry())` (bottom of the script, section **START-UP**) points these globals at the chosen country:

| Global | Meaning |
|--------|---------|
| `CC` | Country code: `'TZ'` or `'BD'` |
| `C` | The whole country config (`COUNTRIES[CC]`) |
| `CUR` | Currency code shown on every screen: `TZS` / `BDT` |
| `STOP_COL` | Stop code → color |
| `STAGE_PRICE` | Adult price by stage difference 0..3 |
| `B_BUTTONS` | Adult fare buttons for Model B |
| `OPDATA` | Operators with full sample data |
| `OPERATORS`, `OP_ROUTES` | Company view rows (every operator in the country) |
| `LONG` | Long-route test case (optional) |

4. The first time a country is opened, `useCountry()` prepares its sample data once: stop colors, the day's tickets
   (`genTickets`, deterministic per operator `seed`), route counts and the 7-day revenue history.
5. `useCountry()` then opens the country's home operator (`C.homeOp`) and signs in as its home supervisor.
6. The Country control calls `setCountry(cc)`: it saves the current operator's demo state, calls `useCountry(cc)`, and renders.

### Rules for screen code

- Never write a currency, phone code, greeting, or operator name in screen code. Use the country values:

| Need | Use |
|------|-----|
| Currency label | `CUR` |
| Money amount | `fmt(n)` (number format from `C.money.locale`) |
| Rounding fares / averages | `roundTo(v)` (step from `C.money.step`: 50 TZS, 5 BDT) |
| Phone country code + flag | `C.flag`, `C.phone.cc` |
| A staff member's mobile number | `mobileOf(staff)` |
| Masked phone in admin | `C.phone.mask(ph)` |
| Greeting / login title | `C.text.hello`, `C.text.welcome` |
| Schedule repeat days | `C.text.repeat` |
| Flat fare | `C.fares.flat` |

- Don't read `COUNTRIES[...]` directly from screens. Read the globals, so the switch keeps working.
- Passenger types (`PAX`: Adult 100%, Student 50%, Child 50%) and Model B button colors are shared by both countries.
  If a country ever needs different passenger types, move `PAX` into the country file and point it from `useCountry()`.

---

## 4. Country config (what a country file returns)

```js
COUNTRIES.BD = (() => {
  const STOP_COL = {...};      // stop code → color
  const OPDATA = {...};        // operators with full sample data (see section 5)
  const OPERATORS = [...];     // every operator in the company view
  const OP_ROUTES = {...};     // route rows for operators WITHOUT full sample data
  return {
    id:'BD', name:'Bangladesh', flag:'🇧🇩',
    money:{code:'BDT', locale:'en-IN', step:5},
    phone:{cc:'+880', mobile:ph => '...', mask:ph => '+880 1••• ••• ' + ph},
    fares:{stage:[10, 20, 30, 40], buttons:[10, 20, 30, 40], flat:20},
    text:{welcome:'Welcome! Sign in', hello:'Good morning', repeat:'Sat–Thu', search:'farmgate'},
    info:{city, timezone, weekend, languages, mobileMoney, plate, bus},   // shown on the developer card only
    stopCol:STOP_COL, opdata:OPDATA, operators:OPERATORS, opRoutes:OP_ROUTES,
    homeOp:'SC',
    superAdmin:{i:'TA', n:'Tanvir Ahmed', r:'Busbora super-admin'},
    avgFare:{SC:17, ...},      // per operator, estimates ticket counts in the platform report
    alerts:[[opId, 'crit'|'warn'|'info', title, detail], ...],
    longTest:{op, route, user, title, text},   // or omit: the test card and button are hidden
  };
})();
```

| Key | Used for |
|-----|----------|
| `money.code` | Currency label on every screen, ticket and report |
| `money.locale` | Number grouping. `en-US` → 1,234,567 · `en-IN` → 12,34,567 (lakh/crore, used in Bangladesh) |
| `money.step` | Fares from stages and average-fare figures are rounded to this |
| `phone.cc` | Login screens (app and web) |
| `phone.mobile(ph)` | Sample mobile number built from a staff member's last 3 digits (`ph`), unless the staff entry has `mob` |
| `phone.mask(ph)` | Staff table in admin |
| `fares.stage` | Exactly 4 values: adult price for stage difference 0, 1, 2, 3+ |
| `fares.buttons` | Exactly 4 values: Model B fare buttons (adult) |
| `fares.flat` | Price for every stop pair when admin picks Flat fare mode |
| `text.*` | Login title, greeting on Start trip, schedule repeat days, the search hint in Model A notes |
| `homeOp` | Operator the country opens with. It also sets the scale of the company 7-day chart |
| `info.*` | Reference only. Shown on the "Developer · country" card in the right-hand notes |

---

## 5. Operator data (`OPDATA[id]`)

Same shape in both countries.

```js
SC:{
  op:{id:'SC', n:'Shapla City Service', init:'SC', city:'Mirpur, Dhaka'},
  admin:{i:'FH', n:'Farhana Haque'},        // operator admin shown in the admin header
  seed:4401,                                // makes the generated tickets the same on every load
  home:{sup:'Rahim U.', agent:'Nasrin A.'}, // who you are signed in as for each role
  routes:{
    'S-01':{a:'Mirpur 12', b:'Motijheel', stops:[
      {n:'Mirpur 12', c:'MB', m:0, st:1},   // name, 2-letter code, minutes from first stop, stage
      ...
    ]},
  },
  staff:{
    'Rahim U.':  {n:'Rahim Uddin', init:'RU', role:'Supervisor', bus:'DM-Ba 11-4527', ph:'388', mob:'1712 210 388'},
    'Nasrin A.': {n:'Nasrin Akter', init:'NA', role:'Counter agent', at:'Mirpur 12', atC:'MB', ph:'120'},
  },
  buses:[{p:'DM-Ba 11-4527', m:'Hino AK1J', dev:'Sunmi V2s · S04', sync:'1 min ago'}],   // warn:1 = sync late, shop:'...' = in workshop
  inst:['DM-Ba 11-4527', ...],              // buses offered for an instant trip
  deps:[{id:'s6', r:'S-01', t:'08:30', dir:'out', bus:'DM-Ba 11-4527', sup:'Rahim U.', st:'board', sold:0}],
  handover:{'Jamal M.':-20},                // cash handed over minus system total (negative = short)
}
```

Departure states (`st`): `done` arrived · `run` on the road (`at` = stop index) · `board` boarding · `up` scheduled · `cancel` (with `note`).

Rules the screens rely on:

- **Stop codes are unique within a country.** A stop that is on several routes (e.g. Farmgate `FG`) uses the same code everywhere, so it gets the same color.
- **Every stop needs a color**: either in `STOP_COL` by code, or a `col` on the stop itself (the long test routes do this).
- The home supervisor (`home.sup`) should have a `board` departure, so the app opens on a sale screen.
- A counter agent's `atC` should be the first stop of at least one route, so sales at the stand show up.
- `run` departures need `at` ≤ number of stops − 2.
- A route with `test:'40 stops'` is marked as a test case in every list.

---

## 6. Tanzania vs Bangladesh

| | 🇹🇿 Tanzania (default) | 🇧🇩 Bangladesh |
|--|--|--|
| Cities | Arusha, Moshi, Dar es Salaam | Dhaka only (Mirpur, Dhanmondi, Uttara; Gazipur on the long test route) |
| Currency | TZS, `en-US` grouping, rounded to 50 | BDT, `en-IN` lakh grouping, rounded to 5 |
| Stage fares (adult) | 500 / 800 / 1,000 / 1,500 | 10 / 20 / 30 / 40 (Tk 10 minimum city fare) |
| Flat fare | 800 | 20 |
| Phone | +255 7XX XXX XXX | +880 1XXX XXX XXX |
| Bus plate | `T 457 DKL` | `DM-Ba 11-4527` (Dhaka Metro, class Ba = bus) |
| Buses | Toyota Coaster, Nissan Civilian | Hino AK1J, Ashok Leyland Viking, Tata LPO |
| Greeting | Karibu! / Habari (Kiswahili) | Welcome! / Good morning (English; no Banglish) |
| Schedule repeat | Mon–Sat | Sat–Thu (Friday is the weekend) |
| Low day in 7-day chart | Sunday | Friday |
| Languages (planned) | English · Kiswahili | English · Bangla |
| Mobile money (planned) | M-Pesa · Tigo Pesa · Airtel Money | bKash · Nagad · Rocket |
| Timezone | Africa/Dar_es_Salaam (UTC+3) | Asia/Dhaka (UTC+6) |
| Home operator / user | Meru Town Shuttle · Juma Mushi | Shapla City Service · Rahim Uddin |
| Long-route test | Dar City Commuter D-70, 70 stops | Uttara Express U-40 Gazipur ⇄ Sadarghat, 40 stops |

### Bangladesh sample data (Dhaka)

Operators with full sample data (switch between them with the Operator picker):

| Operator | Routes | Staff | Buses | Departures today |
|----------|--------|-------|-------|------------------|
| **SC** Shapla City Service (Mirpur) | S-01 Mirpur 12 ⇄ Motijheel (10 stops) · S-02 Mirpur 1 ⇄ Gulistan (8) · S-05 Mirpur 10 ⇄ Mohakhali (5) · S-09 Pallabi ⇄ Airport (7) | 7 supervisors, 2 counter agents | 7 | 21 |
| **DL** Dhanmondi Link (Dhanmondi) | D-03 Azimpur ⇄ Gulshan 1 (8) · D-06 Mohammadpur ⇄ Motijheel (7) · D-08 Jigatola ⇄ Badda (8) | 4 + 2 | 5 | 14 |
| **UX** Uttara Express (Uttara) | U-01 Abdullahpur ⇄ Motijheel (12) · U-04 House Building ⇄ Gulshan 2 (8) · U-40 Gazipur ⇄ Sadarghat (40, test) | 6 + 2 | 7 | 18 |

Company view only (summary rows): **BR** Buriganga Riders (Old Dhaka), **GS** Gulshan Shuttle, **JB** Jatrabari Commuter (onboarding),
**KR** Keraniganj Rides (suspended).

Stop names are real Dhaka places; their order and minutes are approximate. Operators, people, plates, phone numbers and money are made up.

---

## 7. Adding a country

1. Copy `src/countries/bd.js` to `src/countries/xx.js` and change `COUNTRIES.BD` to `COUNTRIES.XX`, `id:'XX'`.
2. Fill in the config (section 4) and at least one operator in `OPDATA` (section 5). Set `homeOp` to it.
3. Add `<script src="countries/xx.js"></script>` next to the other two in `src/prototype.html`.
4. Run `./build.sh`. The Country control gets the new button automatically (it lists `COUNTRIES`).
5. Open `index.html?country=xx` and click through Android app, Web counter and Admin (company and operator).

---

## 8. Notes for the real product

The prototype treats country like a tenant setting. In the backend this maps to:

- A **country** record that owns operators. An operator belongs to exactly one country; a Busbora super-admin is scoped to a country (or sees all).
- Per country: ISO 4217 currency, display locale, fare rounding step, E.164 phone prefix and validation, timezone
  (all ticket times stored in UTC, shown in the country's timezone), working days for schedules, plate format validation,
  language packs, mobile-money providers, and the Busbora fee.
- Stop codes are unique per country (not per operator), so shared stops keep one code and color across operators.
- Fares stay in whole currency units for both countries (no cents / poisha in town fares).
