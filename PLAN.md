# Busbora Town Trips: Product Plan & Prototype Guide

> Short-distance / local bus ticketing built on the existing Busbora intercity system.
> Main device: Android handheld (with built-in or Bluetooth thermal printer). Also: web counter and web admin.

---

## 1. Goal

Sell a town-trip ticket **in 2 taps, in a crowd, one-handed**, while still knowing
**where every passenger is going**, so the business gets accurate revenue and fraud control.

Rules for town trips (different from intercity):

| Intercity (existing)            | Town Trips (new)                                  |
|---------------------------------|---------------------------------------------------|
| Seat layout                     | **No seat layout and no seat limit.** Riders get on and off, so the same seat is sold many times on one trip |
| Passenger name / phone          | **No passenger info**                             |
| Customer books online           | Supervisor/conductor sells on the bus or at the stand |
| Schedule, then departure        | Predefined schedule **or** instant trip started by the supervisor |
| Sub-route selection             | **Destination tap** (sub-route picked behind the scenes) |

---

## 2. The three sale models compared

Example route **T-12 Central Bus Stand ⇄ Usa River** has 7 stops:
Central Bus Stand → Clock Tower → Kaloleni → Sakina → Njiro Jct → Tengeru → Usa River

### Model A: Route + Sub-route (same as intercity)
- Supervisor picks the sub-route (e.g. *Kaloleni → Tengeru*), passenger type, quantity, then Print.
- **Problem:** with n stops there are n(n-1)/2 sub-routes: 7 stops give 21, 12 stops give 66, 20 stops give 190. It's a long list to scroll through in a crowd.
- Taps per sale: about 4–6. Fraud risk: **Low**.

### Model B: Fixed fare buttons
- Supervisor taps a fare (500 / 800 / 1,000 / 1,500), sets the quantity, then Print.
- **Problem (your concern #2):** the ticket has no destination, so someone who pays 500 can ride to the end of the line.
  There's also no origin/destination data for reports.
- Taps per sale: 2–3. Fraud risk: **High**.
- A partial fix is to print "Valid till <stop>", worked out from the bus's current stop. That's halfway to Model C.

### Model C: Current stop → Destination ★ Recommended
- The app knows where the bus is. **GPS picks the nearest stop automatically**, and the supervisor can correct it with ◀ ▶.
- The screen only shows the **stops ahead** as large tiles with the fare on each.
  Tap a tile to add a ticket (tap again for 2, 3…), then Print. There's an optional **one-tap print** mode.
- Stops the bus has passed drop off the list automatically, so the list gets shorter during the trip.
- Taps per sale: **1–2**. Fraud risk: **Low**. The ticket shows the destination code in large inverted print, so a conductor can check it at a glance.

### Key insight
**Model A and Model C use the same data.** An origin/destination fare matrix *is* the sub-route
price list. Model C is a faster screen on top of the existing sub-route pricing, so the backend
can reuse the intercity tables:

```
Route (type = TOWN)
 ├─ Stops (ordered, minutes offset, GPS lat/lng, short code e.g. "KL")
 ├─ Sub-routes  ← auto-generated for every stop pair (no manual creation)
 │    └─ Fare per passenger type   ← edited as a matrix, or auto-filled from stages/zones
 ├─ Schedules (predefined) / Instant trips
 └─ Trips (departure) → Tickets (no seat, no passenger)
```

---

## 3. Recommendation

1. **Use Model C** as the default sale screen on Android and web.
2. Let admin pick a **fare mode per route**:
   - **Flat**: one price for any stop (common for very short town loops). The sale screen becomes a single big "Print" button with a quantity.
   - **Stage / Zone**: admin gives each stop a stage number and sets a price per stage difference. The app fills the whole matrix automatically.
   - **Matrix**: full origin/destination price editing for exceptions. Starts from the stage auto-fill.
3. Keep Model B as an optional **"Quick fare" mode** for flat-fare routes only.
4. Keep Model A only as an admin/back-office view (same data, shown as a list).

---

## 4. Users & flows

### 4.0 Who owns what
- **Busbora is the service provider** (the platform). Each **operator** (e.g. *Meru Town Shuttle*, a sample name) owns its buses, routes, fares, staff and tickets.
- The app and web counter show the **operator name** and the **logged-in user** (name + role) at the top. Busbora appears as "Powered by Busbora".
- The printed ticket header shows the operator name, with "Powered by Busbora" at the bottom.
- An operator admin only sees their own operator. A Busbora super-admin can switch between operators.

### 4.1 Admin (web)
1. **Route & stops**: create a town route, add stops in order with the minutes from the first stop, a 2-letter code, a stage number and GPS location.
2. **Fares**: choose Flat / Stage / Matrix and fill in prices for each passenger type (Adult, Student, Child).
3. **Schedules**: optional predefined departures (time, bus, supervisor). You can also allow instant trips per route.
4. **Buses & staff**: assign supervisors to devices (device binding + PIN).
5. **Reports**: tickets by trip, by stop pair, by supervisor; cash handover vs system total.

### 4.2 Supervisor / conductor (Android)
1. **Login**: phone number + 4-digit PIN. The device is bound to the operator.
2. **Start trip**: tap a predefined schedule from *Today*, **or** use **+ Instant trip** (route, bus, direction, then Start now).
3. **Sell** (Model C):
   - Top: trip strip (bus, departure time, tickets sold, cash).
   - "You are at: **Kaloleni** (GPS)" with ◀ ▶ override, and a **Next stop** button.
   - Passenger type chips: Adult · Student · Child.
   - Destination tiles (stops ahead only) with the price. Tap to add; − to remove.
   - **Each stop has its own unique color**, the same on every route, so staff and riders can spot a stop by color. Tiles can be shown in two styles: **Current** (white tile with a color strip) or **Solid** (whole tile in the stop color).
   - Bottom bar: `3 tickets · TZS 2,400 [PRINT]`.
   - **One sale can mix passenger types.** In Model C, switch the type chip and keep tapping (the tile shows "2 Adult · 1 Student").
     In Model A, choosing a sub-route opens an **Adult / Student / Child** panel with a +/− for each.
   - **Model B (fixed fare) has no passenger type.** Tap a fare to add a ticket (tap again for 2, 3…) and − to remove one, the same as Model C tiles.
4. **Print**: one ticket per passenger by default (or one group ticket, set by admin).
5. **End trip**: summary by destination and passenger type, cash to hand over, sync status, then **Close trip**.

### 4.3 Web counter (stand / terminal office)
Same Model C screen in a wide layout: the stop timeline on the left, destination tiles in the
middle, the cart and Print on the right. Works with a USB/network receipt printer.

---

## 5. Ticket design & fraud control

- Printed on a 58 mm thermal printer (Sunmi/iMin-style built-in printers or Bluetooth ESC/POS).
- Contents: Town Trips header, ticket number, bus plate, trip time, **FROM**, **TO with a large inverted code box (e.g. `KL`)**,
  passenger type, fare, QR code (ticket ID + signature), "Valid for this trip only".
- An inspector can scan the QR offline (it is signed), or just compare the big code with the next stops.
- Every ticket is numbered and stored on the device first, then synced. Cash collected must match the system total at trip close.

---

## 6. Technical notes

- **Offline-first**: tickets are generated and stored locally, then synced when online. A trip can run with no data connection.
- **GPS stop detection**: pick the nearest stop within a radius (e.g. 150 m). If the bus is between stops, keep the last passed stop. The supervisor can always override.
- **Printing**: an abstraction over the built-in POS printer SDK and Bluetooth ESC/POS. Web uses the browser print dialog or a local print agent.
- **Language**: English / Kiswahili toggle in Tanzania, English / Bangla in Bangladesh (labels are short, so they translate easily).
- **Reuse**: route, stops, sub-routes, fares, schedules and departures stay in the existing Busbora tables, with `route_type = TOWN` and seat/passenger requirements switched off.

---

## 7. Phases

| Phase | Scope |
|-------|-------|
| **MVP** | Admin route + stops + Stage fares; Android sell (Model C, manual stop); print; trip close; sync |
| **v1.1** | GPS auto stop, one-tap print, instant trips, web counter |
| **v1.2** | Matrix fare editor, inspector QR scan app, reports & cash reconciliation |
| **Later** | Mobile-money (M-Pesa / Tigo Pesa / Airtel) QR payment, passenger count sensors, live bus tracking |

---

## 8. Open questions

1. Is town pricing usually flat, staged or fully origin/destination in your target cities? (This decides the default fare mode.)
2. One printed ticket per passenger, or one group ticket with "×3"?
3. Should a ticket be valid for return trips or transfers?
4. Built-in printer devices (Sunmi V2 etc.) or phone + Bluetooth printer?
5. Is cash handover per trip or per shift?

---

## 9. Prototype

Open **`index.html`** in a browser (one self-contained file). Edit `src/prototype.html`, then run `./build.sh` to update `index.html`.

Switchers at the top:
- **Country**: 🇹🇿 Tanzania (default) · 🇧🇩 Bangladesh (all operators and stops in Dhaka). Applies to every platform. Also `index.html?country=bd`.
  Country data lives in `src/countries/tz.js` and `src/countries/bd.js`; see **[COUNTRIES.md](COUNTRIES.md)** (developer guide)
- **Focus view** (key `F`): hides the controls and notes and scales the phone to fit the window. `Esc` or **Exit focus** brings them back
- **Hide controls** (key `H`): folds the controls into one slim row; **Controls ▾** opens them again. Remembered in your browser
- **Sale model**: B Fixed fare · C Origin→Destination (A Sub-route is hidden for now; its code is kept)
- **Stop tiles**: Current (white + color strip) · Solid (filled with the stop color). Also in Admin › Routes › Town settings
- **Platform**: Android app · Web counter · Admin
- **Signed in as** (Web counter): Supervisor (own bus and trips only) · Counter agent (every route and departure; can sell on any open departure, including buses already on the road)
- **Admin as** (Admin): Busbora (company: all operators, routes by operator, fees, platform report) · Operator (dashboard, routes, fares, schedules, buses & staff, 5 report tabs)
- **Screen** (Android/Web): Login · Start trip / Departures · Sell · Ticket · Trip summary · Reports

Sample data (Tanzania, the default): 5 routes for Meru Town Shuttle (T-12, T-04, T-07, T-09, T-15), 29 departures today covering every state (arrived, on the road,
boarding, scheduled with advance sales, busy, cancelled; there is no seat limit), 11 staff, 9 buses, ~420 tickets generated
deterministically, and 7 operators for the company view. The company view's **Routes by operator** page lists
30 routes across all 7 operators (live, in setup, paused) and can be filtered by operator. Bangladesh has the same kinds of sample data for Dhaka: 3 operators with full data (Shapla City Service, Dhanmondi Link,
Uttara Express, including a 40-stop Gazipur ⇄ Sadarghat test route) and 7 operators in the company view. Every dashboard and report is calculated from
the same tickets, so tickets you print in the demo show up everywhere.

Everything is clickable: login, start a trip, sell tickets, print a preview, move between stops,
end the trip, and edit fares in admin (the sale screens update live).
