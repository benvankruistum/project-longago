// ===== ICONS (multicolor flat SVG) =====
const ICONS = {
    building: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="14" width="44" height="46" rx="3" fill="#5B7DB1"/><rect x="10" y="14" width="44" height="8" rx="3" fill="#4A6FA5"/><rect x="18" y="28" width="8" height="8" rx="1.5" fill="#FDE68A"/><rect x="28" y="28" width="8" height="8" rx="1.5" fill="#FDE68A"/><rect x="38" y="28" width="8" height="8" rx="1.5" fill="#FDE68A"/><rect x="18" y="40" width="8" height="8" rx="1.5" fill="#FDE68A"/><rect x="38" y="40" width="8" height="8" rx="1.5" fill="#FDE68A"/><rect x="27" y="46" width="10" height="14" rx="2" fill="#E8985A"/><rect x="10" y="8" width="44" height="8" rx="3" fill="#4A6FA5"/><rect x="26" y="4" width="12" height="6" rx="2" fill="#3B5998"/></svg>`,
    person: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="18" r="12" fill="#F4A261"/><path d="M12 58c0-11.046 8.954-20 20-20s20 8.954 20 20" fill="#5B9BD5"/><circle cx="27" cy="16" r="2" fill="#333"/><circle cx="37" cy="16" r="2" fill="#333"/><path d="M28 22c0 2.2 1.8 4 4 4s4-1.8 4-4" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/></svg>`,
    house: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 30L32 8l24 22H8z" fill="#E8985A"/><rect x="14" y="30" width="36" height="28" fill="#FFF3E0"/><rect x="22" y="36" width="8" height="8" rx="1" fill="#87CEEB"/><rect x="34" y="36" width="8" height="8" rx="1" fill="#87CEEB"/><rect x="27" y="48" width="10" height="10" rx="2" fill="#A0522D"/><circle cx="35" cy="53" r="1" fill="#FFD700"/><path d="M32 8l24 22h-6L32 14 14 30H8L32 8z" fill="#D4764E"/></svg>`,
    chart: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="36" width="12" height="22" rx="2" fill="#5B9BD5"/><rect x="26" y="20" width="12" height="38" rx="2" fill="#2ECC71"/><rect x="44" y="28" width="12" height="30" rx="2" fill="#F4A261"/><path d="M8 14l16 8 16-6 16 4" stroke="#E74C3C" stroke-width="2.5" stroke-linecap="round" fill="none"/><circle cx="8" cy="14" r="3" fill="#E74C3C"/><circle cx="24" cy="22" r="3" fill="#E74C3C"/><circle cx="40" cy="16" r="3" fill="#E74C3C"/><circle cx="56" cy="20" r="3" fill="#E74C3C"/></svg>`,
    target: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#FFE0E0"/><circle cx="32" cy="32" r="20" fill="#FFF"/><circle cx="32" cy="32" r="14" fill="#FFB3B3"/><circle cx="32" cy="32" r="8" fill="#FFF"/><circle cx="32" cy="32" r="4" fill="#E74C3C"/><path d="M46 10l6-2-2 6-4 12-12 4 12-4 4-12z" fill="#5B9BD5"/><line x1="36" y1="28" x2="50" y2="14" stroke="#5B9BD5" stroke-width="2"/></svg>`,
    gear: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28 6h8l1.5 7.2a22 22 0 015.7 3.3L50 13l4 6.9-5.7 4.8a22 22 0 010 6.6L54 36l-4 6.9-6.8-3.5a22 22 0 01-5.7 3.3L36 50h-8l-1.5-7.3a22 22 0 01-5.7-3.3L14 43l-4-7 5.7-4.8a22 22 0 010-6.6L10 20l4-7 6.8 3.5a22 22 0 015.7-3.3L28 6z" fill="#8E8E93"/><circle cx="32" cy="28" r="9" fill="#FFF"/><circle cx="32" cy="28" r="5" fill="#5B9BD5"/></svg>`,
    star: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 4l8.5 17.2L60 24l-14 13.6L49.2 58 32 48.7 14.8 58 18 37.6 4 24l19.5-2.8L32 4z" fill="#FFD700"/><path d="M32 4l8.5 17.2L60 24l-14 13.6L49.2 58 32 48.7V4z" fill="#FFC107"/></svg>`,
    warning: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.3 8.5a2 2 0 013.4 0l25 42A2 2 0 0157 54H7a2 2 0 01-1.7-3.5l25-42z" fill="#F39C12"/><rect x="29" y="24" width="6" height="18" rx="3" fill="#FFF"/><circle cx="32" cy="47" r="3" fill="#FFF"/></svg>`,
    refresh: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M50 20A22 22 0 0014 44" stroke="#5B9BD5" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M14 44A22 22 0 0050 20" stroke="#2ECC71" stroke-width="5" stroke-linecap="round" fill="none"/><path d="M50 10v14h-14" fill="none" stroke="#5B9BD5" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M14 54V40h14" fill="none" stroke="#2ECC71" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    money: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="32" r="28" fill="#2ECC71"/><circle cx="32" cy="32" r="24" fill="#27AE60"/><text x="32" y="42" text-anchor="middle" font-size="30" font-weight="700" fill="#FFF" font-family="sans-serif">\u20ac</text></svg>`,
    save: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="4" width="48" height="56" rx="4" fill="#5B9BD5"/><rect x="16" y="4" width="28" height="20" rx="2" fill="#3B7DD8"/><rect x="32" y="6" width="8" height="16" rx="1" fill="#2563EB"/><rect x="14" y="32" width="36" height="24" rx="2" fill="#FFF"/><rect x="20" y="38" width="24" height="3" rx="1" fill="#DDD"/><rect x="20" y="44" width="18" height="3" rx="1" fill="#DDD"/><rect x="20" y="50" width="22" height="3" rx="1" fill="#DDD"/></svg>`,
    edit: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M40.5 7.5l16 16-32 32H8.5v-16l32-32z" fill="#F4A261"/><path d="M40.5 7.5l16 16-4 4-16-16 4-4z" fill="#E8985A"/><path d="M8.5 55.5l4-16 12 12-16 4z" fill="#FDE68A"/><path d="M8.5 55.5l2-8 6 6-8 2z" fill="#333"/></svg>`,
    trash: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="18" width="36" height="40" rx="4" fill="#E74C3C"/><rect x="10" y="12" width="44" height="8" rx="3" fill="#C0392B"/><rect x="24" y="6" width="16" height="8" rx="3" fill="#E74C3C"/><rect x="22" y="26" width="4" height="24" rx="2" fill="#FFF" opacity="0.4"/><rect x="30" y="26" width="4" height="24" rx="2" fill="#FFF" opacity="0.4"/><rect x="38" y="26" width="4" height="24" rx="2" fill="#FFF" opacity="0.4"/></svg>`,
    drag: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="12" y="16" width="40" height="5" rx="2.5" fill="#CCC"/><rect x="12" y="29" width="40" height="5" rx="2.5" fill="#CCC"/><rect x="12" y="42" width="40" height="5" rx="2.5" fill="#CCC"/></svg>`,
    worker: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="32" cy="16" r="11" fill="#F4A261"/><rect x="14" y="34" width="36" height="26" rx="6" fill="#5B9BD5"/><rect x="22" y="38" width="20" height="4" rx="2" fill="#3B7DD8"/><circle cx="28" cy="14" r="1.8" fill="#333"/><circle cx="36" cy="14" r="1.8" fill="#333"/><rect x="24" y="4" width="16" height="8" rx="2" fill="#333"/><rect x="20" y="8" width="24" height="4" rx="1" fill="#333"/></svg>`,
    orgchart: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="4" width="24" height="14" rx="3" fill="#5B9BD5"/><rect x="4" y="42" width="20" height="14" rx="3" fill="#2ECC71"/><rect x="40" y="42" width="20" height="14" rx="3" fill="#F4A261"/><line x1="32" y1="18" x2="32" y2="30" stroke="#999" stroke-width="2"/><line x1="14" y1="30" x2="50" y2="30" stroke="#999" stroke-width="2"/><line x1="14" y1="30" x2="14" y2="42" stroke="#999" stroke-width="2"/><line x1="50" y1="30" x2="50" y2="42" stroke="#999" stroke-width="2"/></svg>`,
    arrow: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 32h32M36 20l12 12-12 12" stroke="#999" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
};

function icon(name, size = 24) {
    const svg = ICONS[name] || '';
    return `<span class="mc-icon" style="width:${size}px;height:${size}px;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;vertical-align:middle;">${svg.replace('<svg ', `<svg width="${size}" height="${size}" `)}</span>`;
}

// ===== STATE =====
let state = {
    employees: [],
    departments: [],
    allocations: [],    // { empId, deptId, fte, asRole }
    deptOrder: [],      // ordered dept ids for canvas
    company: { name: '', sbiCode: '', sbiLabel: '', type: '', employeeCount: '' },
    nextEmpId: 1,
    nextDeptId: 1
};

let currentView = 'canvas';

// ===== CONSTANTS =====
const COLORS_EMP = ['#3498db','#e74c3c','#2ecc71','#9b59b6','#f39c12','#1abc9c','#e67e22','#34495e','#e91e63','#00bcd4'];
const COLORS_DEPT = ['#e74c3c','#3498db','#2ecc71','#9b59b6','#f39c12','#1abc9c','#e67e22','#34495e','#e91e63','#795548'];

const ROLE_LABELS = {
    developer:'Developer', designer:'Designer', manager:'Manager', sales:'Sales',
    marketing:'Marketing', hr:'HR', finance:'Finance', support:'Support',
    operations:'Operations', overig:'Overig'
};
const BUILT_IN_ROLES = Object.keys(ROLE_LABELS);

const PRIORITY_LABELS = { high:'Hoog', medium:'Midden', low:'Laag' };
const PRIORITY_MULT = { high: 3, medium: 2, low: 1 };

// ===== SBI DATA =====
const SBI_DATA = [
    { code:'A', label:'Landbouw, bosbouw en visserij', section:true },
    { code:'01', label:'Teelt van gewassen, veeteelt, jacht' },
    { code:'02', label:'Bosbouw en houtoogst' },
    { code:'03', label:'Visserij en aquacultuur' },
    { code:'B', label:'Winning van delfstoffen', section:true },
    { code:'06', label:'Winning van aardolie en aardgas' },
    { code:'08', label:'Winning van delfstoffen (overig)' },
    { code:'C', label:'Industrie', section:true },
    { code:'10', label:'Vervaardiging van voedingsmiddelen' },
    { code:'11', label:'Vervaardiging van dranken' },
    { code:'13', label:'Vervaardiging van textiel' },
    { code:'14', label:'Vervaardiging van kleding' },
    { code:'16', label:'Houtindustrie' },
    { code:'17', label:'Vervaardiging van papier en karton' },
    { code:'18', label:'Drukkerijen en reproductie' },
    { code:'20', label:'Vervaardiging van chemische producten' },
    { code:'21', label:'Vervaardiging van farmaceutische producten' },
    { code:'22', label:'Vervaardiging van rubber- en kunststofproducten' },
    { code:'23', label:'Vervaardiging van overige niet-metaalhoudende minerale producten' },
    { code:'24', label:'Vervaardiging van metalen in primaire vorm' },
    { code:'25', label:'Vervaardiging van producten van metaal' },
    { code:'26', label:'Vervaardiging van computers en elektronische apparatuur' },
    { code:'27', label:'Vervaardiging van elektrische apparatuur' },
    { code:'28', label:'Vervaardiging van machines en apparaten' },
    { code:'29', label:'Vervaardiging van auto\'s en aanhangwagens' },
    { code:'30', label:'Vervaardiging van overige transportmiddelen' },
    { code:'31', label:'Vervaardiging van meubels' },
    { code:'32', label:'Overige industrie' },
    { code:'33', label:'Reparatie en installatie van machines' },
    { code:'D', label:'Energievoorziening', section:true },
    { code:'35', label:'Productie en distributie van elektriciteit, gas en warmte' },
    { code:'E', label:'Waterbedrijven en afvalbeheer', section:true },
    { code:'36', label:'Winning en distributie van water' },
    { code:'37', label:'Afvalwaterinzameling en -behandeling' },
    { code:'38', label:'Afvalinzameling en -behandeling' },
    { code:'39', label:'Sanering en overig afvalbeheer' },
    { code:'F', label:'Bouwnijverheid', section:true },
    { code:'41', label:'Algemene burgerlijke en utiliteitsbouw' },
    { code:'42', label:'Grond-, water- en wegenbouw' },
    { code:'43', label:'Gespecialiseerde bouw' },
    { code:'G', label:'Groot- en detailhandel; reparatie van auto\'s', section:true },
    { code:'45', label:'Handel in en reparatie van auto\'s' },
    { code:'46', label:'Groothandel (niet auto\'s)' },
    { code:'47', label:'Detailhandel (niet auto\'s)' },
    { code:'H', label:'Vervoer en opslag', section:true },
    { code:'49', label:'Vervoer over land' },
    { code:'50', label:'Vervoer over water' },
    { code:'51', label:'Luchtvaart' },
    { code:'52', label:'Opslag en dienstverlening voor vervoer' },
    { code:'53', label:'Post en koeriers' },
    { code:'I', label:'Logies-, maaltijd- en drankverstrekking', section:true },
    { code:'55', label:'Logiesverstrekking' },
    { code:'56', label:'Eet- en drinkgelegenheden' },
    { code:'J', label:'Informatie en communicatie', section:true },
    { code:'58', label:'Uitgeverijen' },
    { code:'59', label:'Film- en tv-productie, geluidsopname' },
    { code:'60', label:'Radio- en televisieomroepen' },
    { code:'61', label:'Telecommunicatie' },
    { code:'62', label:'IT-dienstverlening' },
    { code:'63', label:'Diensten op het gebied van informatie' },
    { code:'K', label:'Financiële instellingen', section:true },
    { code:'64', label:'Financiële dienstverlening' },
    { code:'65', label:'Verzekeringen en pensioenfondsen' },
    { code:'66', label:'Overige financiële dienstverlening' },
    { code:'L', label:'Verhuur van en handel in onroerend goed', section:true },
    { code:'68', label:'Verhuur van en handel in onroerend goed' },
    { code:'M', label:'Advisering, onderzoek en overige specialistische dienstverlening', section:true },
    { code:'69', label:'Rechtskundige dienstverlening, accountancy en belastingadvisering' },
    { code:'70', label:'Holdings en managementadvies' },
    { code:'71', label:'Architecten, ingenieurs en technisch advies' },
    { code:'72', label:'Speur- en ontwikkelingswerk' },
    { code:'73', label:'Reclame en marktonderzoek' },
    { code:'74', label:'Industrieel ontwerp, fotografie, vertaling' },
    { code:'75', label:'Veterinaire dienstverlening' },
    { code:'N', label:'Verhuur van roerende goederen en overige zakelijke dienstverlening', section:true },
    { code:'77', label:'Verhuur van roerende goederen' },
    { code:'78', label:'Uitzendbureaus en arbeidsbemiddeling' },
    { code:'79', label:'Reisbureaus en touroperators' },
    { code:'80', label:'Beveiliging en opsporing' },
    { code:'81', label:'Schoonmaak en landschapsverzorging' },
    { code:'82', label:'Overige zakelijke dienstverlening' },
    { code:'O', label:'Openbaar bestuur en overheidsdiensten', section:true },
    { code:'84', label:'Openbaar bestuur, overheidsdiensten en sociale verzekeringen' },
    { code:'P', label:'Onderwijs', section:true },
    { code:'85', label:'Onderwijs' },
    { code:'Q', label:'Gezondheids- en welzijnszorg', section:true },
    { code:'86', label:'Gezondheidszorg' },
    { code:'87', label:'Verpleging, verzorging en begeleiding met overnachting' },
    { code:'88', label:'Maatschappelijke dienstverlening zonder overnachting' },
    { code:'R', label:'Cultuur, sport en recreatie', section:true },
    { code:'90', label:'Kunst' },
    { code:'91', label:'Bibliotheken, musea en natuurbehoud' },
    { code:'92', label:'Loterijen en kansspelen' },
    { code:'93', label:'Sport en recreatie' },
    { code:'S', label:'Overige dienstverlening', section:true },
    { code:'94', label:'Levensbeschouwelijke en politieke organisaties, belangen- en ideële organisaties' },
    { code:'95', label:'Reparatie van computers en consumentenartikelen' },
    { code:'96', label:'Overige persoonlijke dienstverlening' },
    { code:'T', label:'Huishoudens als werkgever', section:true },
    { code:'97', label:'Huishoudens als werkgever van huishoudelijk personeel' },
    { code:'U', label:'Extraterritoriale organisaties', section:true },
    { code:'99', label:'Extraterritoriale organisaties en lichamen' }
];

// Build a fast lookup: 2-digit code -> section letter
const SBI_SECTION_MAP = (() => {
    const map = {};
    let currentSection = null;
    SBI_DATA.forEach(item => {
        if (item.section) currentSection = item.code;
        else map[item.code] = currentSection;
    });
    return map;
})();

function getSBISection(code) {
    return SBI_SECTION_MAP[code] || null;
}

// Salary data per SBI section (CBS/CPB 2025-2026)
const SECTOR_SALARIES = {
    'A': 34000, 'B': 72000, 'C': 48000, 'D': 62000, 'E': 46000,
    'F': 44000, 'G': 38000, 'H': 40000, 'I': 28000, 'J': 62000,
    'K': 68000, 'L': 48000, 'M': 56000, 'N': 34000, 'O': 52000,
    'P': 50000, 'Q': 46000, 'R': 34000, 'S': 36000, 'T': 24000, 'U': 65000
};

const SECTOR_EMPLOYER_COSTS = {
    'A': 45000, 'B': 97000, 'C': 65000, 'D': 84000, 'E': 62000,
    'F': 60000, 'G': 51000, 'H': 54000, 'I': 38000, 'J': 84000,
    'K': 92000, 'L': 65000, 'M': 76000, 'N': 46000, 'O': 70000,
    'P': 68000, 'Q': 62000, 'R': 46000, 'S': 49000, 'T': 32000, 'U': 88000
};

const EMPLOYER_COST_FACTOR = 1.35;

// ===== HELPERS =====
function roleLabel(r) {
    return ROLE_LABELS[r] || r.charAt(0).toUpperCase() + r.slice(1);
}

function priorityLabel(p) {
    return PRIORITY_LABELS[p] || p;
}

function getAllRoles() {
    const custom = state.departments.flatMap(d => d.roles);
    return [...new Set([...BUILT_IN_ROLES, ...custom])].filter(r => r);
}

function getAllocatedFTE(empId) {
    return state.allocations.filter(a => a.empId === empId).reduce((s, a) => s + a.fte, 0);
}

function getDeptFilled(deptId) {
    return state.allocations.filter(a => a.deptId === deptId).reduce((s, a) => s + a.fte, 0);
}

function adjustAllocations(empId, maxFte) {
    const allocs = state.allocations.filter(a => a.empId === empId);
    const total = allocs.reduce((s, a) => s + a.fte, 0);
    if (total <= maxFte) return;
    const ratio = maxFte / total;
    allocs.forEach(a => { a.fte = Math.round(a.fte * ratio * 10) / 10; });
}

function getCostPerFte() {
    const code = state.company && state.company.sbiCode;
    if (!code) return null;
    const section = getSBISection(code);
    if (!section) return null;
    return SECTOR_EMPLOYER_COSTS[section] || Math.round((SECTOR_SALARIES[section] || 48000) * EMPLOYER_COST_FACTOR);
}

function randomColor(palette) {
    return palette[Math.floor(Math.random() * palette.length)];
}

function fteBarColor(pct, invert) {
    if (invert) return pct >= 100 ? 'var(--accent)' : pct > 50 ? 'var(--accent4)' : 'var(--accent3)';
    return pct >= 100 ? 'var(--accent3)' : pct >= 50 ? 'var(--accent4)' : 'var(--accent)';
}

// ===== POPPETJE SVG =====
function darken(hex, amt) {
    hex = hex.replace('#','');
    const r = Math.max(0, parseInt(hex.substr(0,2),16) - amt);
    const g = Math.max(0, parseInt(hex.substr(2,2),16) - amt);
    const b = Math.max(0, parseInt(hex.substr(4,2),16) - amt);
    return `rgb(${r},${g},${b})`;
}

function poppetjeSVG(color, size = 44) {
    const s = size;
    const cx = s / 2;
    const hr = s * 0.22;
    const dk = darken(color, 35);
    return `<svg width="${s}" height="${s}" viewBox="0 0 ${s} ${s}" xmlns="http://www.w3.org/2000/svg">
        <circle cx="${cx}" cy="${s*0.22}" r="${hr}" fill="${color}" stroke="${dk}" stroke-width="1.5"/>
        <ellipse cx="${cx}" cy="${s*0.55}" rx="${s*0.22}" ry="${s*0.2}" fill="${color}" stroke="${dk}" stroke-width="1.5"/>
        <line x1="${cx-s*0.08}" y1="${s*0.72}" x2="${cx-s*0.13}" y2="${s*0.92}" stroke="${dk}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="${cx+s*0.08}" y1="${s*0.72}" x2="${cx+s*0.13}" y2="${s*0.92}" stroke="${dk}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="${cx-s*0.2}" y1="${s*0.5}" x2="${cx-s*0.3}" y2="${s*0.65}" stroke="${dk}" stroke-width="2" stroke-linecap="round"/>
        <line x1="${cx+s*0.2}" y1="${s*0.5}" x2="${cx+s*0.3}" y2="${s*0.65}" stroke="${dk}" stroke-width="2" stroke-linecap="round"/>
        <circle cx="${cx-hr*0.3}" cy="${s*0.19}" r="${hr*0.09}" fill="#333"/>
        <circle cx="${cx+hr*0.3}" cy="${s*0.19}" r="${hr*0.09}" fill="#333"/>
        <path d="M${cx-hr*0.25} ${s*0.27} Q${cx} ${s*0.34} ${cx+hr*0.25} ${s*0.27}" stroke="#333" stroke-width="1.2" fill="none" stroke-linecap="round"/>
        <ellipse cx="${cx-s*0.14}" cy="${s*0.94}" rx="${s*0.05}" ry="${s*0.03}" fill="${dk}"/>
        <ellipse cx="${cx+s*0.14}" cy="${s*0.94}" rx="${s*0.05}" ry="${s*0.03}" fill="${dk}"/>
    </svg>`;
}

// ===== TOAST =====
function toast(msg, type = 'success') {
    const el = document.getElementById('toast');
    el.textContent = msg;
    el.className = `toast ${type}`;
    setTimeout(() => el.classList.add('show'), 10);
    setTimeout(() => el.classList.remove('show'), 2500);
}

// ===== STORAGE =====
function saveState() {
    try { localStorage.setItem('wiezittwaar', JSON.stringify(state)); } catch(e) {}
}

function loadState() {
    try {
        const s = localStorage.getItem('wiezittwaar');
        if (s) state = JSON.parse(s);
    } catch(e) {}
}

// ===== NAVIGATION =====
function switchView(view) {
    currentView = view;
    document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
    document.getElementById(`view-${view}`).classList.add('active');
    document.querySelectorAll('.nav-item').forEach(n => {
        n.classList.toggle('active', n.dataset.view === view);
    });
    updateFab();
    document.getElementById('org-toolbar').style.display = view === 'orgchart' ? 'flex' : 'none';
    renderView();
    if (view === 'settings') {
        loadCompanyProfile();
        loadAIKey();
        updateCostOverview();
    }
    if (view === 'orgchart') renderOrgChart();
}

function fabAction() {
    if (currentView === 'canvas') {
        openSheet(`
            <h2>Wat wil je toevoegen?</h2>
            <div class="pick-item" onclick="closeSheet(); setTimeout(() => openEmployeeSheet(), 350);">
                <div>${icon('person', 32)}</div>
                <div class="pick-item-info">
                    <div class="pick-item-name">Medewerker</div>
                    <div class="pick-item-meta">Nieuw poppetje aanmaken</div>
                </div>
            </div>
            <div class="pick-item" onclick="closeSheet(); setTimeout(() => openDeptSheet(), 350);">
                <div>${icon('house', 32)}</div>
                <div class="pick-item-info">
                    <div class="pick-item-name">Afdeling</div>
                    <div class="pick-item-meta">Nieuwe afdeling aanmaken</div>
                </div>
            </div>
        `);
    } else if (currentView === 'employees') {
        openEmployeeSheet();
    } else if (currentView === 'departments') {
        openDeptSheet();
    } else if (currentView === 'orgchart') {
        openDeptSheet();
    }
}

function updateFab() {
    const fab = document.getElementById('fab');
    const label = document.getElementById('fab-label');
    const labels = { canvas: 'Toevoegen', employees: 'Medewerker', departments: 'Afdeling' };

    if (labels[currentView]) {
        label.textContent = labels[currentView];
        fab.style.display = 'flex';
    } else {
        fab.style.display = 'none';
    }
}

// ===== RENDER =====
function renderView() {
    if (currentView === 'canvas') renderCanvas();
    else if (currentView === 'employees') renderEmployees();
    else if (currentView === 'departments') renderDepartments();
    else if (currentView === 'orgchart') renderOrgChart();
    updateScores();
}

function renderAll() {
    renderView();
    updateScores();
    if (currentView === 'settings') updateCostOverview();
    if (currentView === 'orgchart') renderOrgChart();
}

// ===== CANVAS / OVERZICHT =====
function renderCanvas() {
    const container = document.getElementById('canvas-content');
    const costPerFte = getCostPerFte();

    let depts = state.departments.slice();
    if (state.deptOrder && state.deptOrder.length > 0) {
        depts.sort((a, b) => {
            const ia = state.deptOrder.indexOf(a.id);
            const ib = state.deptOrder.indexOf(b.id);
            return (ia === -1 ? 999 : ia) - (ib === -1 ? 999 : ib);
        });
    }

    if (depts.length === 0) {
        container.innerHTML = `<div class="empty">
            <div class="empty-icon">${icon('target', 48)}</div>
            <p>Nog geen afdelingen!<br/>Ga naar <b>Afdelingen</b> om er een aan te maken,<br/>of tik op <b>+</b></p>
        </div>`;
        return;
    }

    const hasApiKey = !!getAIKey();
    const hasEmpsAndDepts = state.employees.length > 0 && depts.length > 0;
    let html = (hasApiKey && hasEmpsAndDepts) ? `<div style="text-align:right;margin-bottom:10px;">
        <button class="btn btn-sm ai-alloc-btn" id="ai-alloc-btn" onclick="aiSuggestAllocation()">${icon('star', 16)} AI Indeling</button>
    </div>` : '';

    depts.forEach(dept => {
        const filled = getDeptFilled(dept.id);
        const pct = dept.fteNeeded > 0 ? Math.min(100, (filled / dept.fteNeeded) * 100) : 0;
        const barColor = fteBarColor(pct, false);
        const allocs = state.allocations.filter(a => a.deptId === dept.id);

        let poppetjesHTML = '';
        allocs.forEach(a => {
            const emp = state.employees.find(e => e.id === a.empId);
            if (!emp) return;
            const assignedRole = a.asRole || emp.role;
            const mismatch = assignedRole !== emp.role;
            const roleTag = mismatch
                ? `<span class="p-role mismatch">${icon('warning', 12)} ${roleLabel(assignedRole)}</span>`
                : (a.asRole ? `<span class="p-role">${roleLabel(assignedRole)}</span>` : '');
            poppetjesHTML += `<div class="canvas-poppetje ${mismatch ? 'role-mismatch' : ''}" onclick="openPersonOnDept(${emp.id}, ${dept.id})">
                ${poppetjeSVG(emp.color, 40)}
                <span class="p-fte">${a.fte}</span>
                ${roleTag}
            </div>`;
        });

        poppetjesHTML += `<div class="add-person-btn" onclick="openPickEmployee(${dept.id})">+</div>`;

        let rolesHTML = '';
        if (dept.roles.length > 0) {
            dept.roles.forEach(role => {
                const has = allocs.some(a => {
                    const assignedRole = a.asRole || (state.employees.find(e => e.id === a.empId) || {}).role;
                    return assignedRole === role;
                });
                rolesHTML += `<span class="badge ${has ? 'badge-filled' : 'badge-unfilled'}">${roleLabel(role)}</span>`;
            });
        }

        const costHTML = costPerFte
            ? `<div class="cost-bar" style="margin-top:8px;font-size:0.8em;">
                <span class="cost-label">Kosten</span>
                <span class="cost-value" style="color:var(--accent2);">\u20ac ${Math.round(filled * costPerFte).toLocaleString('nl-NL')}/jr</span>
            </div>`
            : '';

        html += `<div class="canvas-dept" data-dept-id="${dept.id}">
            <div class="card-color-bar" style="background:${dept.color}"></div>
            <div class="canvas-dept-header">
                <div class="drag-handle" data-drag="true">${icon('drag', 20)}</div>
                <div style="flex:1" onclick="openDeptSheet(${dept.id})">
                    <div class="canvas-dept-title">${dept.name}</div>
                    <div class="card-sub">${filled.toFixed(1)} / ${dept.fteNeeded.toFixed(1)} FTE &nbsp; <span class="badge badge-${dept.priority}">${priorityLabel(dept.priority)}</span></div>
                </div>
                <span style="font-size:1.2em;" onclick="openDeptSheet(${dept.id})">${icon('edit', 20)}</span>
            </div>
            <div class="canvas-dept-body">
                <div class="fte-bar">
                    <div class="fte-bar-fill" style="width:${pct}%;background:${barColor}"></div>
                </div>
                <div class="fte-info">
                    <span>Min: ${dept.minFte}</span>
                    <span>${pct.toFixed(0)}%</span>
                    <span>Max: ${dept.maxFte}</span>
                </div>
                ${rolesHTML ? `<div class="badges-row">${rolesHTML}</div>` : ''}
                ${costHTML}
                <div class="canvas-poppetjes">${poppetjesHTML}</div>
            </div>
        </div>`;
    });

    container.innerHTML = html;
    initCanvasDrag();
}

// ===== CANVAS DRAG REORDER =====
let dragEl = null, dragStartY = 0, dragStartX = 0, dragOffsetY = 0, dragOffsetX = 0;
let dragClone = null;

function initCanvasDrag() {
    const container = document.getElementById('canvas-content');
    container.querySelectorAll('[data-drag="true"]').forEach(handle => {
        handle.addEventListener('touchstart', onDragStart, { passive: false });
        handle.addEventListener('mousedown', onDragStart);
    });
}

function onDragStart(e) {
    e.preventDefault();
    const card = e.target.closest('.canvas-dept');
    if (!card) return;

    dragEl = card;
    const rect = card.getBoundingClientRect();
    const touch = e.touches ? e.touches[0] : e;

    dragOffsetY = touch.clientY - rect.top;
    dragOffsetX = touch.clientX - rect.left;

    dragClone = card.cloneNode(true);
    Object.assign(dragClone.style, {
        position: 'fixed', left: rect.left + 'px', top: rect.top + 'px',
        width: rect.width + 'px', zIndex: '999', pointerEvents: 'none'
    });
    dragClone.classList.add('dragging');
    document.body.appendChild(dragClone);

    card.classList.add('drop-placeholder');

    document.addEventListener('touchmove', onDragMove, { passive: false });
    document.addEventListener('touchend', onDragEnd);
    document.addEventListener('mousemove', onDragMove);
    document.addEventListener('mouseup', onDragEnd);
}

function onDragMove(e) {
    if (!dragEl || !dragClone) return;
    e.preventDefault();

    const touch = e.touches ? e.touches[0] : e;
    dragClone.style.left = (touch.clientX - dragOffsetX) + 'px';
    dragClone.style.top = (touch.clientY - dragOffsetY) + 'px';

    const container = document.getElementById('canvas-content');
    const cards = [...container.querySelectorAll('.canvas-dept:not(.drop-placeholder)')];

    for (const card of cards) {
        const rect = card.getBoundingClientRect();
        if (touch.clientY > rect.top && touch.clientY < rect.bottom &&
            touch.clientX > rect.left && touch.clientX < rect.right) {
            const midY = rect.top + rect.height / 2;
            const midX = rect.left + rect.width / 2;
            const before = container.offsetWidth < 600
                ? touch.clientY < midY
                : (touch.clientY < midY || (touch.clientY < rect.bottom && touch.clientX < midX));
            container.insertBefore(dragEl, before ? card : card.nextSibling);
            break;
        }
    }
}

function onDragEnd() {
    if (dragClone) { dragClone.remove(); dragClone = null; }
    if (dragEl) {
        dragEl.classList.remove('drop-placeholder');
        const container = document.getElementById('canvas-content');
        state.deptOrder = [...container.querySelectorAll('.canvas-dept')].map(el => parseInt(el.dataset.deptId));
        saveState();
        dragEl = null;
    }
    document.removeEventListener('touchmove', onDragMove);
    document.removeEventListener('touchend', onDragEnd);
    document.removeEventListener('mousemove', onDragMove);
    document.removeEventListener('mouseup', onDragEnd);
}

// ===== EMPLOYEES VIEW =====
function renderEmployees() {
    const container = document.getElementById('employees-list');

    if (state.employees.length === 0) {
        container.innerHTML = `<div class="empty">
            <div class="empty-icon">${icon('worker', 48)}</div>
            <p>Nog geen medewerkers!<br/>Tik op <b>+</b> om iemand toe te voegen.</p>
        </div>`;
        return;
    }

    let html = '';
    state.employees.forEach(emp => {
        const allocated = getAllocatedFTE(emp.id);
        const remaining = Math.round((emp.fte - allocated) * 10) / 10;
        const pct = emp.fte > 0 ? Math.min(100, (allocated / emp.fte) * 100) : 0;
        const barColor = fteBarColor(pct, true);

        const allocs = state.allocations.filter(a => a.empId === emp.id);
        let whereHTML = '';
        if (allocs.length > 0) {
            whereHTML = '<div class="badges-row">';
            allocs.forEach(a => {
                const dept = state.departments.find(d => d.id === a.deptId);
                if (dept) whereHTML += `<span class="connection-badge" style="border-left:3px solid ${dept.color}">${dept.name}: ${a.fte}</span>`;
            });
            whereHTML += '</div>';
        }

        html += `<div class="card" onclick="openEmployeeSheet(${emp.id})">
            <div class="card-color-bar" style="background:${emp.color}"></div>
            <div class="card-body">
                <div class="card-header">
                    <div class="poppetje">${poppetjeSVG(emp.color, 44)}</div>
                    <div style="flex:1">
                        <div class="card-title">${emp.name}</div>
                        <div class="card-sub">${roleLabel(emp.role)} &bull; ${emp.fte} FTE ${remaining > 0 ? `&bull; <span style="color:var(--accent3)">${remaining} vrij</span>` : ''}</div>
                    </div>
                </div>
                <div class="fte-bar">
                    <div class="fte-bar-fill" style="width:${pct}%;background:${barColor}"></div>
                </div>
                ${whereHTML}
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// ===== DEPARTMENTS VIEW =====
function renderDepartments() {
    const container = document.getElementById('departments-list');

    if (state.departments.length === 0) {
        container.innerHTML = `<div class="empty">
            <div class="empty-icon">${icon('building', 48)}</div>
            <p>Nog geen afdelingen!<br/>Tik op <b>+</b> om er een aan te maken.</p>
        </div>`;
        return;
    }

    let html = '';
    state.departments.forEach(dept => {
        const filled = getDeptFilled(dept.id);
        const pct = dept.fteNeeded > 0 ? Math.min(100, (filled / dept.fteNeeded) * 100) : 0;
        const barColor = fteBarColor(pct, false);

        html += `<div class="card" onclick="openDeptSheet(${dept.id})">
            <div class="card-color-bar" style="background:${dept.color}"></div>
            <div class="card-body">
                <div class="card-header">
                    <div class="card-title">${dept.name}</div>
                    <span class="badge badge-${dept.priority}">${priorityLabel(dept.priority)}</span>
                </div>
                <div class="card-sub" style="margin-top:4px;">${filled.toFixed(1)} / ${dept.fteNeeded.toFixed(1)} FTE &bull; Rollen: ${dept.roles.length > 0 ? dept.roles.map(roleLabel).join(', ') : 'Geen'}</div>
                <div class="fte-bar">
                    <div class="fte-bar-fill" style="width:${pct}%;background:${barColor}"></div>
                </div>
            </div>
        </div>`;
    });

    container.innerHTML = html;
}

// ===== SCORES =====
function updateScores() {
    let score = 0, totalNeeded = 0, totalFilled = 0, gaps = 0, mismatchPenalty = 0;

    state.departments.forEach(dept => {
        const filled = getDeptFilled(dept.id);
        const m = PRIORITY_MULT[dept.priority] || 1;
        totalNeeded += dept.fteNeeded;
        totalFilled += Math.min(filled, dept.fteNeeded);

        const fillPct = dept.fteNeeded > 0 ? filled / dept.fteNeeded : 1;
        score += Math.round(fillPct * 100 * m);

        if (filled < dept.minFte) {
            score -= Math.round(((dept.minFte - filled) / dept.minFte) * 50 * m);
            gaps++;
        }
        if (filled > dept.maxFte) score -= Math.round((filled - dept.maxFte) * 10);
        if (filled < dept.fteNeeded) gaps++;

        state.allocations.filter(a => a.deptId === dept.id).forEach(a => {
            const emp = state.employees.find(e => e.id === a.empId);
            if (!emp) return;
            const assignedRole = a.asRole || emp.role;
            if (assignedRole !== emp.role) {
                const ftePct = emp.fte > 0 ? a.fte / emp.fte : 0;
                const penalty = Math.round(25 * m * ftePct * (1 + ftePct));
                mismatchPenalty += penalty;
                score -= penalty;
            }
        });
    });

    let maxScore = 0;
    state.departments.forEach(dept => {
        maxScore += Math.round(100 * (PRIORITY_MULT[dept.priority] || 1));
    });

    score = Math.max(0, score);
    const scorePct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;
    const fillRate = totalNeeded > 0 ? Math.round((totalFilled / totalNeeded) * 100) : 0;

    document.getElementById('score-val').textContent = `${score}/${maxScore}`;
    document.getElementById('fill-val').textContent = fillRate + '%';
    document.getElementById('gaps-val').textContent = gaps;

    const classify = (val, good, warn) => val >= good ? 'good' : val >= warn ? 'warn' : 'bad';
    document.getElementById('pill-score').className = `pill ${classify(scorePct, 80, 40)}`;
    document.getElementById('pill-fill').className = `pill ${classify(fillRate, 80, 50)}`;
    document.getElementById('pill-gaps').className = `pill ${gaps === 0 ? 'good' : gaps <= 2 ? 'warn' : 'bad'}`;

    const pm = document.getElementById('pill-mismatch');
    document.getElementById('mismatch-val').textContent = '-' + mismatchPenalty;
    pm.style.display = mismatchPenalty > 0 ? 'flex' : 'none';
    pm.className = `pill ${mismatchPenalty > 50 ? 'bad' : mismatchPenalty > 0 ? 'warn' : 'good'}`;
}

// ===== PILL TOOLTIPS =====
let activeTooltip = null;
let tooltipTimeout = null;

const PILL_TOOLTIPS = {
    'pill-score': () => {
        const sv = document.getElementById('score-val').textContent;
        return `<strong>Score: ${sv}</strong><br>Punten op basis van bezetting. Hoge prioriteit = meer punten. Verkeerde rollen kosten strafpunten.`;
    },
    'pill-fill': () => {
        const fv = document.getElementById('fill-val').textContent;
        return `<strong>Bezetting: ${fv}</strong><br>Percentage van alle FTE-plekken dat ingevuld is over alle afdelingen.`;
    },
    'pill-gaps': () => {
        const gv = document.getElementById('gaps-val').textContent;
        return `<strong>Tekorten: ${gv}</strong><br>Aantal afdelingen dat onder de minimale of benodigde FTE zit.`;
    },
    'pill-mismatch': () => {
        const mv = document.getElementById('mismatch-val').textContent;
        return `<strong>Strafpunten: ${mv}</strong><br>Aftrek omdat medewerkers op een andere rol zijn ingedeeld dan hun eigen functie.`;
    }
};

function showPillTooltip(e) {
    dismissPillTooltip();
    const pill = e.currentTarget;
    const id = pill.id;
    const fn = PILL_TOOLTIPS[id];
    if (!fn) return;

    const tip = document.createElement('div');
    tip.className = 'pill-tooltip';
    tip.innerHTML = fn();
    document.body.appendChild(tip);
    activeTooltip = tip;

    // Position below the pill
    const rect = pill.getBoundingClientRect();
    const tipW = tip.offsetWidth;
    let left = rect.left + rect.width / 2 - tipW / 2;
    left = Math.max(8, Math.min(left, window.innerWidth - tipW - 8));
    tip.style.left = left + 'px';
    tip.style.top = (rect.bottom + 8) + 'px';

    tooltipTimeout = setTimeout(dismissPillTooltip, 3000);
}

function dismissPillTooltip() {
    if (activeTooltip) { activeTooltip.remove(); activeTooltip = null; }
    if (tooltipTimeout) { clearTimeout(tooltipTimeout); tooltipTimeout = null; }
}

// Attach tooltip listeners after DOM ready
document.querySelectorAll('.pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
        e.stopPropagation();
        showPillTooltip(e);
    });
});
document.addEventListener('click', dismissPillTooltip);

// ===== BOTTOM SHEETS =====
function openSheet(html) {
    const sheet = document.getElementById('sheet');
    document.getElementById('sheet-content').innerHTML = html;
    sheet.scrollTop = 0;
    document.getElementById('sheet-overlay').classList.add('show');
    setTimeout(() => sheet.classList.add('show'), 10);
}

function closeSheet() {
    document.getElementById('sheet').classList.remove('show');
    setTimeout(() => document.getElementById('sheet-overlay').classList.remove('show'), 300);
}

// -- Shared color picker --
function selectColorDot(containerId, hiddenId, el, color) {
    document.querySelectorAll(`#${containerId} .color-dot`).forEach(d => d.classList.remove('selected'));
    el.classList.add('selected');
    document.getElementById(hiddenId).value = color;
}

function colorDotsHTML(palette, selected, containerId, hiddenId) {
    return palette.map(c =>
        `<div class="color-dot ${c === selected ? 'selected' : ''}" style="background:${c}" onclick="selectColorDot('${containerId}','${hiddenId}',this,'${c}')"></div>`
    ).join('');
}

// -- Employee Sheet --
function openEmployeeSheet(empId) {
    const emp = empId ? state.employees.find(e => e.id === empId) : null;
    const selColor = emp ? emp.color : randomColor(COLORS_EMP);
    const deleteBtn = emp ? `<button class="btn btn-danger" style="margin-top:12px;" onclick="deleteEmployee(${emp.id})">Verwijderen</button>` : '';

    openSheet(`
        <h2>${emp ? icon('edit', 20) + ' ' + emp.name : icon('person', 20) + ' Nieuwe Medewerker'}</h2>
        <div class="form-group">
            <label>Naam</label>
            <input type="text" id="f-emp-name" value="${emp ? emp.name : ''}" placeholder="Jan Jansen">
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Rol</label>
                <select id="f-emp-role">
                    ${getAllRoles().map(r => `<option value="${r}" ${emp && emp.role === r ? 'selected' : ''}>${roleLabel(r)}</option>`).join('')}
                </select>
            </div>
            <div class="form-group">
                <label>FTE</label>
                <input type="number" id="f-emp-fte" min="0.1" max="1.0" step="0.1" value="${emp ? emp.fte : 1.0}">
            </div>
        </div>
        <div class="form-group">
            <label>Kleur</label>
            <div class="color-row" id="f-emp-colors">${colorDotsHTML(COLORS_EMP, selColor, 'f-emp-colors', 'f-emp-color')}</div>
            <input type="hidden" id="f-emp-color" value="${selColor}">
        </div>
        <div class="btn-row">
            <button class="btn btn-outline" onclick="closeSheet()">Annuleren</button>
            <button class="btn btn-success" onclick="saveEmployee(${emp ? emp.id : 'null'})">Opslaan</button>
        </div>
        ${deleteBtn}
    `);
}

function saveEmployee(empId) {
    const name = document.getElementById('f-emp-name').value.trim();
    const role = document.getElementById('f-emp-role').value;
    const fte = parseFloat(document.getElementById('f-emp-fte').value);
    const color = document.getElementById('f-emp-color').value;

    if (!name) { toast('Vul een naam in!', 'error'); return; }
    if (isNaN(fte) || fte < 0.1 || fte > 1.0) { toast('FTE moet 0.1 - 1.0 zijn!', 'error'); return; }

    if (empId) {
        const emp = state.employees.find(e => e.id === empId);
        Object.assign(emp, { name, role, fte, color });
        adjustAllocations(empId, fte);
    } else {
        state.employees.push({ id: state.nextEmpId++, name, role, fte, color });
    }

    closeSheet();
    saveState();
    renderAll();
    toast(empId ? 'Medewerker bijgewerkt' : 'Medewerker toegevoegd!', 'success');
}

function deleteEmployee(empId) {
    const emp = state.employees.find(e => e.id === empId);
    if (!emp) return;
    document.getElementById('sheet-content').innerHTML = `
        <h2>${icon('trash', 20)} "${emp.name}" verwijderen?</h2>
        <p style="color:#666;margin-bottom:16px;">Deze medewerker en alle bijbehorende toewijzingen worden verwijderd.</p>
        <div class="btn-row">
            <button class="btn btn-outline" onclick="closeSheet()">Annuleren</button>
            <button class="btn btn-danger" onclick="confirmDeleteEmployee(${empId})">Verwijderen</button>
        </div>
    `;
    document.getElementById('sheet').scrollTop = 0;
}

function confirmDeleteEmployee(empId) {
    state.employees = state.employees.filter(e => e.id !== empId);
    state.allocations = state.allocations.filter(a => a.empId !== empId);
    closeSheet();
    saveState();
    renderAll();
    toast('Verwijderd', 'success');
}

// -- Department Sheet --
function openDeptSheet(deptId, defaultParentId) {
    const dept = deptId ? state.departments.find(d => d.id === deptId) : null;
    const selColor = dept ? dept.color : randomColor(COLORS_DEPT);
    const deleteBtn = dept ? `<button class="btn btn-danger" style="margin-top:12px;" onclick="deleteDepartment(${dept.id})">Verwijderen</button>` : '';

    // Build parent options (exclude self and descendants to prevent cycles)
    const excludeIds = dept ? getDescendantIds(dept.id).concat(dept.id) : [];
    const parentId = dept ? (dept.parentId || null) : (defaultParentId || null);
    let parentOpts = `<option value="" ${!parentId ? 'selected' : ''}>-- Geen (root) --</option>`;
    state.departments.forEach(d => {
        if (!excludeIds.includes(d.id)) {
            parentOpts += `<option value="${d.id}" ${parentId === d.id ? 'selected' : ''}>${d.name}</option>`;
        }
    });

    const aiBox = !dept ? `
        <div class="ai-suggest-box">
            <div class="ai-suggest-header">${icon('star', 16)} AI Suggestie</div>
            <div class="ai-suggest-body">
                <input type="text" id="f-dept-ai-desc" placeholder="Beschrijf wat deze afdeling doet..." style="flex:1;">
                <button class="btn btn-sm btn-primary" id="ai-dept-btn" onclick="aiSuggestDepartment()">Suggereer</button>
            </div>
        </div>` : '';

    openSheet(`
        <h2>${dept ? icon('edit', 20) + ' ' + dept.name : icon('house', 20) + ' Nieuwe Afdeling'}</h2>
        ${aiBox}
        <div class="form-group">
            <label>Naam</label>
            <input type="text" id="f-dept-name" value="${dept ? dept.name : ''}" placeholder="Engineering">
        </div>
        <div class="form-group">
            <label>Bovenliggende afdeling</label>
            <select id="f-dept-parent">${parentOpts}</select>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Benodigde FTE</label>
                <input type="number" id="f-dept-fte" min="0.1" max="50" step="0.1" value="${dept ? dept.fteNeeded : 3}">
            </div>
            <div class="form-group">
                <label>Prioriteit</label>
                <select id="f-dept-prio">
                    <option value="high" ${dept && dept.priority === 'high' ? 'selected' : ''}>Hoog</option>
                    <option value="medium" ${!dept || dept.priority === 'medium' ? 'selected' : ''}>Midden</option>
                    <option value="low" ${dept && dept.priority === 'low' ? 'selected' : ''}>Laag</option>
                </select>
            </div>
        </div>
        <div class="form-row">
            <div class="form-group">
                <label>Min. FTE</label>
                <input type="number" id="f-dept-min" min="0" max="50" step="0.1" value="${dept ? dept.minFte : 1}">
            </div>
            <div class="form-group">
                <label>Max. FTE</label>
                <input type="number" id="f-dept-max" min="0.1" max="50" step="0.1" value="${dept ? dept.maxFte : 5}">
            </div>
        </div>
        <div class="form-group">
            <label>Rollen (komma-gescheiden)</label>
            <input type="text" id="f-dept-roles" value="${dept ? dept.roles.join(', ') : ''}" placeholder="developer, designer">
        </div>
        <div class="form-group">
            <label>Kleur</label>
            <div class="color-row" id="f-dept-colors">${colorDotsHTML(COLORS_DEPT, selColor, 'f-dept-colors', 'f-dept-color')}</div>
            <input type="hidden" id="f-dept-color" value="${selColor}">
        </div>
        <div class="btn-row">
            <button class="btn btn-outline" onclick="closeSheet()">Annuleren</button>
            <button class="btn btn-success" onclick="saveDepartment(${dept ? dept.id : 'null'})">Opslaan</button>
        </div>
        ${deleteBtn}
    `);
}

function getDescendantIds(deptId) {
    const ids = [];
    const children = state.departments.filter(d => d.parentId === deptId);
    children.forEach(c => {
        ids.push(c.id);
        ids.push(...getDescendantIds(c.id));
    });
    return ids;
}

function saveDepartment(deptId) {
    const name = document.getElementById('f-dept-name').value.trim();
    const fteNeeded = parseFloat(document.getElementById('f-dept-fte').value);
    const priority = document.getElementById('f-dept-prio').value;
    const minFte = parseFloat(document.getElementById('f-dept-min').value);
    const maxFte = parseFloat(document.getElementById('f-dept-max').value);
    const roles = document.getElementById('f-dept-roles').value.split(',').map(r => r.trim().toLowerCase()).filter(r => r);
    const color = document.getElementById('f-dept-color').value;
    const parentVal = document.getElementById('f-dept-parent').value;
    const parentId = parentVal ? parseInt(parentVal) : null;

    if (!name) { toast('Vul een naam in!', 'error'); return; }
    if (isNaN(fteNeeded) || fteNeeded < 0.1) { toast('FTE moet minimaal 0.1 zijn!', 'error'); return; }

    if (deptId) {
        const dept = state.departments.find(d => d.id === deptId);
        Object.assign(dept, { name, fteNeeded, priority, minFte, maxFte, roles, color, parentId });
    } else {
        state.departments.push({ id: state.nextDeptId++, name, fteNeeded, priority, minFte, maxFte, roles, color, parentId });
    }

    closeSheet();
    saveState();
    renderAll();
    toast(deptId ? 'Afdeling bijgewerkt' : 'Afdeling toegevoegd!', 'success');
}

function deleteDepartment(deptId) {
    const dept = state.departments.find(d => d.id === deptId);
    if (!dept) return;
    const descendantIds = getDescendantIds(deptId);
    const childCount = descendantIds.length;
    const warning = childCount > 0
        ? `<p style="color:var(--accent);margin-bottom:12px;font-size:0.9em;">${icon('warning', 14)} ${childCount} onderliggende afdeling${childCount > 1 ? 'en' : ''} word${childCount > 1 ? 'en' : 't'} ook verwijderd.</p>`
        : '';
    document.getElementById('sheet-content').innerHTML = `
        <h2>${icon('trash', 20)} "${dept.name}" verwijderen?</h2>
        <p style="color:#666;margin-bottom:12px;">Deze afdeling en alle bijbehorende toewijzingen worden verwijderd.</p>
        ${warning}
        <div class="btn-row">
            <button class="btn btn-outline" onclick="closeSheet()">Annuleren</button>
            <button class="btn btn-danger" onclick="confirmDeleteDepartment(${deptId})">Verwijderen</button>
        </div>
    `;
    document.getElementById('sheet').scrollTop = 0;
}

function confirmDeleteDepartment(deptId) {
    const allIds = [deptId, ...getDescendantIds(deptId)];
    state.departments = state.departments.filter(d => !allIds.includes(d.id));
    state.allocations = state.allocations.filter(a => !allIds.includes(a.deptId));
    closeSheet();
    saveState();
    renderAll();
    toast('Verwijderd', 'success');
}

// -- Pick employee to add to dept --
function openPickEmployee(deptId) {
    const dept = state.departments.find(d => d.id === deptId);
    const existing = state.allocations.filter(a => a.deptId === deptId).map(a => a.empId);

    if (state.employees.length === 0) {
        toast('Maak eerst medewerkers aan!', 'warning');
        return;
    }

    let html = `<h2>${icon('person', 20)} Kies medewerker voor ${dept.name}</h2>`;

    state.employees.forEach(emp => {
        const alreadyHere = existing.includes(emp.id);
        const allocated = getAllocatedFTE(emp.id);
        const remaining = Math.round((emp.fte - allocated) * 10) / 10;
        const disabled = alreadyHere || remaining <= 0;

        html += `<div class="pick-item ${disabled ? 'disabled' : ''}" onclick="${disabled ? '' : `pickEmployee(${emp.id}, ${deptId})`}">
            <div class="poppetje-small">${poppetjeSVG(emp.color, 32)}</div>
            <div class="pick-item-info">
                <div class="pick-item-name">${emp.name}</div>
                <div class="pick-item-meta">${roleLabel(emp.role)} &bull; ${remaining > 0 ? remaining + ' FTE vrij' : alreadyHere ? 'Al toegewezen' : 'Geen FTE vrij'}</div>
            </div>
        </div>`;
    });

    openSheet(html);
}

function pickEmployee(empId, deptId) {
    closeSheet();
    setTimeout(() => openFTEPicker(empId, deptId), 350);
}

// -- FTE Picker --
function openFTEPicker(empId, deptId, existingAlloc) {
    const emp = state.employees.find(e => e.id === empId);
    const dept = state.departments.find(d => d.id === deptId);
    const otherAlloc = state.allocations
        .filter(a => a.empId === empId && a.deptId !== deptId)
        .reduce((s, a) => s + a.fte, 0);
    const maxFte = Math.round((emp.fte - otherAlloc) * 10) / 10;
    const currentFte = existingAlloc ? existingAlloc.fte : Math.min(maxFte, 0.5);
    const currentRole = existingAlloc && existingAlloc.asRole ? existingAlloc.asRole : emp.role;

    const roleOptions = [...new Set([emp.role, ...dept.roles])].filter(r => r);
    let roleSelectHTML = '';
    if (roleOptions.length > 0) {
        const opts = roleOptions.map(r => {
            const mismatch = r !== emp.role;
            return `<option value="${r}" ${r === currentRole ? 'selected' : ''}>${roleLabel(r)}${mismatch ? ' \u26a0\ufe0f' : ' \u2713'}</option>`;
        }).join('');
        roleSelectHTML = `
            <div class="form-group" style="margin-top:12px;">
                <label>Rol op deze afdeling</label>
                <select id="fte-pick-role">${opts}</select>
                <div id="role-mismatch-hint" style="font-size:0.8em;margin-top:4px;color:var(--accent);display:${currentRole !== emp.role ? 'block' : 'none'};">
                    ${icon('warning', 14)} Afwijkende rol: strafpunten op score
                </div>
            </div>`;
    }

    openSheet(`
        <h2 style="text-align:center;">${emp.name}</h2>
        <p style="text-align:center;color:#999;margin-bottom:8px;">${roleLabel(emp.role)} ${icon('arrow', 16)} ${dept.name}</p>
        <div style="text-align:center;margin:12px 0;">${poppetjeSVG(emp.color, 64)}</div>
        <p style="text-align:center;font-size:0.85em;color:#999;">Hoeveel FTE op deze afdeling?<br/>Max beschikbaar: ${maxFte}</p>
        <div class="fte-stepper">
            <button class="fte-stepper-btn" onclick="stepFTE(-0.1)">\u2212</button>
            <div class="fte-stepper-value" id="fte-pick-val">${currentFte.toFixed(1)}</div>
            <button class="fte-stepper-btn" onclick="stepFTE(0.1)">+</button>
        </div>
        ${roleSelectHTML}
        <input type="hidden" id="fte-pick-emp" value="${empId}">
        <input type="hidden" id="fte-pick-dept" value="${deptId}">
        <input type="hidden" id="fte-pick-max" value="${maxFte}">
        <input type="hidden" id="fte-pick-own-role" value="${emp.role}">
        <div class="btn-row">
            <button class="btn btn-outline" onclick="closeSheet()">Annuleren</button>
            ${existingAlloc ? `<button class="btn btn-danger" style="flex:0.6" onclick="removeAlloc(${empId},${deptId})">${icon('trash', 18)}</button>` : ''}
            <button class="btn btn-success" onclick="confirmFTE()">Bevestigen</button>
        </div>
    `);

    const roleSelect = document.getElementById('fte-pick-role');
    if (roleSelect) {
        roleSelect.addEventListener('change', () => {
            const hint = document.getElementById('role-mismatch-hint');
            const ownRole = document.getElementById('fte-pick-own-role').value;
            if (hint) hint.style.display = roleSelect.value !== ownRole ? 'block' : 'none';
        });
    }
}

function stepFTE(delta) {
    const el = document.getElementById('fte-pick-val');
    const max = parseFloat(document.getElementById('fte-pick-max').value);
    let val = Math.round((parseFloat(el.textContent) + delta) * 10) / 10;
    el.textContent = Math.max(0.1, Math.min(max, val)).toFixed(1);
}

function confirmFTE() {
    const empId = parseInt(document.getElementById('fte-pick-emp').value);
    const deptId = parseInt(document.getElementById('fte-pick-dept').value);
    const fte = parseFloat(document.getElementById('fte-pick-val').textContent);
    const roleEl = document.getElementById('fte-pick-role');
    const asRole = roleEl ? roleEl.value : null;

    const existing = state.allocations.find(a => a.empId === empId && a.deptId === deptId);
    if (existing) {
        existing.fte = fte;
        if (asRole) existing.asRole = asRole;
    } else {
        state.allocations.push({ empId, deptId, fte, asRole: asRole || null });
    }

    closeSheet();
    saveState();
    renderAll();

    const emp = state.employees.find(e => e.id === empId);
    const dept = state.departments.find(d => d.id === deptId);
    toast(`${emp.name} \u2192 ${dept.name} (${fte} FTE)`, 'success');
}

function removeAlloc(empId, deptId) {
    state.allocations = state.allocations.filter(a => !(a.empId === empId && a.deptId === deptId));
    closeSheet();
    saveState();
    renderAll();
    toast('Toewijzing verwijderd', 'success');
}

function openPersonOnDept(empId, deptId) {
    const alloc = state.allocations.find(a => a.empId === empId && a.deptId === deptId);
    if (alloc) openFTEPicker(empId, deptId, alloc);
}

// ===== SETTINGS ACTIONS =====
function exportData() {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'wie-zit-waar-export.json';
    a.click();
    URL.revokeObjectURL(a.href);
    toast('Ge\u00ebxporteerd!', 'success');
}

function importData() { document.getElementById('import-file').click(); }

function handleImport(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
        try {
            const d = JSON.parse(e.target.result);
            if (d.employees && d.departments) {
                state = d;
                saveState();
                renderAll();
                toast('Ge\u00efmporteerd!', 'success');
            } else {
                toast('Ongeldig bestand!', 'error');
            }
        } catch(err) { toast('Fout bij importeren', 'error'); }
    };
    reader.readAsText(file);
    event.target.value = '';
}

function resetAll() {
    openSheet(`
        <h2>${icon('trash', 20)} Alles wissen?</h2>
        <p style="color:#666;margin-bottom:16px;">Alle medewerkers, afdelingen en toewijzingen worden verwijderd. Dit kan niet ongedaan worden!</p>
        <div class="btn-row">
            <button class="btn btn-outline" onclick="closeSheet()">Annuleren</button>
            <button class="btn btn-danger" onclick="confirmResetAll()">Wissen</button>
        </div>
    `);
}

function confirmResetAll() {
    state = { employees: [], departments: [], allocations: [], deptOrder: [], company: { name:'', sbiCode:'', sbiLabel:'', type:'', employeeCount:'' }, nextEmpId: 1, nextDeptId: 1 };
    saveState();
    closeSheet();
    renderAll();
    toast('Alles gewist', 'success');
}

function loadDemo() {
    state.employees = [
        { id: 1, name: 'Lisa de Vries', role: 'developer', fte: 1.0, color: '#3498db' },
        { id: 2, name: 'Mark Jansen', role: 'developer', fte: 0.8, color: '#2ecc71' },
        { id: 3, name: 'Sophie Bakker', role: 'designer', fte: 1.0, color: '#9b59b6' },
        { id: 4, name: 'Tom Visser', role: 'manager', fte: 1.0, color: '#e67e22' },
        { id: 5, name: 'Anna Smit', role: 'sales', fte: 0.6, color: '#e74c3c' },
        { id: 6, name: 'Pieter Mulder', role: 'support', fte: 1.0, color: '#1abc9c' },
    ];
    state.departments = [
        { id: 1, name: 'Engineering', fteNeeded: 3, priority: 'high', minFte: 2, maxFte: 5, roles: ['developer','designer'], color: '#3498db', parentId: 4 },
        { id: 2, name: 'Sales & Marketing', fteNeeded: 2, priority: 'medium', minFte: 1, maxFte: 3, roles: ['sales','marketing'], color: '#e74c3c', parentId: 4 },
        { id: 3, name: 'Klantenservice', fteNeeded: 1.5, priority: 'medium', minFte: 1, maxFte: 2, roles: ['support'], color: '#2ecc71', parentId: 2 },
        { id: 4, name: 'Management', fteNeeded: 1, priority: 'high', minFte: 1, maxFte: 2, roles: ['manager'], color: '#f39c12', parentId: null },
    ];
    state.allocations = [];
    state.deptOrder = [1, 2, 3, 4];
    state.nextEmpId = 7;
    state.nextDeptId = 5;
    saveState();
    renderAll();
    switchView('canvas');
    toast('Demo data geladen!', 'success');
}

// ===== SBI SEARCH =====
let sbiDropdownOpen = false;

function openSBIDropdown() {
    sbiDropdownOpen = true;
    filterSBI();
    document.getElementById('sbi-dropdown').classList.add('open');
}

function closeSBIDropdown() {
    sbiDropdownOpen = false;
    document.getElementById('sbi-dropdown').classList.remove('open');
}

function filterSBI() {
    const query = document.getElementById('sbi-input').value.toLowerCase().trim();
    const dropdown = document.getElementById('sbi-dropdown');

    let html = '';
    let count = 0;

    SBI_DATA.forEach(item => {
        if (count >= 50) return;
        if (query && !item.code.toLowerCase().includes(query) && !item.label.toLowerCase().includes(query)) return;

        if (item.section) {
            html += `<div class="search-select-option section">
                <span class="opt-code">${item.code}</span>
                <span class="opt-label">${item.label}</span>
            </div>`;
        } else {
            html += `<div class="search-select-option" onclick="selectSBI('${item.code}', '${item.label.replace(/'/g, "\\'")}')">
                <span class="opt-code">${item.code}</span>
                <span class="opt-label">${item.label}</span>
            </div>`;
            count++;
        }
    });

    if (count === 0 && query) {
        html = '<div style="padding:12px;color:#999;text-align:center;">Geen resultaten</div>';
    }

    dropdown.innerHTML = html;
    if (!dropdown.classList.contains('open')) dropdown.classList.add('open');
}

function selectSBI(code, label) {
    state.company.sbiCode = code;
    state.company.sbiLabel = label;
    document.getElementById('sbi-input').value = '';
    document.getElementById('sbi-selected').innerHTML = `<strong>${code}</strong> \u2014 ${label} \u2705`;
    closeSBIDropdown();
    saveCompanyProfile();
    updateSalaryIndicator();
    updateCostOverview();
}

function updateSalaryIndicator() {
    const indicator = document.getElementById('salary-indicator');
    const costPerFte = getCostPerFte();
    if (!costPerFte) { indicator.style.display = 'none'; return; }

    const section = getSBISection(state.company.sbiCode);
    const salary = SECTOR_SALARIES[section] || 48000;

    document.getElementById('sector-salary').textContent = '\u20ac ' + salary.toLocaleString('nl-NL');
    document.getElementById('sector-cost').textContent = '\u20ac ' + costPerFte.toLocaleString('nl-NL');
    indicator.style.display = 'block';
}

function updateCostOverview() {
    const container = document.getElementById('cost-overview');
    const costPerFte = getCostPerFte();
    if (!costPerFte) {
        container.innerHTML = '<p style="color:#aaa;font-size:0.9em;">Selecteer een branchecode om kostenindicaties te zien.</p>';
        return;
    }

    let totalCost = 0;
    let html = '';

    state.departments.forEach(dept => {
        const filled = getDeptFilled(dept.id);
        const deptCost = Math.round(filled * costPerFte);
        totalCost += deptCost;

        html += `<div class="cost-bar">
            <span class="cost-label" style="display:flex;align-items:center;gap:6px;">
                <span style="width:10px;height:10px;border-radius:50%;background:${dept.color};flex-shrink:0;"></span>
                ${dept.name} (${filled.toFixed(1)} FTE)
            </span>
            <span class="cost-value">\u20ac ${deptCost.toLocaleString('nl-NL')}</span>
        </div>`;
    });

    const totalFte = state.allocations.reduce((s, a) => s + a.fte, 0);
    const unallocatedFte = state.employees.reduce((s, e) => s + e.fte, 0) - totalFte;

    if (unallocatedFte > 0.05) {
        const unallocCost = Math.round(unallocatedFte * costPerFte);
        totalCost += unallocCost;
        html += `<div class="cost-bar" style="opacity:0.5;">
            <span class="cost-label">Niet-toegewezen (${unallocatedFte.toFixed(1)} FTE)</span>
            <span class="cost-value">\u20ac ${unallocCost.toLocaleString('nl-NL')}</span>
        </div>`;
    }

    html += `<div class="cost-bar" style="background:var(--dark);color:white;margin-top:8px;border-radius:10px;">
        <span style="font-weight:600;">Totaal geschat</span>
        <span style="font-weight:700;font-size:1.1em;">\u20ac ${totalCost.toLocaleString('nl-NL')} /jaar</span>
    </div>`;
    html += `<div style="font-size:0.7em;color:#aaa;margin-top:4px;">Op basis van sectorgemiddelde \u20ac ${costPerFte.toLocaleString('nl-NL')}/FTE incl. werkgeverslasten.</div>`;

    container.innerHTML = html;
}

// ===== COMPANY PROFILE =====
function saveCompanyProfile() {
    state.company.name = document.getElementById('company-name').value.trim();
    state.company.type = document.getElementById('company-type').value;
    state.company.employeeCount = document.getElementById('company-employees').value;
    updateTopbarTitle();
    saveState();
}

function loadCompanyProfile() {
    if (!state.company) state.company = { name:'', sbiCode:'', sbiLabel:'', type:'', employeeCount:'' };
    document.getElementById('company-name').value = state.company.name || '';
    document.getElementById('company-type').value = state.company.type || '';
    document.getElementById('company-employees').value = state.company.employeeCount || '';
    if (state.company.sbiCode) {
        document.getElementById('sbi-selected').innerHTML =
            `<strong>${state.company.sbiCode}</strong> \u2014 ${state.company.sbiLabel} <span style="color:var(--accent3);">\u2713</span>`;
        updateSalaryIndicator();
    }
    updateTopbarTitle();
}

function updateTopbarTitle() {
    document.getElementById('topbar-title').textContent =
        (state.company && state.company.name) ? state.company.name : 'Wie Zit Waar?';
}

// Close SBI dropdown when clicking outside
document.addEventListener('click', (e) => {
    if (sbiDropdownOpen && !e.target.closest('#sbi-search')) closeSBIDropdown();
});

// ===== ORGANOGRAM =====
let orgZoom = 1;
let orgDragId = null; // dept id being dragged
let orgDragLocked = true; // drag disabled by default

function buildOrgTree(parentId) {
    return state.departments
        .filter(d => (d.parentId || null) === parentId)
        .map(dept => ({
            dept,
            children: buildOrgTree(dept.id)
        }));
}

function renderOrgNodeHTML(node) {
    const dept = node.dept;
    const filled = getDeptFilled(dept.id);
    const pct = dept.fteNeeded > 0 ? Math.min(100, (filled / dept.fteNeeded) * 100) : 0;
    const barColor = fteBarColor(pct, false);
    const allocs = state.allocations.filter(a => a.deptId === dept.id);

    let miniPoppetjes = '';
    allocs.slice(0, 5).forEach(a => {
        const emp = state.employees.find(e => e.id === a.empId);
        if (emp) miniPoppetjes += poppetjeSVG(emp.color, 16);
    });
    if (allocs.length > 5) miniPoppetjes += `<span style="font-size:8px;color:#999;">+${allocs.length - 5}</span>`;

    // Collapsible poppetjes section
    const poppetjesSection = allocs.length > 0
        ? `<div class="org-node-people-toggle" onclick="event.stopPropagation();this.parentElement.classList.toggle('people-open')">
            <span class="org-people-count">${allocs.length}</span> ${icon('person', 10)}
            <span class="org-people-arrow">\u25BE</span>
          </div>
          <div class="org-node-poppetjes">${miniPoppetjes}</div>`
        : '';

    // Sub-drop zone: always visible between node and children, lights up on drag
    const subDropZone = `<div class="org-sub-drop" data-drop-parent="${dept.id}"
        ondragover="orgSubDragOver(event)" ondragleave="orgSubDragLeave(event)" ondrop="orgSubDrop(event, ${dept.id})">
        <span class="org-sub-drop-label">+ sub</span>
    </div>`;

    // Plus buttons: left, right, below
    const parentIdVal = dept.parentId || null;
    const plusLeft = `<button class="org-plus-btn org-plus-left" onclick="event.stopPropagation();openOrgPlacePicker('left', ${parentIdVal}, ${dept.id})" title="Afdeling links">+</button>`;
    const plusRight = `<button class="org-plus-btn org-plus-right" onclick="event.stopPropagation();openOrgPlacePicker('right', ${parentIdVal}, ${dept.id})" title="Afdeling rechts">+</button>`;
    const plusBelow = `<button class="org-plus-btn org-plus-below" onclick="event.stopPropagation();openOrgPlacePicker('below', ${dept.id}, null)" title="Subafdeling">+</button>`;

    let childrenHTML = '';
    if (node.children.length > 0) {
        const childNodes = node.children.map(c => `<div class="org-branch">${renderOrgNodeHTML(c)}</div>`).join('');
        childrenHTML = `<div class="org-children">${childNodes}</div>`;
    }

    const isDraggable = orgDragLocked ? 'false' : 'true';
    return `
        <div class="org-node-wrapper">
            ${plusLeft}
            <div class="org-node" data-org-dept="${dept.id}" draggable="${isDraggable}"
                 onclick="if(!orgTouchMoved)openDeptSheet(${dept.id})"
                 ondragstart="orgDragStart(event, ${dept.id})"
                 ondragend="orgDragEnd(event)"
                 ondragover="orgDragOver(event)"
                 ondragleave="orgDragLeave(event)"
                 ondrop="orgDrop(event, ${dept.id})">
                <div class="org-node-bar" style="background:${dept.color}"></div>
                <div class="org-node-body">
                    <div class="org-node-name">${dept.name}</div>
                    <div class="org-node-meta">${filled.toFixed(1)}/${dept.fteNeeded.toFixed(1)} FTE</div>
                    <div class="org-node-fte-bar">
                        <div class="org-node-fte-fill" style="width:${pct}%;background:${barColor}"></div>
                    </div>
                    ${poppetjesSection}
                    <span class="org-node-badge badge-${dept.priority}">${priorityLabel(dept.priority)}</span>
                </div>
                <div class="org-node-drop-hint">Sleep hierheen</div>
            </div>
            ${plusRight}
        </div>
        ${plusBelow}
        ${subDropZone}
        ${childrenHTML}
    `;
}

function renderOrgChart() {
    const container = document.getElementById('orgchart-container');

    if (state.departments.length === 0) {
        container.innerHTML = `
            <div class="org-empty-state">
                <button class="org-start-btn" onclick="openOrgPlacePicker('below', null, null)">
                    <span class="org-start-plus">+</span>
                    <span>Eerste afdeling toevoegen</span>
                </button>
            </div>`;
        return;
    }

    // Orphans: departments whose parentId references a non-existing dept
    const allIds = new Set(state.departments.map(d => d.id));
    state.departments.filter(d => d.parentId && !allIds.has(d.parentId)).forEach(d => { d.parentId = null; });

    const tree = buildOrgTree(null);
    const branches = tree.map(node => `<div class="org-branch">${renderOrgNodeHTML(node)}</div>`).join('');

    const rootDropZone = `<div class="org-drop-root" id="org-root-drop"
        ondragover="orgRootDragOver(event)" ondragleave="orgRootDragLeave(event)" ondrop="orgDrop(event, null)">
        ${icon('arrow', 16)}
        <span class="org-drop-root-text">Verplaats naar root-niveau</span>
    </div>`;

    container.innerHTML = `
        <div class="orgchart-tree" id="orgchart-tree" style="transform:scale(${orgZoom});transform-origin:top center;">
            <div class="org-children" style="padding-top:0;">
                ${branches}
            </div>
        </div>
        ${rootDropZone}
    `;

    updateOrgToolbar();

    requestAnimationFrame(updateOrgConnectors);
    initOrgTouchDrag();
}

function updateOrgConnectors() {
    document.querySelectorAll('.org-children').forEach(container => {
        const branches = container.querySelectorAll(':scope > .org-branch');
        if (branches.length < 2) {
            container.style.setProperty('--org-half-width', '0px');
            return;
        }
        const first = branches[0].querySelector('.org-node, .org-node-add');
        const last = branches[branches.length - 1].querySelector('.org-node, .org-node-add');
        if (first && last) {
            const containerRect = container.getBoundingClientRect();
            const firstRect = first.getBoundingClientRect();
            const lastRect = last.getBoundingClientRect();
            const firstCenter = firstRect.left + firstRect.width / 2 - containerRect.left;
            const lastCenter = lastRect.left + lastRect.width / 2 - containerRect.left;
            const center = containerRect.width / 2;
            const halfWidth = Math.max(Math.abs(center - firstCenter), Math.abs(center - lastCenter));
            container.style.setProperty('--org-half-width', halfWidth + 'px');
        }
    });
}

// === Organogram Place Picker ===
function openOrgPlacePicker(position, parentId, siblingId) {
    // position: 'left', 'right', 'below'
    // parentId: the parent dept id (null for root)
    // siblingId: the sibling dept id (for left/right positioning)

    const title = position === 'below' ? 'Subafdeling toevoegen' : 'Afdeling toevoegen';
    const desc = position === 'below' ? 'Kies een bestaande afdeling of maak een nieuwe aan als subafdeling.'
        : `Kies een bestaande afdeling of maak een nieuwe aan (${position === 'left' ? 'links' : 'rechts'}).`;

    // Show existing departments that could be moved here
    let deptListHTML = '';
    state.departments.forEach(d => {
        // Exclude the sibling itself and its descendants to prevent cycles
        const excludeIds = siblingId ? [siblingId, ...getDescendantIds(siblingId)] : [];
        if (parentId !== null && parentId !== undefined) {
            excludeIds.push(parentId, ...getDescendantIds(parentId));
        }
        if (excludeIds.includes(d.id)) return;

        const filled = getDeptFilled(d.id);
        deptListHTML += `<div class="org-picker-item" onclick="placeOrgDept(${d.id}, '${position}', ${parentId}, ${siblingId})">
            <div class="org-picker-color" style="background:${d.color}"></div>
            <div class="org-picker-info">
                <div class="org-picker-name">${d.name}</div>
                <div class="org-picker-meta">${filled.toFixed(1)}/${d.fteNeeded.toFixed(1)} FTE</div>
            </div>
            ${icon('arrow', 16)}
        </div>`;
    });

    const newParentId = position === 'below' ? parentId : parentId;
    openSheet(`
        <h2>${icon('building', 20)} ${title}</h2>
        <p style="color:#666;margin-bottom:12px;font-size:0.9em;">${desc}</p>
        <div class="org-picker-new" onclick="closeSheet();openDeptSheet(null, ${newParentId})">
            <span class="org-picker-new-icon">+</span>
            <span>Nieuwe afdeling aanmaken</span>
        </div>
        ${deptListHTML ? `<div class="org-picker-divider">Of verplaats een bestaande</div>
        <div class="org-picker-list">${deptListHTML}</div>` : ''}
    `);
}

function placeOrgDept(deptId, position, parentId, siblingId) {
    const dept = state.departments.find(d => d.id === deptId);
    if (!dept) return;

    // Prevent cycles
    if (parentId && getDescendantIds(deptId).includes(parentId)) {
        toast('Kan niet onder eigen subafdeling plaatsen', 'error');
        closeSheet();
        return;
    }

    if (position === 'below') {
        dept.parentId = parentId || null;
    } else {
        // left or right: same parent as sibling
        dept.parentId = parentId || null;
    }

    saveState();
    closeSheet();
    renderOrgChart();
    toast(`${dept.name} geplaatst`, 'success');
}

// Zoom
function orgZoomChange(delta) {
    orgZoom = Math.max(0.3, Math.min(2, orgZoom + delta));
    const tree = document.getElementById('orgchart-tree');
    if (tree) tree.style.transform = `scale(${orgZoom})`;
}

function orgZoomReset() {
    orgZoom = 1;
    const tree = document.getElementById('orgchart-tree');
    if (tree) tree.style.transform = 'scale(1)';
}

// === Org Toolbar (fixed buttons) ===
function updateOrgToolbar() {
    const lockBtn = document.getElementById('org-drag-lock');
    const lockIcon = document.getElementById('org-drag-lock-icon');
    const lockLabel = document.getElementById('org-drag-lock-label');
    const resetIcon = document.getElementById('org-reset-icon');
    if (lockBtn) {
        lockBtn.className = orgDragLocked ? 'org-drag-lock' : 'org-drag-lock org-drag-unlocked';
        if (lockIcon) lockIcon.innerHTML = orgDragLocked ? icon('drag', 16) : icon('refresh', 16);
        if (lockLabel) lockLabel.textContent = orgDragLocked ? 'Drag uit' : 'Drag aan';
    }
    if (resetIcon) resetIcon.innerHTML = icon('trash', 16);
}

function toggleOrgDragLock() {
    orgDragLocked = !orgDragLocked;
    renderOrgChart();
    toast(orgDragLocked ? 'Drag modus uit' : 'Drag modus aan – sleep kaarten om te herordenen', orgDragLocked ? 'warning' : 'success');
}

function resetOrgHierarchy() {
    const hasHierarchy = state.departments.some(d => d.parentId);
    if (!hasHierarchy) {
        toast('Er is geen hi\u00ebrarchie om te resetten', 'warning');
        return;
    }
    openSheet(`
        <h2>${icon('trash', 20)} Organogram resetten?</h2>
        <p style="color:#666;margin-bottom:16px;">Alle afdelingen worden naar root-niveau verplaatst. Afdelingen zelf worden niet verwijderd.</p>
        <div class="btn-row">
            <button class="btn btn-outline" onclick="closeSheet()">Annuleren</button>
            <button class="btn btn-danger" onclick="confirmResetOrgHierarchy()">Resetten</button>
        </div>
    `);
}

function confirmResetOrgHierarchy() {
    state.departments.forEach(d => { d.parentId = null; });
    saveState();
    closeSheet();
    renderOrgChart();
    toast('Organogram gereset \u2013 alle afdelingen op root-niveau', 'success');
}

// === Drag & Drop (desktop) ===
function orgDragStart(e, deptId) {
    e.stopPropagation();
    if (orgDragLocked) { e.preventDefault(); return; }
    orgDragId = deptId;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', deptId);
    setTimeout(() => {
        const el = document.querySelector(`.org-node[data-org-dept="${deptId}"]`);
        if (el) el.classList.add('dragging');
        document.getElementById('orgchart-container').classList.add('org-dragging');
    }, 0);
}

function orgDragEnd(e) {
    document.querySelectorAll('.org-node.dragging').forEach(el => el.classList.remove('dragging'));
    document.querySelectorAll('.org-node.drag-over, .org-node-add.drag-over').forEach(el => el.classList.remove('drag-over'));
    document.querySelectorAll('.org-drop-root.drag-active').forEach(el => el.classList.remove('drag-active'));
    document.querySelectorAll('.org-sub-drop.drag-active').forEach(el => el.classList.remove('drag-active'));
    document.getElementById('orgchart-container').classList.remove('org-dragging');
    orgDragId = null;
}

function orgDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    const target = e.currentTarget;
    if (!target.classList.contains('drag-over')) target.classList.add('drag-over');
}

function orgDragLeave(e) {
    e.currentTarget.classList.remove('drag-over');
}

function orgRootDragOver(e) {
    e.preventDefault();
    e.currentTarget.classList.add('drag-active');
}

function orgRootDragLeave(e) {
    e.currentTarget.classList.remove('drag-active');
}

function orgSubDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = 'move';
    e.currentTarget.classList.add('drag-active');
}

function orgSubDragLeave(e) {
    e.currentTarget.classList.remove('drag-active');
}

function orgSubDrop(e, parentDeptId) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-active');
    orgDrop(e, parentDeptId);
    return;
}

function orgDrop(e, targetDeptId) {
    e.preventDefault();
    e.stopPropagation();
    e.currentTarget.classList.remove('drag-over', 'drag-active');

    const draggedId = orgDragId || parseInt(e.dataTransfer.getData('text/plain'));
    if (!draggedId || draggedId === targetDeptId) return;

    // Prevent dropping onto own descendant (would create cycle)
    if (targetDeptId !== null && getDescendantIds(draggedId).includes(targetDeptId)) {
        toast('Kan niet onder eigen subafdeling plaatsen', 'error');
        return;
    }

    const dept = state.departments.find(d => d.id === draggedId);
    if (!dept) return;

    dept.parentId = targetDeptId;
    saveState();
    renderOrgChart();
    toast(`${dept.name} verplaatst`, 'success');
}

// === Touch drag for mobile ===
let orgTouchDragId = null;
let orgTouchClone = null;
let orgTouchStartX = 0;
let orgTouchStartY = 0;
let orgTouchMoved = false;
let orgTouchLongPressTimer = null;

function initOrgTouchDrag() {
    document.querySelectorAll('.org-node[data-org-dept]').forEach(node => {
        node.addEventListener('touchstart', orgTouchStart, { passive: false });
    });
}

function orgTouchStart(e) {
    if (orgDragLocked) return;
    // Clean up any previous drag state first
    orgTouchCleanup();

    const node = e.currentTarget;
    const deptId = parseInt(node.dataset.orgDept);
    if (!deptId) return;

    orgTouchDragId = deptId;
    orgTouchMoved = false;
    const touch = e.touches[0];
    orgTouchStartX = touch.clientX;
    orgTouchStartY = touch.clientY;

    // Long press to start drag
    orgTouchLongPressTimer = setTimeout(() => {
        orgTouchLongPressTimer = null;
        orgTouchMoved = true;
        const currentNode = document.querySelector(`.org-node[data-org-dept="${deptId}"]`);
        if (!currentNode) return;
        currentNode.classList.add('dragging');
        document.getElementById('orgchart-container').classList.add('org-dragging');

        // Create floating clone
        const rect = currentNode.getBoundingClientRect();
        orgTouchClone = currentNode.cloneNode(true);
        Object.assign(orgTouchClone.style, {
            position: 'fixed', left: rect.left + 'px', top: rect.top + 'px',
            width: rect.width + 'px', zIndex: '999', pointerEvents: 'none',
            opacity: '0.85', boxShadow: '0 8px 30px rgba(0,0,0,0.3)', transform: 'scale(1.05)'
        });
        document.body.appendChild(orgTouchClone);
    }, 400);

    document.addEventListener('touchmove', orgTouchMove, { passive: false });
    document.addEventListener('touchend', orgTouchEnd);
    document.addEventListener('touchcancel', orgTouchCleanup);
}

function orgTouchMove(e) {
    const touch = e.touches[0];
    const dx = Math.abs(touch.clientX - orgTouchStartX);
    const dy = Math.abs(touch.clientY - orgTouchStartY);

    if (!orgTouchMoved && (dx > 10 || dy > 10)) {
        // Cancel long press if user scrolls
        if (orgTouchLongPressTimer) { clearTimeout(orgTouchLongPressTimer); orgTouchLongPressTimer = null; }
        orgTouchCleanup();
        return;
    }

    if (!orgTouchMoved || !orgTouchClone) return;
    e.preventDefault();

    orgTouchClone.style.left = (touch.clientX - 60) + 'px';
    orgTouchClone.style.top = (touch.clientY - 30) + 'px';

    // Highlight drop targets
    document.querySelectorAll('.org-node.drag-over, .org-node-add.drag-over, .org-drop-root.drag-active')
        .forEach(el => el.classList.remove('drag-over', 'drag-active'));

    const target = document.elementFromPoint(touch.clientX, touch.clientY);
    if (target) {
        const dropNode = target.closest('.org-node[data-org-dept], .org-node-add, .org-drop-root, .org-sub-drop');
        if (dropNode) {
            if (dropNode.classList.contains('org-drop-root') || dropNode.classList.contains('org-sub-drop')) dropNode.classList.add('drag-active');
            else dropNode.classList.add('drag-over');
        }
    }
}

function orgTouchEnd(e) {
    if (orgTouchLongPressTimer) { clearTimeout(orgTouchLongPressTimer); orgTouchLongPressTimer = null; }

    if (orgTouchMoved && orgTouchDragId) {
        // Find what we're dropping on
        const touch = e.changedTouches[0];
        const target = document.elementFromPoint(touch.clientX, touch.clientY);
        if (target) {
            const dropNode = target.closest('.org-node[data-org-dept]');
            const dropAdd = target.closest('.org-node-add');
            const dropRoot = target.closest('.org-drop-root');
            const dropSub = target.closest('.org-sub-drop');

            let targetParentId = null;
            if (dropSub) {
                targetParentId = parseInt(dropSub.dataset.dropParent);
            } else if (dropNode) {
                targetParentId = parseInt(dropNode.dataset.orgDept);
            } else if (dropRoot || dropAdd) {
                targetParentId = null;
            }

            if (dropNode || dropRoot || dropAdd || dropSub) {
                // Reuse the drop logic
                if (targetParentId === orgTouchDragId) {
                    // dropped on self, ignore
                } else if (targetParentId !== null && getDescendantIds(orgTouchDragId).includes(targetParentId)) {
                    toast('Kan niet onder eigen subafdeling plaatsen', 'error');
                } else {
                    const dept = state.departments.find(d => d.id === orgTouchDragId);
                    if (dept) {
                        dept.parentId = targetParentId;
                        saveState();
                        // Clean up BEFORE re-rendering to avoid ghost clones
                        orgTouchCleanup();
                        renderOrgChart();
                        toast(`${dept.name} verplaatst`, 'success');
                        return; // cleanup already done
                    }
                }
            }
        }
    }

    orgTouchCleanup();
}

function orgTouchCleanup() {
    if (orgTouchLongPressTimer) { clearTimeout(orgTouchLongPressTimer); orgTouchLongPressTimer = null; }
    if (orgTouchClone) { orgTouchClone.remove(); orgTouchClone = null; }
    document.querySelectorAll('.org-node.dragging').forEach(el => el.classList.remove('dragging'));
    document.querySelectorAll('.org-node.drag-over, .org-node-add.drag-over').forEach(el => el.classList.remove('drag-over'));
    document.querySelectorAll('.org-drop-root.drag-active').forEach(el => el.classList.remove('drag-active'));
    document.querySelectorAll('.org-sub-drop.drag-active').forEach(el => el.classList.remove('drag-active'));
    const oc = document.getElementById('orgchart-container');
    if (oc) oc.classList.remove('org-dragging');
    orgTouchDragId = null;
    orgTouchMoved = false;
    document.removeEventListener('touchmove', orgTouchMove);
    document.removeEventListener('touchend', orgTouchEnd);
    document.removeEventListener('touchcancel', orgTouchCleanup);
}

// ===== WELCOME SCREEN =====
function showWelcome() {
    const overlay = document.getElementById('welcome-overlay');
    overlay.classList.remove('hidden');
}

function dismissWelcome(loadDemoData) {
    const overlay = document.getElementById('welcome-overlay');
    overlay.classList.add('hidden');
    try { localStorage.setItem('wiezittwaar_welcomed', '1'); } catch(e) {}
    if (loadDemoData) {
        loadDemo();
    }
}

function shouldShowWelcome() {
    try {
        return !localStorage.getItem('wiezittwaar_welcomed');
    } catch(e) { return false; }
}

// ===== AI ASSISTANT =====
function getAIKey() {
    try { return localStorage.getItem('wiezittwaar_aikey') || ''; } catch(e) { return ''; }
}
function saveAIKey() {
    const key = document.getElementById('ai-api-key').value.trim();
    try { localStorage.setItem('wiezittwaar_aikey', key); } catch(e) {}
}
function loadAIKey() {
    const el = document.getElementById('ai-api-key');
    if (el) el.value = getAIKey();
}

async function callClaude(prompt, systemPrompt) {
    const apiKey = getAIKey();
    if (!apiKey) {
        toast('Stel eerst je Claude API key in bij Meer > AI Assistent', 'error');
        return null;
    }
    const resp = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
        },
        body: JSON.stringify({
            model: 'claude-haiku-4-5',
            max_tokens: 1024,
            system: systemPrompt || 'Je bent een Nederlandse HR- en organisatieadviseur. Antwoord altijd in het Nederlands. Geef beknopte, praktische adviezen.',
            messages: [{ role: 'user', content: prompt }]
        })
    });
    if (!resp.ok) {
        const err = await resp.json().catch(() => ({}));
        const msg = err.error?.message || `API fout (${resp.status})`;
        toast('AI fout: ' + msg, 'error');
        return null;
    }
    const data = await resp.json();
    const text = data.content?.find(b => b.type === 'text')?.text;
    return text || null;
}

function getCompanyContext() {
    const c = state.company;
    let ctx = '';
    if (c.name) ctx += `Bedrijf: ${c.name}. `;
    if (c.type) ctx += `Type: ${c.type}. `;
    if (c.sbiLabel) ctx += `Branche: ${c.sbiLabel} (SBI ${c.sbiCode}). `;
    if (c.employeeCount) ctx += `Totaal ${c.employeeCount} medewerkers. `;
    return ctx || 'Geen bedrijfsinformatie beschikbaar.';
}

// -- AI: Department name + role suggestion --
async function aiSuggestDepartment() {
    const descEl = document.getElementById('f-dept-ai-desc');
    const desc = descEl ? descEl.value.trim() : '';
    if (!desc) {
        toast('Vul een beschrijving in voor de afdeling', 'warning');
        return;
    }
    const btn = document.getElementById('ai-dept-btn');
    if (btn) { btn.disabled = true; btn.textContent = 'Bezig...'; }

    const prompt = `${getCompanyContext()}

Ik wil een nieuwe afdeling opzetten. Beschrijving van wat deze afdeling doet:
"${desc}"

Geef me:
1. Een korte, professionele afdelingsnaam (max 3 woorden)
2. De benodigde FTE (schatting op basis van het aantal medewerkers van het bedrijf)
3. Een lijst van 3-6 functies/rollen die bij deze afdeling horen

Antwoord ALLEEN in dit JSON formaat, geen andere tekst:
{"naam": "...", "fte": 3, "rollen": ["rol1", "rol2", "rol3"]}`;

    try {
        const result = await callClaude(prompt);
        if (result) {
            const jsonMatch = result.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const data = JSON.parse(jsonMatch[0]);
                if (data.naam) {
                    const nameEl = document.getElementById('f-dept-name');
                    if (nameEl) nameEl.value = data.naam;
                }
                if (data.fte) {
                    const fteEl = document.getElementById('f-dept-fte');
                    if (fteEl) fteEl.value = data.fte;
                }
                if (data.rollen && Array.isArray(data.rollen)) {
                    const rolesEl = document.getElementById('f-dept-roles');
                    if (rolesEl) rolesEl.value = data.rollen.join(', ');
                }
                toast('AI suggestie ingevuld!', 'success');
            } else {
                toast('Kon AI antwoord niet verwerken', 'error');
            }
        }
    } catch (e) {
        toast('AI fout: ' + e.message, 'error');
    }
    if (btn) { btn.disabled = false; btn.textContent = 'Suggereer'; }
}

// -- AI: Allocation suggestion --
async function aiSuggestAllocation() {
    if (state.employees.length === 0 || state.departments.length === 0) {
        toast('Voeg eerst medewerkers en afdelingen toe', 'warning');
        return;
    }

    const btn = document.getElementById('ai-alloc-btn');
    if (btn) { btn.disabled = true; btn.innerHTML = icon('refresh', 16) + ' Bezig...'; }

    const emps = state.employees.map(e => `- ${e.name} (rol: ${e.role || 'geen'}, ${e.fte} FTE)`).join('\n');
    const depts = state.departments.map(d =>
        `- ${d.name} (nodig: ${d.fteNeeded} FTE, min: ${d.minFte}, max: ${d.maxFte}, rollen: ${d.roles.join(', ') || 'geen'}, prioriteit: ${d.priority})`
    ).join('\n');
    const currentAllocs = state.allocations.map(a => {
        const emp = state.employees.find(e => e.id === a.empId);
        const dept = state.departments.find(d => d.id === a.deptId);
        return emp && dept ? `- ${emp.name} → ${dept.name} (${a.fte} FTE)` : null;
    }).filter(Boolean).join('\n');

    const prompt = `${getCompanyContext()}

MEDEWERKERS:
${emps}

AFDELINGEN:
${depts}

${currentAllocs ? 'HUIDIGE TOEWIJZINGEN:\n' + currentAllocs + '\n' : ''}
Maak een optimale verdeling van alle medewerkers over de afdelingen. Houd rekening met:
- Rollen van medewerkers matchen met gewenste rollen van afdelingen
- FTE-behoeften en min/max grenzen per afdeling
- Prioriteit van afdelingen (hoog eerst)
- Een medewerker kan over meerdere afdelingen verdeeld worden (fte opsplitsen)
- BELANGRIJK: het TOTAAL aan toegewezen FTE per medewerker mag NOOIT meer zijn dan de beschikbare FTE van die medewerker. Voorbeeld: als een medewerker 1.0 FTE heeft, mag de som van alle toewijzingen van die medewerker maximaal 1.0 zijn.

ROLREGELS (strikt naleven):
- Wijs medewerkers ALLEEN toe aan afdelingen waar hun rol past. Een designer hoort NIET op een developer-afdeling en vice versa.
- Het veld "alsRol" moet altijd de EIGEN rol van de medewerker zijn, NIET een andere rol. Een designer blijft een designer, een developer blijft een developer.
- Als een afdeling vraagt om rollen die geen enkele medewerker heeft, laat die posities dan OPEN. Liever onderbezet dan verkeerd bezet.
- Verwante rollen mogen alleen als het realistisch is: bijv. een marketeer mag op sales als er geen betere match is, maar een designer mag NIET op development.
- Als er medewerkers overblijven die nergens passen, vermeld dit in de toelichting.

Antwoord ALLEEN in dit JSON formaat, geen andere tekst:
{"toewijzingen": [{"medewerker": "Naam", "afdeling": "Afdelingsnaam", "fte": 0.8, "alsRol": "rol"}], "toelichting": "korte uitleg van de keuzes"}`;

    try {
        const result = await callClaude(prompt);
        if (result) {
            const jsonMatch = result.match(/\{[\s\S]*\}/);
            if (jsonMatch) {
                const data = JSON.parse(jsonMatch[0]);
                if (data.toewijzingen && Array.isArray(data.toewijzingen)) {
                    showAllocationSuggestion(data);
                } else {
                    toast('Kon AI antwoord niet verwerken', 'error');
                }
            } else {
                toast('Kon AI antwoord niet verwerken', 'error');
            }
        }
    } catch (e) {
        toast('AI fout: ' + e.message, 'error');
    }
    if (btn) { btn.disabled = false; btn.innerHTML = icon('star', 16) + ' AI Indeling'; }
}

function showAllocationSuggestion(data) {
    let html = '<h2>AI Indelingsvoorstel</h2>';
    if (data.toelichting) {
        html += `<p style="font-size:0.9em;color:#666;margin-bottom:12px;">${data.toelichting}</p>`;
    }

    // Check for FTE overruns per employee
    const empTotals = {};
    data.toewijzingen.forEach(t => {
        const emp = state.employees.find(e => e.name === t.medewerker);
        if (emp) {
            empTotals[emp.name] = (empTotals[emp.name] || 0) + (parseFloat(t.fte) || 0);
        }
    });
    const overruns = [];
    Object.entries(empTotals).forEach(([name, total]) => {
        const emp = state.employees.find(e => e.name === name);
        if (emp && total > emp.fte + 0.001) {
            overruns.push(`${name}: ${total.toFixed(1)} van ${emp.fte} FTE`);
        }
    });

    // Check for role mismatches (e.g. designer assigned as developer)
    const roleMismatches = [];
    data.toewijzingen.forEach(t => {
        const emp = state.employees.find(e => e.name === t.medewerker);
        if (emp && t.alsRol && t.alsRol.toLowerCase() !== (emp.role || '').toLowerCase()) {
            roleMismatches.push(`${emp.name} (${roleLabel(emp.role)}) als ${t.alsRol}`);
        }
    });

    if (overruns.length > 0) {
        html += `<div style="background:#fff3cd;border:1px solid #ffc107;border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:0.85em;">
            ${icon('warning', 16)} <strong>FTE overschrijding:</strong> Bij toepassen wordt FTE afgekapt op beschikbaar maximum.
            <div style="margin-top:4px;color:#856404;">${overruns.join('<br>')}</div>
        </div>`;
    }
    if (roleMismatches.length > 0) {
        html += `<div style="background:#fce4ec;border:1px solid #e91e63;border-radius:8px;padding:10px 12px;margin-bottom:12px;font-size:0.85em;">
            ${icon('warning', 16)} <strong>Rol mismatch:</strong> Deze medewerkers zijn op een andere rol ingezet dan hun eigen functie:
            <div style="margin-top:4px;color:#880e4f;">${roleMismatches.join('<br>')}</div>
        </div>`;
    }

    html += '<div style="max-height:50vh;overflow-y:auto;">';
    data.toewijzingen.forEach(t => {
        const emp = state.employees.find(e => e.name === t.medewerker);
        const isOver = emp && empTotals[t.medewerker] > emp.fte + 0.001;
        const isMismatch = emp && t.alsRol && t.alsRol.toLowerCase() !== (emp.role || '').toLowerCase();
        html += `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid #eee;${isMismatch ? 'background:#fce4ec;margin:0 -8px;padding-left:8px;padding-right:8px;border-radius:6px;' : ''}">
            <div>
                <strong>${t.medewerker}</strong> → ${t.afdeling}
                ${t.alsRol ? `<span style="font-size:0.8em;color:${isMismatch ? '#e91e63' : 'var(--accent2)'};margin-left:6px;">${isMismatch ? '⚠ ' : ''}${t.alsRol}</span>` : ''}
            </div>
            <span style="font-weight:700;color:${isOver ? '#e74c3c' : 'var(--accent3)'};">${t.fte} FTE${isOver ? ' ⚠' : ''}</span>
        </div>`;
    });
    html += '</div>';
    html += `<div class="btn-row" style="margin-top:16px;">
        <button class="btn btn-outline" onclick="closeSheet()">Annuleren</button>
        <button class="btn btn-success" onclick="applyAllocationSuggestion()">Toepassen</button>
    </div>`;

    window._aiAllocationData = data;
    openSheet(html);
}

function applyAllocationSuggestion() {
    const data = window._aiAllocationData;
    if (!data || !data.toewijzingen) return;

    // Build new allocations with FTE cap validation
    const newAllocs = [];
    const empFteUsed = {}; // track total FTE assigned per employee

    data.toewijzingen.forEach(t => {
        const emp = state.employees.find(e => e.name === t.medewerker);
        const dept = state.departments.find(d => d.name === t.afdeling);
        if (!emp || !dept) return;

        const used = empFteUsed[emp.id] || 0;
        let fte = parseFloat(t.fte) || emp.fte;
        const remaining = Math.round((emp.fte - used) * 100) / 100;

        if (remaining <= 0) return; // no FTE left for this employee
        if (fte > remaining) fte = remaining; // cap to remaining FTE

        newAllocs.push({
            empId: emp.id,
            deptId: dept.id,
            fte: Math.round(fte * 100) / 100,
            asRole: t.alsRol || ''
        });
        empFteUsed[emp.id] = used + fte;
    });

    state.allocations = newAllocs;
    saveState();
    renderAll();
    closeSheet();
    toast('AI indeling toegepast!', 'success');
    delete window._aiAllocationData;
}

// ===== INIT =====
// Inject SVG icons into static HTML elements
function initIcons() {
    const map = {
        'welcome-logo': ['building', 64],
        'wf-icon-person': ['person', 28],
        'wf-icon-house': ['house', 28],
        'wf-icon-orgchart': ['orgchart', 28],
        'wf-icon-money': ['money', 28],
        'pill-icon-star': ['star', 14],
        'pill-icon-chart': ['chart', 14],
        'pill-icon-warn': ['warning', 14],
        'pill-icon-refresh': ['refresh', 14],
        'nav-icon-target': ['target', 24],
        'nav-icon-person': ['person', 24],
        'nav-icon-house': ['house', 24],
        'nav-icon-orgchart': ['orgchart', 24],
        'nav-icon-gear': ['gear', 24],
        'help-icon-person': ['person', 20],
        'help-icon-house': ['house', 20],
        'help-icon-orgchart': ['orgchart', 20],
        'help-icon-star': ['star', 20],
        'help-icon-money': ['money', 20],
        'help-icon-save': ['save', 20],
        'org-drag-lock-icon': ['drag', 16],
        'org-reset-icon': ['trash', 16],
    };
    for (const [id, [name, size]] of Object.entries(map)) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = icon(name, size);
    }
}
initIcons();
loadState();
loadCompanyProfile();
loadAIKey();
renderAll();
updateCostOverview();

if (shouldShowWelcome()) {
    showWelcome();
} else {
    document.getElementById('welcome-overlay').classList.add('hidden');
    if (state.employees.length === 0 && state.departments.length === 0) {
        loadDemo();
    }
}
