/* ================= COUNTRY: TANZANIA (default) =================
   Loaded by src/prototype.html before the main script. Shape of this object: see COUNTRIES.md.
   Three operators have full sample data (routes, stops, staff, buses, departures, tickets):
   Meru Town Shuttle (Arusha), Kibo Daladala Co. (Moshi), Dar City Commuter (Dar es Salaam).
   Stop names are real places; operators, people, plates, times and money are made up. */
COUNTRIES.TZ = (() => {
  // One unique color per stop code, the same on every route, so riders and staff can spot a stop by color.
  const STOP_COL = {
    CS:'#1d4ed8', CT:'#0891b2', KL:'#16a34a', SK:'#b45309', NJ:'#ea580c', TG:'#db2777', UR:'#7c3aed',
    SN:'#4d7c0f', KI:'#dc2626', MZ:'#c026d3', OM:'#0d9488', NG:'#4f46e5',
    KM:'#78350f', TH:'#a16207', NP:'#9f1239',
    MB:'#e11d48', SB:'#9333ea', KR:'#475569', KS:'#166534',
    KJ:'#0284c7', BK:'#059669', MJ:'#57534e', MS:'#6b21a8',
    // Kibo Daladala Co. (Moshi)
    MO:'#1d4ed8', MW:'#0891b2', KU:'#16a34a', PA:'#b45309', BO:'#7c3aed', KB:'#dc2626', KX:'#0d9488',
    MR:'#c026d3', HI:'#ea580c', SO:'#4f46e5', YM:'#4d7c0f', ST:'#db2777', RA:'#a16207', KC:'#9f1239',
    // Dar City Commuter (Dar es Salaam)
    KK:'#1d4ed8', FI:'#dc2626', MG:'#16a34a', KN:'#b45309', MC:'#7c3aed', KT:'#0891b2', MN:'#db2777',
    PO:'#4f46e5', MM:'#0d9488', MA:'#ea580c', SH:'#a16207', UB:'#c026d3', KV:'#475569', SL:'#4d7c0f', OY:'#9f1239', MK:'#166534',
  };

  // Busbora = service provider (platform). Each operator owns its buses, routes, staff and tickets.
  // home = the user the prototype signs in as by default for each role.
  // Busbora = service provider (platform). Each operator owns its buses, routes, staff and tickets.
  // home = the user the prototype signs in as by default for each role.
  const OPDATA = {
    MT:{op:{id:'MT', n:'Meru Town Shuttle', init:'MT', city:'Arusha'}, admin:{i:'NS', n:'Neema Swai'}, seed:1117, home:{sup:'Juma M.', agent:'Amina K.'},
      routes:{
      'T-12':{a:'Central Stand', b:'Usa River', stops:[
        {n:'Central Bus Stand', c:'CS', m:0,  st:1},
        {n:'Clock Tower',       c:'CT', m:5,  st:1},
        {n:'Kaloleni',          c:'KL', m:10, st:2},
        {n:'Sakina',            c:'SK', m:16, st:2},
        {n:'Njiro Junction',    c:'NJ', m:22, st:3},
        {n:'Tengeru',           c:'TG', m:32, st:4},
        {n:'Usa River',         c:'UR', m:42, st:4},
      ]},
      'T-04':{a:'Central Stand', b:'Ngaramtoni', stops:[
        {n:'Central Bus Stand', c:'CS', m:0,  st:1},
        {n:'Clock Tower',       c:'CT', m:5,  st:1},
        {n:'Sanawari',          c:'SN', m:11, st:2},
        {n:'Sakina',            c:'SK', m:16, st:2},
        {n:'Kwa Idd',           c:'KI', m:21, st:3},
        {n:'Mianzini',          c:'MZ', m:27, st:3},
        {n:'Olmotonyi',         c:'OM', m:33, st:4},
        {n:'Ngaramtoni',        c:'NG', m:40, st:4},
      ]},
      'T-07':{a:'Kilombero', b:'Njiro', stops:[
        {n:'Kilombero Market',  c:'KM', m:0,  st:1},
        {n:'Kaloleni',          c:'KL', m:5,  st:1},
        {n:'Clock Tower',       c:'CT', m:9,  st:2},
        {n:'Themi',             c:'TH', m:14, st:2},
        {n:'Njiro Junction',    c:'NJ', m:19, st:3},
        {n:'Njiro PPF',         c:'NP', m:25, st:3},
      ]},
      'T-09':{a:'Central Stand', b:'Kisongo', stops:[
        {n:'Central Bus Stand', c:'CS', m:0,  st:1},
        {n:'Clock Tower',       c:'CT', m:5,  st:1},
        {n:'Mbauda',            c:'MB', m:12, st:2},
        {n:'Sombetini',         c:'SB', m:17, st:2},
        {n:'Kwa Mrombo',        c:'KR', m:24, st:3},
        {n:'Kisongo',           c:'KS', m:33, st:4},
      ]},
      'T-15':{a:'Kilombero', b:'Moshono', stops:[
        {n:'Kilombero Market',  c:'KM', m:0,  st:1},
        {n:'Kijenge',           c:'KJ', m:6,  st:1},
        {n:'Burka',             c:'BK', m:11, st:2},
        {n:'Majengo',           c:'MJ', m:16, st:2},
        {n:'Moshono',           c:'MS', m:23, st:3},
      ]},
      },
      staff:{
      'Juma M.':   {n:'Juma Mushi',     init:'JM', role:'Supervisor',    bus:'T 457 DKL', ph:'388', mob:'754 210 388'},
      'Joseph T.': {n:'Joseph Temba',   init:'JT', role:'Supervisor',    bus:'T 812 DMA', ph:'102'},
      'Baraka L.': {n:'Baraka Lyimo',   init:'BL', role:'Supervisor',    bus:'T 220 CXZ', ph:'716'},
      'Halima R.': {n:'Halima Rashidi', init:'HR', role:'Supervisor',    bus:'T 330 DFG', ph:'245'},
      'Petro K.':  {n:'Petro Kimaro',   init:'PK', role:'Supervisor',    bus:'T 615 DGH', ph:'930'},
      'Rehema J.': {n:'Rehema Joseph',  init:'RJ', role:'Supervisor',    bus:'T 118 DBE', ph:'571'},
      'Said M.':   {n:'Said Mbwambo',   init:'SM', role:'Supervisor',    bus:'T 742 DCK', ph:'064'},
      'Elia N.':   {n:'Elia Ngowi',     init:'EN', role:'Supervisor',    bus:'T 509 DLR', ph:'443'},
      'Grace M.':  {n:'Grace Mollel',   init:'GM', role:'Supervisor',    bus:'T 266 DNP', ph:'689'},
      'Amina K.':  {n:'Amina Kweka',    init:'AK', role:'Counter agent', at:'Central Bus Stand', atC:'CS', ph:'120', mob:'767 448 120'},
      'Fatuma O.': {n:'Fatuma Ole',     init:'FO', role:'Counter agent', at:'Kilombero Market', atC:'KM', ph:'857', early:1},
      },
      // Town trips have no seat limit: riders get on and off, so the same seat is sold many times on one trip.
      buses:[
      {p:'T 457 DKL', m:'Toyota Coaster',  dev:'Sunmi V2s · A17', sync:'1 min ago'},
      {p:'T 812 DMA', m:'Toyota Coaster',  dev:'Sunmi V2s · A21', sync:'Just now'},
      {p:'T 220 CXZ', m:'Toyota Coaster',  dev:'Sunmi V2s · A09', sync:'14 min ago', warn:1},
      {p:'T 330 DFG', m:'Nissan Civilian', dev:'iMin Swift · B02', sync:'2 min ago'},
      {p:'T 615 DGH', m:'Nissan Civilian', dev:'iMin Swift · B05', sync:'Just now'},
      {p:'T 118 DBE', m:'Toyota Coaster',  dev:'Sunmi V2s · A30', sync:'3 min ago'},
      {p:'T 742 DCK', m:'Toyota Coaster',  dev:'Sunmi V2s · A12', sync:'Yesterday 18:02', shop:'Brake repair'},
      {p:'T 509 DLR', m:'Toyota Coaster',  dev:'Sunmi V2s · A33', sync:'Just now'},
      {p:'T 266 DNP', m:'Nissan Civilian', dev:'iMin Swift · B08', sync:'2 min ago'},
      ],
      inst:['T 457 DKL','T 812 DMA','T 220 CXZ'],
      // Today's departures. st: done · run (on the road, at = stop index) · board · up (scheduled) · cancel
      deps:[
      {id:'d1',  r:'T-12', t:'06:45', dir:'in',  bus:'T 457 DKL', sup:'Juma M.',   st:'done',  sold:29},
      {id:'d2',  r:'T-12', t:'07:05', dir:'out', bus:'T 220 CXZ', sup:'Baraka L.', st:'done',  sold:25},
      {id:'d3',  r:'T-12', t:'07:20', dir:'in',  bus:'T 812 DMA', sup:'Joseph T.', st:'done',  sold:27},
      {id:'d4',  r:'T-12', t:'08:10', dir:'in',  bus:'T 220 CXZ', sup:'Baraka L.', st:'run', at:3, sold:22},
      {id:'d5',  r:'T-12', t:'08:15', dir:'out', bus:'T 812 DMA', sup:'Joseph T.', st:'run', at:4, sold:28},
      {id:'d6',  r:'T-12', t:'08:30', dir:'out', bus:'T 457 DKL', sup:'Juma M.',   st:'board', sold:0},
      {id:'d7',  r:'T-12', t:'09:45', dir:'in',  bus:'T 457 DKL', sup:'Juma M.',   st:'up',    sold:0},
      {id:'d8',  r:'T-12', t:'10:00', dir:'out', bus:'T 812 DMA', sup:'Joseph T.', st:'up',    sold:4},
      {id:'d9',  r:'T-12', t:'11:00', dir:'out', bus:'T 457 DKL', sup:'Juma M.',   st:'up',    sold:0},
      {id:'d10', r:'T-04', t:'06:30', dir:'out', bus:'T 330 DFG', sup:'Halima R.', st:'done',  sold:30},
      {id:'d11', r:'T-04', t:'07:45', dir:'out', bus:'T 742 DCK', sup:'Said M.',   st:'cancel', sold:0, note:'Bus in workshop'},
      {id:'d12', r:'T-04', t:'08:05', dir:'in',  bus:'T 330 DFG', sup:'Halima R.', st:'run', at:5, sold:27},
      {id:'d13', r:'T-04', t:'08:40', dir:'out', bus:'T 615 DGH', sup:'Petro K.',  st:'board', sold:30},
      {id:'d14', r:'T-04', t:'09:30', dir:'out', bus:'T 330 DFG', sup:'Halima R.', st:'up',    sold:2},
      {id:'d15', r:'T-04', t:'10:20', dir:'in',  bus:'T 615 DGH', sup:'Petro K.',  st:'up',    sold:0},
      {id:'d16', r:'T-07', t:'07:00', dir:'out', bus:'T 118 DBE', sup:'Rehema J.', st:'done',  sold:26},
      {id:'d17', r:'T-07', t:'07:40', dir:'in',  bus:'T 118 DBE', sup:'Rehema J.', st:'done',  sold:24},
      {id:'d18', r:'T-07', t:'08:20', dir:'out', bus:'T 118 DBE', sup:'Rehema J.', st:'run', at:3, sold:19},
      {id:'d19', r:'T-07', t:'09:10', dir:'in',  bus:'T 118 DBE', sup:'Rehema J.', st:'up',    sold:0},
      {id:'d20', r:'T-07', t:'09:50', dir:'out', bus:'T 118 DBE', sup:'Rehema J.', st:'up',    sold:1},
      {id:'d21', r:'T-09', t:'06:50', dir:'out', bus:'T 509 DLR', sup:'Elia N.',   st:'done',  sold:23},
      {id:'d22', r:'T-09', t:'07:35', dir:'in',  bus:'T 509 DLR', sup:'Elia N.',   st:'done',  sold:26},
      {id:'d23', r:'T-09', t:'08:25', dir:'out', bus:'T 509 DLR', sup:'Elia N.',   st:'run', at:2, sold:18},
      {id:'d24', r:'T-09', t:'09:20', dir:'in',  bus:'T 509 DLR', sup:'Elia N.',   st:'up',    sold:0},
      {id:'d25', r:'T-09', t:'10:15', dir:'out', bus:'T 509 DLR', sup:'Elia N.',   st:'up',    sold:3},
      {id:'d26', r:'T-15', t:'07:10', dir:'out', bus:'T 266 DNP', sup:'Grace M.',  st:'done',  sold:21},
      {id:'d27', r:'T-15', t:'07:45', dir:'in',  bus:'T 266 DNP', sup:'Grace M.',  st:'done',  sold:24},
      {id:'d28', r:'T-15', t:'08:35', dir:'out', bus:'T 266 DNP', sup:'Grace M.',  st:'board', sold:9},
      {id:'d29', r:'T-15', t:'09:15', dir:'in',  bus:'T 266 DNP', sup:'Grace M.',  st:'up',    sold:0},
      ],
      handover:{'Halima R.':-500},   // cash handed over minus system total, for closed trips
    },
    KD:{op:{id:'KD', n:'Kibo Daladala Co.', init:'KD', city:'Moshi'}, admin:{i:'EK', n:'Esther Kimaro'}, seed:2203, home:{sup:'Daniel S.', agent:'Rose T.'},
      routes:{
        'K-01':{a:'Moshi Stand', b:'Kiboriloni', stops:[
          {n:'Moshi Bus Stand', c:'MO', m:0, st:1}, {n:'Mawenzi Hospital', c:'MW', m:5, st:1}, {n:'Kiusa', c:'KU', m:10, st:2},
          {n:'Pasua', c:'PA', m:15, st:2}, {n:'Bomambuzi', c:'BO', m:21, st:3}, {n:'Kiboriloni', c:'KB', m:27, st:3},
        ]},
        'K-03':{a:'Moshi Stand', b:'Himo', stops:[
          {n:'Moshi Bus Stand', c:'MO', m:0, st:1}, {n:'Mawenzi Hospital', c:'MW', m:5, st:1}, {n:'Kiboriloni', c:'KB', m:12, st:2},
          {n:'Kilema Junction', c:'KX', m:22, st:3}, {n:'Marangu Junction', c:'MR', m:30, st:4}, {n:'Himo', c:'HI', m:38, st:4},
        ]},
        'K-08':{a:'Soweto', b:'KCMC', stops:[
          {n:'Soweto', c:'SO', m:0, st:1}, {n:'Moshi Bus Stand', c:'MO', m:6, st:1}, {n:'YMCA', c:'YM', m:11, st:2},
          {n:'Shanty Town', c:'ST', m:16, st:2}, {n:'Rau', c:'RA', m:22, st:3}, {n:'KCMC', c:'KC', m:28, st:3},
        ]},
      },
      staff:{
        'Daniel S.':  {n:'Daniel Shirima',   init:'DS', role:'Supervisor',    bus:'T 341 DHM', ph:'214'},
        'Upendo M.':  {n:'Upendo Massawe',   init:'UM', role:'Supervisor',    bus:'T 588 DJK', ph:'530'},
        'Gaudence L.':{n:'Gaudence Lyimo',   init:'GL', role:'Supervisor',    bus:'T 902 DKA', ph:'871'},
        'Hassani A.': {n:'Hassani Athumani', init:'HA', role:'Supervisor',    bus:'T 117 DGB', ph:'365'},
        'Rose T.':    {n:'Rose Tarimo',      init:'RT', role:'Counter agent', at:'Moshi Bus Stand', atC:'MO', ph:'492'},
        'Mariamu S.': {n:'Mariamu Swai',     init:'MS', role:'Counter agent', at:'Soweto', atC:'SO', ph:'608', early:1},
      },
      buses:[
        {p:'T 341 DHM', m:'Toyota Coaster',  dev:'Sunmi V2s · K03', sync:'Just now'},
        {p:'T 588 DJK', m:'Toyota Coaster',  dev:'Sunmi V2s · K07', sync:'1 min ago'},
        {p:'T 902 DKA', m:'Nissan Civilian', dev:'iMin Swift · K11', sync:'3 min ago'},
        {p:'T 117 DGB', m:'Toyota Coaster',  dev:'Sunmi V2s · K02', sync:'26 min ago', warn:1},
        {p:'T 650 DLM', m:'Toyota Coaster',  dev:'Sunmi V2s · K14', sync:'Yesterday 19:40', shop:'Tyre change'},
      ],
      inst:['T 341 DHM','T 588 DJK','T 902 DKA'],
      deps:[
        {id:'k1',  r:'K-01', t:'06:40', dir:'out', bus:'T 341 DHM', sup:'Daniel S.',   st:'done',  sold:24},
        {id:'k2',  r:'K-01', t:'07:25', dir:'in',  bus:'T 341 DHM', sup:'Daniel S.',   st:'done',  sold:22},
        {id:'k3',  r:'K-01', t:'08:20', dir:'out', bus:'T 588 DJK', sup:'Upendo M.',   st:'run', at:3, sold:20},
        {id:'k4',  r:'K-01', t:'08:35', dir:'out', bus:'T 341 DHM', sup:'Daniel S.',   st:'board', sold:6},
        {id:'k5',  r:'K-01', t:'09:40', dir:'in',  bus:'T 341 DHM', sup:'Daniel S.',   st:'up',    sold:0},
        {id:'k6',  r:'K-03', t:'06:55', dir:'out', bus:'T 902 DKA', sup:'Gaudence L.', st:'done',  sold:27},
        {id:'k7',  r:'K-03', t:'07:50', dir:'in',  bus:'T 902 DKA', sup:'Gaudence L.', st:'run', at:4, sold:25},
        {id:'k8',  r:'K-03', t:'09:00', dir:'out', bus:'T 588 DJK', sup:'Upendo M.',   st:'up',    sold:2},
        {id:'k9',  r:'K-08', t:'07:00', dir:'out', bus:'T 117 DGB', sup:'Hassani A.',  st:'done',  sold:21},
        {id:'k10', r:'K-08', t:'07:45', dir:'in',  bus:'T 117 DGB', sup:'Hassani A.',  st:'done',  sold:19},
        {id:'k11', r:'K-08', t:'08:30', dir:'out', bus:'T 117 DGB', sup:'Hassani A.',  st:'run', at:1, sold:14},
        {id:'k12', r:'K-08', t:'09:20', dir:'in',  bus:'T 650 DLM', sup:'Hassani A.',  st:'cancel', sold:0, note:'Bus in workshop'},
        {id:'k13', r:'K-08', t:'09:50', dir:'in',  bus:'T 117 DGB', sup:'Hassani A.',  st:'up',    sold:0},
        {id:'k14', r:'K-08', t:'10:30', dir:'out', bus:'T 117 DGB', sup:'Hassani A.',  st:'up',    sold:3},
      ],
      handover:{'Gaudence L.':-1000},
    },
    DC:{op:{id:'DC', n:'Dar City Commuter', init:'DC', city:'Dar es Salaam'}, admin:{i:'JM', n:'Joyce Mwakyusa'}, seed:3301, home:{sup:'Omari K.', agent:'Zawadi J.'},
      routes:{
        'D-01':{a:'Kariakoo', b:'Mwenge', stops:[
          {n:'Kariakoo', c:'KK', m:0, st:1}, {n:'Fire', c:'FI', m:6, st:1}, {n:'Magomeni', c:'MG', m:13, st:2}, {n:'Kinondoni', c:'KN', m:20, st:2},
          {n:'Morocco', c:'MC', m:27, st:3}, {n:'Kijitonyama', c:'KT', m:35, st:3}, {n:'Mwenge', c:'MN', m:44, st:4},
        ]},
        'D-02':{a:'Posta', b:'Ubungo', stops:[
          {n:'Posta', c:'PO', m:0, st:1}, {n:'Mnazi Mmoja', c:'MM', m:6, st:1}, {n:'Fire', c:'FI', m:11, st:2},
          {n:'Manzese', c:'MA', m:22, st:3}, {n:'Shekilango', c:'SH', m:28, st:3}, {n:'Ubungo', c:'UB', m:36, st:4},
        ]},
        'D-07':{a:'Kivukoni', b:'Masaki', stops:[
          {n:'Kivukoni', c:'KV', m:0, st:1}, {n:'Posta', c:'PO', m:5, st:1}, {n:'Selander Bridge', c:'SL', m:13, st:2},
          {n:'Oysterbay', c:'OY', m:19, st:2}, {n:'Masaki', c:'MK', m:25, st:3},
        ]},
      },
      staff:{
        'Omari K.':  {n:'Omari Kombo',   init:'OK', role:'Supervisor',    bus:'T 210 DPA', ph:'147'},
        'Agnes M.':  {n:'Agnes Mrema',   init:'AM', role:'Supervisor',    bus:'T 377 DPB', ph:'382'},
        'Salum H.':  {n:'Salum Hamisi',  init:'SH', role:'Supervisor',    bus:'T 455 DPC', ph:'726'},
        'Peter N.':  {n:'Peter Nyoni',   init:'PN', role:'Supervisor',    bus:'T 618 DPD', ph:'059'},
        'Zawadi J.': {n:'Zawadi Juma',   init:'ZJ', role:'Counter agent', at:'Kariakoo', atC:'KK', ph:'913'},
        'Hamza R.':  {n:'Hamza Rajabu',  init:'HR', role:'Counter agent', at:'Posta', atC:'PO', ph:'275', early:1},
      },
      buses:[
        {p:'T 210 DPA', m:'Toyota Coaster',  dev:'Sunmi V2s · D01', sync:'Just now'},
        {p:'T 377 DPB', m:'Toyota Coaster',  dev:'Sunmi V2s · D04', sync:'2 min ago'},
        {p:'T 455 DPC', m:'Nissan Civilian', dev:'iMin Swift · D09', sync:'1 min ago'},
        {p:'T 618 DPD', m:'Toyota Coaster',  dev:'Sunmi V2s · D12', sync:'Just now'},
        {p:'T 733 DPE', m:'Toyota Coaster',  dev:'Sunmi V2s · D15', sync:'2 h ago', warn:1},
      ],
      inst:['T 210 DPA','T 377 DPB','T 733 DPE'],
      deps:[
        {id:'c1',  r:'D-01', t:'06:30', dir:'out', bus:'T 210 DPA', sup:'Omari K.', st:'done',  sold:30},
        {id:'c2',  r:'D-01', t:'07:15', dir:'in',  bus:'T 210 DPA', sup:'Omari K.', st:'done',  sold:28},
        {id:'c3',  r:'D-01', t:'08:05', dir:'out', bus:'T 377 DPB', sup:'Agnes M.', st:'run', at:4, sold:26},
        {id:'c4',  r:'D-01', t:'08:35', dir:'out', bus:'T 210 DPA', sup:'Omari K.', st:'board', sold:8},
        {id:'c5',  r:'D-01', t:'09:30', dir:'in',  bus:'T 210 DPA', sup:'Omari K.', st:'up',    sold:0},
        {id:'c6',  r:'D-01', t:'10:15', dir:'out', bus:'T 377 DPB', sup:'Agnes M.', st:'up',    sold:3},
        {id:'c7',  r:'D-02', t:'06:45', dir:'out', bus:'T 455 DPC', sup:'Salum H.', st:'done',  sold:29},
        {id:'c8',  r:'D-02', t:'07:40', dir:'in',  bus:'T 455 DPC', sup:'Salum H.', st:'done',  sold:27},
        {id:'c9',  r:'D-02', t:'08:25', dir:'out', bus:'T 455 DPC', sup:'Salum H.', st:'run', at:2, sold:21},
        {id:'c10', r:'D-02', t:'09:10', dir:'in',  bus:'T 455 DPC', sup:'Salum H.', st:'up',    sold:1},
        {id:'c11', r:'D-07', t:'07:10', dir:'out', bus:'T 618 DPD', sup:'Peter N.', st:'done',  sold:18},
        {id:'c12', r:'D-07', t:'07:50', dir:'in',  bus:'T 618 DPD', sup:'Peter N.', st:'done',  sold:16},
        {id:'c13', r:'D-07', t:'08:40', dir:'out', bus:'T 618 DPD', sup:'Peter N.', st:'board', sold:10},
        {id:'c14', r:'D-07', t:'09:20', dir:'in',  bus:'T 618 DPD', sup:'Peter N.', st:'up',    sold:0},
      ],
      handover:{},
    },
  };
  // TEST CASE · long route: Dar City Commuter D-70 Kariakoo ⇄ Bagamoyo has 70 stops, to check how every screen copes.
  // Codes B01–B70; colors are spread around the color wheel (dark enough for white text).
  (() => {
    const names = ['Kariakoo', 'Msimbazi', 'Fire', 'Magomeni Mapipa', 'Magomeni Mikumi', 'Kagera', 'Mwananyamala', 'Kinondoni Mkwajuni', 'Kinondoni Studio', 'Morocco',
      'Victoria', 'Makumbusho', 'Kijitonyama', 'Sayansi', 'Mwenge', 'Lugalo', 'Kawe Mzimuni', 'Kawe', 'Kawe Ukwamani', 'Mbezi Beach',
      'Africana', 'Goig', 'Tangi Bovu', 'Mbezi Jogoo', 'Ununio Junction', 'Kilongawima', 'Ali Maua', 'Kunduchi', 'Kunduchi Mtongani', 'Tegeta Nyuki',
      'Tegeta Kibaoni', 'Tegeta', 'Wazo', 'Salasala', 'Madale Junction', 'Boko Magengeni', 'Boko', 'Bunju A', 'Bunju B', 'Bunju Sokoni',
      'Bunju Mwisho', 'Mbopo', 'Mabwepande', 'Mpakani', 'Mapinga Shule', 'Mapinga', 'Mapinga Mwisho', 'Kerege Junction', 'Kerege Shule', 'Kerege',
      'Kerege Sokoni', 'Zinga Mwisho', 'Zinga Kati', 'Zinga', 'Kiromo Junction', 'Kiromo', 'Mataya', 'Kitopeni', 'Kongo', 'Nianjema',
      'Mangesani', 'Dunda', 'Magomeni Bagamoyo', 'Majengo Bagamoyo', 'Mwanamakuka', 'Kisutu Bagamoyo', 'Mji Mkongwe', 'Bagamoyo Hospital', 'Bagamoyo Market', 'Bagamoyo Stand'];
    let m = 0;
    const stops = names.map((n, i) => { if (i) m += 2 + (i % 3 === 0 ? 1 : 0);
      return {n, c:'B' + String(i + 1).padStart(2, '0'), m, st:1 + Math.min(3, Math.floor(i / 18)), col:`hsl(${Math.round(i * 137.5) % 360} 62% 36%)`}; });
    OPDATA.DC.routes['D-70'] = {a:'Kariakoo', b:'Bagamoyo', test:'70 stops', stops};
    Object.assign(OPDATA.DC.staff, {
      'Ibrahim M.': {n:'Ibrahim Mfinanga', init:'IM', role:'Supervisor', bus:'T 801 DPF', ph:'638', test:'70-stop route'},
      'Khadija S.': {n:'Khadija Seif',     init:'KS', role:'Supervisor', bus:'T 802 DPG', ph:'417', test:'70-stop route'},
    });
    OPDATA.DC.buses.push({p:'T 801 DPF', m:'Yutong ZK6729', dev:'Sunmi V2s · D21', sync:'Just now'}, {p:'T 802 DPG', m:'Yutong ZK6729', dev:'Sunmi V2s · D22', sync:'1 min ago'});
    OPDATA.DC.inst.push('T 801 DPF');
    OPDATA.DC.deps.push(
      {id:'c15', r:'D-70', t:'06:00', dir:'out', bus:'T 802 DPG', sup:'Khadija S.', st:'done',  sold:58},
      {id:'c16', r:'D-70', t:'07:20', dir:'out', bus:'T 801 DPF', sup:'Ibrahim M.', st:'run', at:24, sold:46},
      {id:'c17', r:'D-70', t:'08:45', dir:'out', bus:'T 802 DPG', sup:'Khadija S.', st:'board', sold:14},
      {id:'c18', r:'D-70', t:'10:10', dir:'in',  bus:'T 801 DPF', sup:'Ibrahim M.', st:'up',    sold:0},
    );
  })();

  // Company view (Busbora HQ): every operator in this country. Operators in OPDATA use their full sample data; the others are summary rows only.
  const OPERATORS = [
    {id:'MT', n:'Meru Town Shuttle',     city:'Arusha',        st:'Active',     routes:5, buses:9,  devOff:0, joined:'Mar 2026', inv:'Paid',    week:[1842500, 1910300, 2034600, 2105800, 1402800, 1965200]},
    {id:'KD', n:'Kibo Daladala Co.',     city:'Moshi',         st:'Active',     routes:4, buses:11, devOff:1, joined:'Apr 2026', inv:'Paid',    week:[3104000, 3220500, 3315800, 3412000, 2210400, 3180900], onRoad:6,  tk:618,  rev:552600},
    {id:'DC', n:'Dar City Commuter',     city:'Dar es Salaam', st:'Active',     routes:9, buses:38, devOff:3, joined:'Jan 2026', inv:'Due',     week:[16120000, 16840500, 17010200, 15980400, 11240800, 16550300], onRoad:24, tk:3186, rev:2871400},
    {id:'LV', n:'Lake Victoria Shuttle', city:'Mwanza',        st:'Active',     routes:5, buses:14, devOff:0, joined:'May 2026', inv:'Paid',    week:[4210500, 4380200, 4402100, 4520900, 3010700, 4298800], onRoad:8,  tk:842,  rev:716200},
    {id:'CH', n:'Capital Hop',           city:'Dodoma',        st:'Active',     routes:3, buses:7,  devOff:0, joined:'Jul 2026', inv:'Paid',    week:[1980400, 2010300, 2102500, 2210800, 1405200, 2050600], onRoad:4,  tk:401,  rev:340800},
    {id:'HL', n:'Highland Link',         city:'Mbeya',         st:'Onboarding', routes:2, buses:4,  devOff:0, joined:'Nov 2026', inv:'–',       week:[0, 0, 0, 0, 0, 0], onRoad:0, tk:0, rev:0},
    {id:'TC', n:'Tanga Coast Riders',    city:'Tanga',         st:'Suspended',  routes:2, buses:5,  devOff:0, joined:'Feb 2026', inv:'Overdue', week:[980200, 1010400, 0, 0, 0, 0], onRoad:0, tk:0, rev:0},
  ];
  // Routes per operator. Operators in OPDATA use their full sample data; the others are summary rows only.
  // [id, from, to, stops, minutes, fare mode, departures today, status, note]
  const OP_ROUTES = {
    _KD:[['K-01', 'Moshi Stand', 'Kiboriloni', 8, 26, 'Stage', 22, 'Live'], ['K-03', 'Moshi Stand', 'Himo', 10, 38, 'Stage', 18, 'Live'],
        ['K-05', 'Moshi Stand', 'Shanty Town', 6, 18, 'Flat', 26, 'Live'], ['K-08', 'Soweto', 'KCMC', 9, 30, 'Stage', 16, 'Live']],
    _DC:[['D-01', 'Kariakoo', 'Mwenge', 12, 45, 'Matrix', 40, 'Live'], ['D-02', 'Posta', 'Ubungo', 11, 40, 'Matrix', 44, 'Live'],
        ['D-04', 'Kariakoo', 'Tegeta', 16, 65, 'Stage', 30, 'Live'], ['D-05', 'Posta', 'Mbagala', 14, 55, 'Stage', 36, 'Live'],
        ['D-07', 'Kivukoni', 'Masaki', 7, 22, 'Flat', 28, 'Live'], ['D-09', 'Ubungo', 'Kimara', 8, 25, 'Flat', 34, 'Live'],
        ['D-11', 'Gerezani', 'Gongo la Mboto', 15, 60, 'Stage', 24, 'Live'], ['D-12', 'Mwenge', 'Bunju', 10, 38, 'Stage', 20, 'Live'],
        ['D-15', 'Kariakoo', 'Tabata', 9, 32, 'Stage', 0, 'Paused', 'Road works until 30 Nov']],
    LV:[['L-01', 'Mwanza Stand', 'Igoma', 9, 30, 'Stage', 24, 'Live'], ['L-02', 'Mwanza Stand', 'Buhongwa', 11, 38, 'Stage', 22, 'Live'],
        ['L-03', 'Kamanga Ferry', 'Nyakato', 8, 28, 'Stage', 20, 'Live'], ['L-05', 'Mwanza Stand', 'Airport', 6, 20, 'Flat', 18, 'Live'],
        ['L-06', 'Pasiansi', 'Mkuyuni', 7, 24, 'Stage', 16, 'Live']],
    CH:[['C-01', 'Jamatini', 'UDOM', 8, 30, 'Stage', 20, 'Live'], ['C-02', 'Jamatini', 'Makulu', 7, 22, 'Flat', 18, 'Live'],
        ['C-04', 'Nane Nane', 'Kisasa', 6, 20, 'Flat', 14, 'Live']],
    HL:[['H-01', 'Mbeya Stand', 'Uyole', 9, 32, 'Stage', 0, 'Setup', 'Fares missing'], ['H-02', 'Mbeya Stand', 'Iyunga', 7, 24, 'Stage', 0, 'Setup', 'Ready · go-live 24 Nov']],
    TC:[['G-01', 'Tanga Stand', 'Pongwe', 8, 28, 'Stage', 0, 'Paused', 'Operator suspended'], ['G-02', 'Tanga Stand', 'Deep Sea', 6, 18, 'Flat', 0, 'Paused', 'Operator suspended']],
  };

  return {
    id:'TZ', name:'Tanzania', flag:'🇹🇿',
    money:{code:'TZS', locale:'en-US', step:50},          // step = fares and averages are rounded to this
    phone:{cc:'+255',
      mobile:ph => '7' + ph.slice(0, 2) + ' ' + String(100 + (+ph * 7) % 900) + ' ' + ph,   // 7XX XXX XXX (sample, built from the last 3 digits)
      mask:ph => '+255 7•• ••• ' + ph},
    fares:{stage:[500, 800, 1000, 1500], buttons:[500, 800, 1000, 1500], flat:800},   // stage = adult price by stage difference 0..3 · buttons = Model B
    text:{welcome:'Karibu! Sign in', hello:'Habari', repeat:'Mon–Sat', search:'tengeru'},
    // Reference only (not used by the screens yet): what changes per country in the real product
    info:{city:'Arusha, Moshi, Dar es Salaam', timezone:'Africa/Dar_es_Salaam (UTC+3)', weekend:'Sunday', languages:'English · Kiswahili',
      mobileMoney:'M-Pesa · Tigo Pesa · Airtel Money', plate:'T 457 DKL', bus:'Toyota Coaster, Nissan Civilian'},
    stopCol:STOP_COL, opdata:OPDATA, operators:OPERATORS, opRoutes:OP_ROUTES,
    homeOp:'MT',                                          // operator the prototype opens with
    superAdmin:{i:'DM', n:'Daudi Mollel', r:'Busbora super-admin'},
    avgFare:{MT:930, KD:895, DC:900, LV:850, CH:850, HL:900, TC:880},   // used to estimate ticket counts in the platform report
    alerts:[       // company dashboard › Needs attention: [operator, level, title, detail]
      ['TC', 'crit', 'Tanga Coast Riders suspended', 'Invoice for October is 21 days overdue. Their devices cannot sell until it is paid.'],
      ['DC', 'warn', 'Dar City Commuter · 3 devices not synced for over 2 hours', 'Tickets stay on the devices until they reconnect.'],
      ['CH', 'warn', 'Capital Hop · cash short by TZS 2,500', 'One supervisor handed over less than the system total yesterday.'],
      ['HL', 'info', 'Highland Link is onboarding', 'Routes created; fares missing on 1 of 2 routes. Go-live planned for 24 Nov.'],
      ['MT', 'info', 'Meru Town Shuttle · T-04 07:45 cancelled', 'Bus T 742 DCK is in the workshop. No tickets were sold on it.'],
    ],
    longTest:{op:'DC', route:'D-70', user:'Ibrahim M.', title:'70 stops on one route',
      text:'Dar City Commuter · <b>D-70 Kariakoo ⇄ Bagamoyo</b>. Supervisors Ibrahim Mfinanga (bus on the road, at stop 25) and Khadija Seif (boarding 08:45). Check the sale screen (up to 69 destinations), the web stop list, Routes &amp; stops and the fare matrix (2,415 stop pairs).'},
  };
})();
