/* ================= COUNTRY: BANGLADESH (Dhaka) =================
   Loaded by src/prototype.html before the main script. Shape of this object: see COUNTRIES.md.
   Every operator and stop is in Dhaka city (greater Dhaka for the long Gazipur test route).
   Three operators have full sample data (routes, stops, staff, buses, departures, tickets):
   Shapla City Service (Mirpur), Dhanmondi Link (Dhanmondi), Uttara Express (Uttara).
   Stop names are real Dhaka places (order and minutes are approximate); operators, people, plates, times and money are made up. */
COUNTRIES.BD = (() => {
  // One unique color per stop code, the same on every route, so riders and staff can spot a stop by color.
  // A stop that is on several routes (e.g. Farmgate FG) keeps one code, so it keeps one color.
  // 47 codes is more than a hand-picked palette, so colors step around the color wheel by the golden angle (no two codes share a color,
  // neighbours in the list are far apart) and alternate two lightness levels. All are dark enough for white text.
  const CODES = ('MB MX KZ SW AG FG KB SH PC MJ  M1 TC KP SY AS SL NK GL  M4 KC BN MH  PL KL EC KU KH AP  ' +   // Shapla City Service
    'AZ KA PP TJ G1  MP D7  JG BM MG ML RP BD  ' +                                                            // Dhanmondi Link
    'AB HB JS ND NB G2').split(/\s+/);                                                                     // Uttara Express
  const STOP_COL = Object.fromEntries(CODES.map((c, i) => [c, `hsl(${Math.round(i * 137.5) % 360} ${i % 2 ? 70 : 60}% ${i % 2 ? 34 : 40}%)`]));

  // Busbora = service provider (platform). Each operator owns its buses, routes, staff and tickets.
  // home = the user the prototype signs in as by default for each role.
  // Plates use the Dhaka Metro bus format "DM-Ba 11-4527" (Dhaka Metro, class Ba = bus, series, number).
  const OPDATA = {
    SC:{op:{id:'SC', n:'Shapla City Service', init:'SC', city:'Mirpur, Dhaka'}, admin:{i:'FH', n:'Farhana Haque'}, seed:4401, home:{sup:'Rahim U.', agent:'Nasrin A.'},
      routes:{
        'S-01':{a:'Mirpur 12', b:'Motijheel', stops:[
          {n:'Mirpur 12',    c:'MB', m:0,  st:1},
          {n:'Mirpur 10',    c:'MX', m:6,  st:1},
          {n:'Kazipara',     c:'KZ', m:11, st:2},
          {n:'Shewrapara',   c:'SW', m:15, st:2},
          {n:'Agargaon',     c:'AG', m:22, st:2},
          {n:'Farmgate',     c:'FG', m:31, st:3},
          {n:'Karwan Bazar', c:'KB', m:36, st:3},
          {n:'Shahbag',      c:'SH', m:43, st:3},
          {n:'Press Club',   c:'PC', m:49, st:4},
          {n:'Motijheel',    c:'MJ', m:56, st:4},
        ]},
        'S-02':{a:'Mirpur 1', b:'Gulistan', stops:[
          {n:'Mirpur 1',     c:'M1', m:0,  st:1},
          {n:'Technical',    c:'TC', m:5,  st:1},
          {n:'Kallyanpur',   c:'KP', m:9,  st:1},
          {n:'Shyamoli',     c:'SY', m:13, st:2},
          {n:'Asad Gate',    c:'AS', m:19, st:2},
          {n:'Science Lab',  c:'SL', m:27, st:3},
          {n:'Nilkhet',      c:'NK', m:32, st:3},
          {n:'Gulistan',     c:'GL', m:44, st:4},
        ]},
        'S-05':{a:'Mirpur 10', b:'Mohakhali', stops:[
          {n:'Mirpur 10',    c:'MX', m:0,  st:1},
          {n:'Mirpur 14',    c:'M4', m:6,  st:1},
          {n:'Kachukhet',    c:'KC', m:12, st:2},
          {n:'Banani',       c:'BN', m:19, st:2},
          {n:'Mohakhali',    c:'MH', m:25, st:3},
        ]},
        'S-09':{a:'Pallabi', b:'Airport', stops:[
          {n:'Pallabi',      c:'PL', m:0,  st:1},
          {n:'Mirpur 12',    c:'MB', m:5,  st:1},
          {n:'Kalshi',       c:'KL', m:10, st:2},
          {n:'ECB Chattar',  c:'EC', m:15, st:2},
          {n:'Kuril Bishwa Road', c:'KU', m:22, st:3},
          {n:'Khilkhet',     c:'KH', m:27, st:3},
          {n:'Airport',      c:'AP', m:33, st:4},
        ]},
      },
      staff:{
        'Rahim U.':   {n:'Rahim Uddin',    init:'RU', role:'Supervisor',    bus:'DM-Ba 11-4527', ph:'388', mob:'1712 210 388'},
        'Karim H.':   {n:'Karim Hossain',  init:'KH', role:'Supervisor',    bus:'DM-Ba 14-2093', ph:'102'},
        'Shafiq I.':  {n:'Shafiqul Islam', init:'SI', role:'Supervisor',    bus:'DM-Ba 12-7710', ph:'716'},
        'Jamal M.':   {n:'Jamal Mia',      init:'JM', role:'Supervisor',    bus:'DM-Ba 15-3348', ph:'245'},
        'Rubel A.':   {n:'Rubel Ahmed',    init:'RA', role:'Supervisor',    bus:'DM-Ba 11-9062', ph:'930'},
        'Sumon S.':   {n:'Sumon Sarkar',   init:'SS', role:'Supervisor',    bus:'DM-Ba 13-5184', ph:'571'},
        'Mizan R.':   {n:'Mizanur Rahman', init:'MR', role:'Supervisor',    bus:'DM-Ba 14-6625', ph:'064'},
        'Nasrin A.':  {n:'Nasrin Akter',   init:'NA', role:'Counter agent', at:'Mirpur 12', atC:'MB', ph:'120', mob:'1817 448 120'},
        'Taslima K.': {n:'Taslima Khatun', init:'TK', role:'Counter agent', at:'Mirpur 1',  atC:'M1', ph:'857', early:1},
      },
      // Town trips have no seat limit: riders get on and off, so the same seat is sold many times on one trip.
      buses:[
        {p:'DM-Ba 11-4527', m:'Hino AK1J',            dev:'Sunmi V2s · S04',  sync:'1 min ago'},
        {p:'DM-Ba 14-2093', m:'Hino AK1J',            dev:'Sunmi V2s · S07',  sync:'Just now'},
        {p:'DM-Ba 12-7710', m:'Ashok Leyland Viking', dev:'Sunmi V2s · S11',  sync:'12 min ago', warn:1},
        {p:'DM-Ba 15-3348', m:'Tata LPO 1618',        dev:'iMin Swift · S02', sync:'2 min ago'},
        {p:'DM-Ba 11-9062', m:'Hino AK1J',            dev:'iMin Swift · S05', sync:'Just now'},
        {p:'DM-Ba 13-5184', m:'Ashok Leyland Viking', dev:'Sunmi V2s · S14',  sync:'3 min ago'},
        {p:'DM-Ba 14-6625', m:'Hino AK1J',            dev:'Sunmi V2s · S09',  sync:'Yesterday 21:15', shop:'Gearbox repair'},
      ],
      inst:['DM-Ba 11-4527', 'DM-Ba 14-2093', 'DM-Ba 12-7710'],
      // Today's departures. st: done · run (on the road, at = stop index) · board · up (scheduled) · cancel
      deps:[
        {id:'s1',  r:'S-01', t:'06:40', dir:'in',  bus:'DM-Ba 11-4527', sup:'Rahim U.',  st:'done',  sold:31},
        {id:'s2',  r:'S-01', t:'07:00', dir:'out', bus:'DM-Ba 14-2093', sup:'Karim H.',  st:'done',  sold:28},
        {id:'s3',  r:'S-01', t:'07:15', dir:'in',  bus:'DM-Ba 12-7710', sup:'Shafiq I.', st:'done',  sold:26},
        {id:'s4',  r:'S-01', t:'08:05', dir:'in',  bus:'DM-Ba 14-2093', sup:'Karim H.',  st:'run', at:4, sold:24},
        {id:'s5',  r:'S-01', t:'08:12', dir:'out', bus:'DM-Ba 12-7710', sup:'Shafiq I.', st:'run', at:5, sold:29},
        {id:'s6',  r:'S-01', t:'08:30', dir:'out', bus:'DM-Ba 11-4527', sup:'Rahim U.',  st:'board', sold:0},
        {id:'s7',  r:'S-01', t:'09:40', dir:'in',  bus:'DM-Ba 11-4527', sup:'Rahim U.',  st:'up',    sold:0},
        {id:'s8',  r:'S-01', t:'10:00', dir:'out', bus:'DM-Ba 14-2093', sup:'Karim H.',  st:'up',    sold:5},
        {id:'s9',  r:'S-01', t:'11:00', dir:'out', bus:'DM-Ba 11-4527', sup:'Rahim U.',  st:'up',    sold:0},
        {id:'s10', r:'S-02', t:'06:30', dir:'out', bus:'DM-Ba 15-3348', sup:'Jamal M.',  st:'done',  sold:30},
        {id:'s11', r:'S-02', t:'07:40', dir:'out', bus:'DM-Ba 14-6625', sup:'Mizan R.',  st:'cancel', sold:0, note:'Bus in workshop'},
        {id:'s12', r:'S-02', t:'08:00', dir:'in',  bus:'DM-Ba 15-3348', sup:'Jamal M.',  st:'run', at:4, sold:26},
        {id:'s13', r:'S-02', t:'08:40', dir:'out', bus:'DM-Ba 11-9062', sup:'Rubel A.',  st:'board', sold:27},
        {id:'s14', r:'S-02', t:'09:30', dir:'out', bus:'DM-Ba 15-3348', sup:'Jamal M.',  st:'up',    sold:2},
        {id:'s15', r:'S-05', t:'07:00', dir:'out', bus:'DM-Ba 13-5184', sup:'Sumon S.',  st:'done',  sold:22},
        {id:'s16', r:'S-05', t:'07:35', dir:'in',  bus:'DM-Ba 13-5184', sup:'Sumon S.',  st:'done',  sold:20},
        {id:'s17', r:'S-05', t:'08:15', dir:'out', bus:'DM-Ba 13-5184', sup:'Sumon S.',  st:'run', at:2, sold:15},
        {id:'s18', r:'S-05', t:'09:00', dir:'in',  bus:'DM-Ba 13-5184', sup:'Sumon S.',  st:'up',    sold:1},
        {id:'s19', r:'S-09', t:'06:50', dir:'out', bus:'DM-Ba 11-9062', sup:'Rubel A.',  st:'done',  sold:24},
        {id:'s20', r:'S-09', t:'07:30', dir:'in',  bus:'DM-Ba 11-9062', sup:'Rubel A.',  st:'done',  sold:25},
        {id:'s21', r:'S-09', t:'09:50', dir:'out', bus:'DM-Ba 11-9062', sup:'Rubel A.',  st:'up',    sold:0},
      ],
      handover:{'Jamal M.':-20},   // cash handed over minus system total, for closed trips
    },
    DL:{op:{id:'DL', n:'Dhanmondi Link', init:'DL', city:'Dhanmondi, Dhaka'}, admin:{i:'SC', n:'Sharmin Chowdhury'}, seed:5503, home:{sup:'Arif H.', agent:'Shirin S.'},
      routes:{
        'D-03':{a:'Azimpur', b:'Gulshan 1', stops:[
          {n:'Azimpur', c:'AZ', m:0, st:1}, {n:'Nilkhet', c:'NK', m:5, st:1}, {n:'Science Lab', c:'SL', m:10, st:1}, {n:'Kalabagan', c:'KA', m:14, st:2},
          {n:'Panthapath', c:'PP', m:19, st:2}, {n:'Karwan Bazar', c:'KB', m:25, st:2}, {n:'Tejgaon', c:'TJ', m:32, st:3}, {n:'Gulshan 1', c:'G1', m:40, st:4},
        ]},
        'D-06':{a:'Mohammadpur', b:'Motijheel', stops:[
          {n:'Mohammadpur', c:'MP', m:0, st:1}, {n:'Asad Gate', c:'AS', m:5, st:1}, {n:'Dhanmondi 27', c:'D7', m:10, st:2}, {n:'Science Lab', c:'SL', m:16, st:2},
          {n:'Shahbag', c:'SH', m:23, st:3}, {n:'Press Club', c:'PC', m:29, st:3}, {n:'Motijheel', c:'MJ', m:36, st:4},
        ]},
        'D-08':{a:'Jigatola', b:'Badda', stops:[
          {n:'Jigatola', c:'JG', m:0, st:1}, {n:'Dhanmondi 27', c:'D7', m:5, st:1}, {n:'Panthapath', c:'PP', m:10, st:2}, {n:'Bangla Motor', c:'BM', m:15, st:2},
          {n:'Moghbazar', c:'MG', m:21, st:3}, {n:'Malibagh', c:'ML', m:27, st:3}, {n:'Rampura', c:'RP', m:34, st:4}, {n:'Badda', c:'BD', m:41, st:4},
        ]},
      },
      staff:{
        'Arif H.':   {n:'Arif Hasan',        init:'AH', role:'Supervisor',    bus:'DM-Ba 11-3021', ph:'214'},
        'Sabbir R.': {n:'Sabbir Rahman',     init:'SR', role:'Supervisor',    bus:'DM-Ba 13-8845', ph:'530'},
        'Mamun K.':  {n:'Mamun Kabir',       init:'MK', role:'Supervisor',    bus:'DM-Ba 12-4410', ph:'871'},
        'Habib R.':  {n:'Habibur Rahman',    init:'HR', role:'Supervisor',    bus:'DM-Ba 15-1196', ph:'365'},
        'Shirin S.': {n:'Shirin Sultana',    init:'SS', role:'Counter agent', at:'Azimpur', atC:'AZ', ph:'492'},
        'Rokeya B.': {n:'Rokeya Begum',      init:'RB', role:'Counter agent', at:'Mohammadpur', atC:'MP', ph:'608', early:1},
      },
      buses:[
        {p:'DM-Ba 11-3021', m:'Hino AK1J',            dev:'Sunmi V2s · L03',  sync:'Just now'},
        {p:'DM-Ba 13-8845', m:'Hino AK1J',            dev:'Sunmi V2s · L07',  sync:'1 min ago'},
        {p:'DM-Ba 12-4410', m:'Ashok Leyland Viking', dev:'iMin Swift · L11', sync:'3 min ago'},
        {p:'DM-Ba 15-1196', m:'Tata LPO 1618',        dev:'Sunmi V2s · L02',  sync:'24 min ago', warn:1},
        {p:'DM-Ba 14-7302', m:'Hino AK1J',            dev:'Sunmi V2s · L14',  sync:'Yesterday 20:40', shop:'AC repair'},
      ],
      inst:['DM-Ba 11-3021', 'DM-Ba 13-8845', 'DM-Ba 12-4410'],
      deps:[
        {id:'l1',  r:'D-03', t:'06:40', dir:'out', bus:'DM-Ba 11-3021', sup:'Arif H.',   st:'done',  sold:25},
        {id:'l2',  r:'D-03', t:'07:30', dir:'in',  bus:'DM-Ba 11-3021', sup:'Arif H.',   st:'done',  sold:23},
        {id:'l3',  r:'D-03', t:'08:15', dir:'out', bus:'DM-Ba 13-8845', sup:'Sabbir R.', st:'run', at:3, sold:21},
        {id:'l4',  r:'D-03', t:'08:35', dir:'out', bus:'DM-Ba 11-3021', sup:'Arif H.',   st:'board', sold:7},
        {id:'l5',  r:'D-03', t:'09:45', dir:'in',  bus:'DM-Ba 11-3021', sup:'Arif H.',   st:'up',    sold:0},
        {id:'l6',  r:'D-06', t:'06:55', dir:'out', bus:'DM-Ba 12-4410', sup:'Mamun K.',  st:'done',  sold:27},
        {id:'l7',  r:'D-06', t:'07:50', dir:'in',  bus:'DM-Ba 12-4410', sup:'Mamun K.',  st:'run', at:4, sold:24},
        {id:'l8',  r:'D-06', t:'09:00', dir:'out', bus:'DM-Ba 13-8845', sup:'Sabbir R.', st:'up',    sold:2},
        {id:'l9',  r:'D-08', t:'07:00', dir:'out', bus:'DM-Ba 15-1196', sup:'Habib R.',  st:'done',  sold:20},
        {id:'l10', r:'D-08', t:'07:45', dir:'in',  bus:'DM-Ba 15-1196', sup:'Habib R.',  st:'done',  sold:19},
        {id:'l11', r:'D-08', t:'08:30', dir:'out', bus:'DM-Ba 15-1196', sup:'Habib R.',  st:'run', at:1, sold:13},
        {id:'l12', r:'D-08', t:'09:20', dir:'in',  bus:'DM-Ba 14-7302', sup:'Habib R.',  st:'cancel', sold:0, note:'Bus in workshop'},
        {id:'l13', r:'D-08', t:'09:50', dir:'in',  bus:'DM-Ba 15-1196', sup:'Habib R.',  st:'up',    sold:0},
        {id:'l14', r:'D-08', t:'10:30', dir:'out', bus:'DM-Ba 15-1196', sup:'Habib R.',  st:'up',    sold:3},
      ],
      handover:{'Mamun K.':-10},
    },
    UX:{op:{id:'UX', n:'Uttara Express', init:'UX', city:'Uttara, Dhaka'}, admin:{i:'NI', n:'Nazmul Islam'}, seed:6607, home:{sup:'Faruk A.', agent:'Lipi D.'},
      routes:{
        'U-01':{a:'Abdullahpur', b:'Motijheel', stops:[
          {n:'Abdullahpur', c:'AB', m:0, st:1}, {n:'House Building', c:'HB', m:4, st:1}, {n:'Jasimuddin', c:'JS', m:8, st:1}, {n:'Airport', c:'AP', m:13, st:2},
          {n:'Khilkhet', c:'KH', m:18, st:2}, {n:'Kuril Bishwa Road', c:'KU', m:23, st:2}, {n:'Banani', c:'BN', m:31, st:3}, {n:'Mohakhali', c:'MH', m:37, st:3},
          {n:'Farmgate', c:'FG', m:46, st:3}, {n:'Shahbag', c:'SH', m:54, st:4}, {n:'Press Club', c:'PC', m:60, st:4}, {n:'Motijheel', c:'MJ', m:67, st:4},
        ]},
        'U-04':{a:'House Building', b:'Gulshan 2', stops:[
          {n:'House Building', c:'HB', m:0, st:1}, {n:'Jasimuddin', c:'JS', m:4, st:1}, {n:'Airport', c:'AP', m:9, st:1}, {n:'Khilkhet', c:'KH', m:14, st:2},
          {n:'Kuril Bishwa Road', c:'KU', m:19, st:2}, {n:'Nadda', c:'ND', m:25, st:3}, {n:'Notun Bazar', c:'NB', m:30, st:3}, {n:'Gulshan 2', c:'G2', m:37, st:4},
        ]},
      },
      staff:{
        'Faruk A.':   {n:'Faruk Ahmed',   init:'FA', role:'Supervisor',    bus:'DM-Ba 11-2208', ph:'147'},
        'Mousumi P.': {n:'Mousumi Paul',  init:'MP', role:'Supervisor',    bus:'DM-Ba 14-3375', ph:'382'},
        'Selim R.':   {n:'Selim Reza',    init:'SR', role:'Supervisor',    bus:'DM-Ba 12-6612', ph:'726'},
        'Anwar K.':   {n:'Anwar Kabir',   init:'AK', role:'Supervisor',    bus:'DM-Ba 15-0981', ph:'059'},
        'Lipi D.':    {n:'Lipi Das',      init:'LD', role:'Counter agent', at:'Abdullahpur', atC:'AB', ph:'913'},
        'Jahid H.':   {n:'Jahid Hasan',   init:'JH', role:'Counter agent', at:'House Building', atC:'HB', ph:'275', early:1},
      },
      buses:[
        {p:'DM-Ba 11-2208', m:'Hino AK1J',            dev:'Sunmi V2s · U01',  sync:'Just now'},
        {p:'DM-Ba 14-3375', m:'Hino AK1J',            dev:'Sunmi V2s · U04',  sync:'2 min ago'},
        {p:'DM-Ba 12-6612', m:'Ashok Leyland Viking', dev:'iMin Swift · U09', sync:'1 min ago'},
        {p:'DM-Ba 15-0981', m:'Hino AK1J',            dev:'Sunmi V2s · U12',  sync:'Just now'},
        {p:'DM-Ba 13-4420', m:'Tata LPO 1618',        dev:'Sunmi V2s · U15',  sync:'2 h ago', warn:1},
      ],
      inst:['DM-Ba 11-2208', 'DM-Ba 14-3375', 'DM-Ba 13-4420'],
      deps:[
        {id:'u1',  r:'U-01', t:'06:30', dir:'out', bus:'DM-Ba 11-2208', sup:'Faruk A.',   st:'done',  sold:32},
        {id:'u2',  r:'U-01', t:'07:20', dir:'in',  bus:'DM-Ba 11-2208', sup:'Faruk A.',   st:'done',  sold:30},
        {id:'u3',  r:'U-01', t:'08:05', dir:'out', bus:'DM-Ba 14-3375', sup:'Mousumi P.', st:'run', at:6, sold:28},
        {id:'u4',  r:'U-01', t:'08:35', dir:'out', bus:'DM-Ba 11-2208', sup:'Faruk A.',   st:'board', sold:9},
        {id:'u5',  r:'U-01', t:'09:40', dir:'in',  bus:'DM-Ba 11-2208', sup:'Faruk A.',   st:'up',    sold:0},
        {id:'u6',  r:'U-01', t:'10:20', dir:'out', bus:'DM-Ba 14-3375', sup:'Mousumi P.', st:'up',    sold:3},
        {id:'u7',  r:'U-04', t:'06:45', dir:'out', bus:'DM-Ba 12-6612', sup:'Selim R.',   st:'done',  sold:26},
        {id:'u8',  r:'U-04', t:'07:40', dir:'in',  bus:'DM-Ba 12-6612', sup:'Selim R.',   st:'done',  sold:24},
        {id:'u9',  r:'U-04', t:'08:25', dir:'out', bus:'DM-Ba 12-6612', sup:'Selim R.',   st:'run', at:3, sold:20},
        {id:'u10', r:'U-04', t:'09:10', dir:'in',  bus:'DM-Ba 12-6612', sup:'Selim R.',   st:'up',    sold:1},
        {id:'u11', r:'U-04', t:'07:10', dir:'out', bus:'DM-Ba 15-0981', sup:'Anwar K.',   st:'done',  sold:18},
        {id:'u12', r:'U-04', t:'07:50', dir:'in',  bus:'DM-Ba 15-0981', sup:'Anwar K.',   st:'done',  sold:17},
        {id:'u13', r:'U-04', t:'08:40', dir:'out', bus:'DM-Ba 15-0981', sup:'Anwar K.',   st:'board', sold:10},
        {id:'u14', r:'U-04', t:'09:30', dir:'in',  bus:'DM-Ba 15-0981', sup:'Anwar K.',   st:'up',    sold:0},
      ],
      handover:{},
    },
  };

  // TEST CASE · long route: Uttara Express U-40 Gazipur ⇄ Sadarghat has 40 stops, to check how every screen copes.
  // Codes L01–L40; colors are spread around the color wheel (dark enough for white text).
  (() => {
    const names = ['Gazipur Chowrasta', 'Bhogra Bypass', 'Board Bazar', 'Kolej Gate', 'Tongi Station Road', 'Cherag Ali', 'Tongi Bridge', 'Abdullahpur', 'House Building', 'Azampur',
      'Rajlakshmi', 'Jasimuddin', 'Kawla', 'Airport', 'Khilkhet', 'Kuril Bishwa Road', 'Shewra', 'MES', 'Kakoli', 'Chairmanbari',
      'Mohakhali', 'Jahangir Gate', 'Bijoy Sarani', 'Farmgate', 'Karwan Bazar', 'Bangla Motor', 'Shahbag', 'Matsya Bhaban', 'Press Club', 'Paltan',
      'Gulistan', 'Golap Shah Mazar', 'Bangshal', 'Nayabazar', 'Tanti Bazar', 'Ray Shaheb Bazar', 'Johnson Road', 'Victoria Park', 'Banglabazar', 'Sadarghat'];
    let m = 0;
    const stops = names.map((n, i) => { if (i) m += 3 + (i % 3 === 0 ? 1 : 0);
      return {n, c:'L' + String(i + 1).padStart(2, '0'), m, st:1 + Math.min(3, Math.floor(i / 10)), col:`hsl(${Math.round(i * 137.5) % 360} 62% 36%)`}; });
    OPDATA.UX.routes['U-40'] = {a:'Gazipur', b:'Sadarghat', test:'40 stops', stops};
    Object.assign(OPDATA.UX.staff, {
      'Kamal U.': {n:'Kamal Uddin', init:'KU', role:'Supervisor', bus:'DM-Ba 16-0801', ph:'638', test:'40-stop route'},
      'Rina A.':  {n:'Rina Akter',  init:'RA', role:'Supervisor', bus:'DM-Ba 16-0802', ph:'417', test:'40-stop route'},
    });
    OPDATA.UX.buses.push({p:'DM-Ba 16-0801', m:'Hino RN8J', dev:'Sunmi V2s · U21', sync:'Just now'}, {p:'DM-Ba 16-0802', m:'Hino RN8J', dev:'Sunmi V2s · U22', sync:'1 min ago'});
    OPDATA.UX.inst.push('DM-Ba 16-0801');
    OPDATA.UX.deps.push(
      {id:'u15', r:'U-40', t:'06:00', dir:'out', bus:'DM-Ba 16-0802', sup:'Rina A.',  st:'done',  sold:52},
      {id:'u16', r:'U-40', t:'07:20', dir:'out', bus:'DM-Ba 16-0801', sup:'Kamal U.', st:'run', at:14, sold:41},
      {id:'u17', r:'U-40', t:'08:45', dir:'out', bus:'DM-Ba 16-0802', sup:'Rina A.',  st:'board', sold:12},
      {id:'u18', r:'U-40', t:'10:10', dir:'in',  bus:'DM-Ba 16-0801', sup:'Kamal U.', st:'up',    sold:0},
    );
  })();

  // Company view (Busbora HQ): every operator in this country. Operators in OPDATA use their full sample data; the others are summary rows only.
  // week = revenue for the 6 days before today. Friday (Fri 13) is the weekend in Bangladesh, so it is the low day.
  const OPERATORS = [
    {id:'SC', n:'Shapla City Service', city:'Mirpur, Dhaka',     st:'Active',     routes:4, buses:7,  devOff:0, joined:'Mar 2026', inv:'Paid',    week:[40100, 41300, 22600, 38900, 42200, 43000]},
    {id:'DL', n:'Dhanmondi Link',      city:'Dhanmondi, Dhaka',  st:'Active',     routes:3, buses:5,  devOff:1, joined:'Apr 2026', inv:'Paid',    week:[30200, 31400, 17100, 29500, 31800, 32300]},
    {id:'UX', n:'Uttara Express',      city:'Uttara, Dhaka',     st:'Active',     routes:3, buses:7,  devOff:2, joined:'Jan 2026', inv:'Due',     week:[44800, 46100, 25300, 43200, 47000, 47900]},
    {id:'BR', n:'Buriganga Riders',    city:'Old Dhaka',         st:'Active',     routes:4, buses:18, devOff:0, joined:'May 2026', inv:'Paid',    week:[132400, 136800, 74200, 128900, 135100, 138600], onRoad:11, tk:1240, rev:21800},
    {id:'GS', n:'Gulshan Shuttle',     city:'Gulshan, Dhaka',    st:'Active',     routes:4, buses:12, devOff:0, joined:'Jul 2026', inv:'Paid',    week:[92600, 95400, 51800, 90200, 94700, 96900], onRoad:7, tk:760, rev:15200},
    {id:'JB', n:'Jatrabari Commuter',  city:'Jatrabari, Dhaka',  st:'Onboarding', routes:2, buses:6,  devOff:0, joined:'Nov 2026', inv:'–',       week:[0, 0, 0, 0, 0, 0], onRoad:0, tk:0, rev:0},
    {id:'KR', n:'Keraniganj Rides',    city:'Keraniganj, Dhaka', st:'Suspended',  routes:2, buses:5,  devOff:0, joined:'Feb 2026', inv:'Overdue', week:[48600, 50200, 0, 0, 0, 0], onRoad:0, tk:0, rev:0},
  ];
  // Routes per operator. Operators in OPDATA use their full sample data; the others are summary rows only.
  // [id, from, to, stops, minutes, fare mode, departures today, status, note]
  const OP_ROUTES = {
    BR:[['B-01', 'Sadarghat', 'Gabtoli', 14, 55, 'Stage', 30, 'Live'], ['B-02', 'Sadarghat', 'Mirpur 10', 13, 60, 'Stage', 26, 'Live'],
        ['B-04', 'Gulistan', 'Jatrabari', 6, 22, 'Flat', 34, 'Live'], ['B-06', 'Babubazar', 'Mohammadpur', 9, 35, 'Stage', 22, 'Live']],
    GS:[['G-01', 'Gulshan 1', 'Banani', 5, 15, 'Flat', 40, 'Live'], ['G-02', 'Gulshan 2', 'Baridhara', 4, 12, 'Flat', 36, 'Live'],
        ['G-03', 'Gulshan 1', 'Notun Bazar', 6, 20, 'Stage', 28, 'Live'], ['G-04', 'Gulshan 2', 'Mohakhali', 7, 25, 'Stage', 0, 'Paused', 'Road works until 30 Nov']],
    JB:[['J-01', 'Jatrabari', 'Signboard', 7, 25, 'Stage', 0, 'Setup', 'Fares missing'], ['J-02', 'Jatrabari', 'Demra', 8, 30, 'Stage', 0, 'Setup', 'Ready · go-live 24 Nov']],
    KR:[['K-01', 'Babubazar Bridge', 'Keraniganj', 6, 20, 'Flat', 0, 'Paused', 'Operator suspended'], ['K-02', 'Postogola', 'Zinjira', 5, 18, 'Flat', 0, 'Paused', 'Operator suspended']],
  };

  return {
    id:'BD', name:'Bangladesh', flag:'🇧🇩',
    money:{code:'BDT', locale:'en-IN', step:5},           // en-IN groups in lakh/crore (12,34,567), as used in Bangladesh
    phone:{cc:'+880',
      mobile:ph => ['17', '18', '19', '13', '15', '16'][+ph % 6] + ph.slice(0, 2) + ' ' + String(100 + (+ph * 7) % 900) + ' ' + ph,   // 1XXX XXX XXX (sample)
      mask:ph => '+880 1••• ••• ' + ph},
    fares:{stage:[10, 20, 30, 40], buttons:[10, 20, 30, 40], flat:20},   // Dhaka city buses: minimum fare Tk 10
    text:{welcome:'Welcome! Sign in', hello:'Good morning', repeat:'Sat–Thu', search:'farmgate'},   // English: Bangladesh staff apps don't use Banglish
    // Reference only (not used by the screens yet): what changes per country in the real product
    info:{city:'Dhaka (Mirpur, Dhanmondi, Uttara)', timezone:'Asia/Dhaka (UTC+6)', weekend:'Friday (and Saturday for offices)', languages:'English · Bangla',
      mobileMoney:'bKash · Nagad · Rocket', plate:'DM-Ba 11-4527', bus:'Hino AK1J, Ashok Leyland Viking, Tata LPO'},
    stopCol:STOP_COL, opdata:OPDATA, operators:OPERATORS, opRoutes:OP_ROUTES,
    homeOp:'SC',                                          // operator the prototype opens with
    superAdmin:{i:'TA', n:'Tanvir Ahmed', r:'Busbora super-admin'},
    avgFare:{SC:17, DL:18, UX:22, BR:17, GS:20, JB:18, KR:16},   // used to estimate ticket counts in the platform report
    alerts:[       // company dashboard › Needs attention: [operator, level, title, detail]
      ['KR', 'crit', 'Keraniganj Rides suspended', 'Invoice for October is 21 days overdue. Their devices cannot sell until it is paid.'],
      ['UX', 'warn', 'Uttara Express · 2 devices not synced for over 2 hours', 'Tickets stay on the devices until they reconnect.'],
      ['GS', 'warn', 'Gulshan Shuttle · cash short by BDT 60', 'One supervisor handed over less than the system total yesterday.'],
      ['JB', 'info', 'Jatrabari Commuter is onboarding', 'Routes created; fares missing on 1 of 2 routes. Go-live planned for 24 Nov.'],
      ['SC', 'info', 'Shapla City Service · S-02 07:40 cancelled', 'Bus DM-Ba 14-6625 is in the workshop. No tickets were sold on it.'],
    ],
    longTest:{op:'UX', route:'U-40', user:'Kamal U.', title:'40 stops on one route',
      text:'Uttara Express · <b>U-40 Gazipur ⇄ Sadarghat</b>. Supervisors Kamal Uddin (bus on the road, at stop 15) and Rina Akter (boarding 08:45). Check the sale screen (up to 39 destinations), the web stop list, Routes &amp; stops and the fare matrix (780 stop pairs).'},
  };
})();
