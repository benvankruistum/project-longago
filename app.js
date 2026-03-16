// ===== STATE =====
let state = {
    employees: [],
    departments: [],
    allocations: [],    // { empId, deptId, fte, asRole }
    deptOrder: [],      // ordered dept ids for canvas
    company: { name: '', sbiCode: '', sbiLabel: '', type: '' },
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
    renderView();
    if (view === 'settings') {
        loadCompanyProfile();
        updateCostOverview();
    }
}

function fabAction() {
    if (currentView === 'canvas') {
        openSheet(`
            <h2>Wat wil je toevoegen?</h2>
            <div class="pick-item" onclick="closeSheet(); setTimeout(() => openEmployeeSheet(), 350);">
                <div style="font-size:1.6em;">&#x1F464;</div>
                <div class="pick-item-info">
                    <div class="pick-item-name">Medewerker</div>
                    <div class="pick-item-meta">Nieuw poppetje aanmaken</div>
                </div>
            </div>
            <div class="pick-item" onclick="closeSheet(); setTimeout(() => openDeptSheet(), 350);">
                <div style="font-size:1.6em;">&#x1F3E0;</div>
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
    updateScores();
}

function renderAll() {
    renderView();
    updateScores();
    if (currentView === 'settings') updateCostOverview();
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
            <div class="empty-icon">&#x1F3AF;</div>
            <p>Nog geen afdelingen!<br/>Ga naar <b>Afdelingen</b> om er een aan te maken,<br/>of tik op <b>+</b></p>
        </div>`;
        return;
    }

    let html = '';
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
                ? `<span class="p-role mismatch">\u26a0\ufe0f ${roleLabel(assignedRole)}</span>`
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
                <div class="drag-handle" data-drag="true">&#x2630;</div>
                <div style="flex:1" onclick="openDeptSheet(${dept.id})">
                    <div class="canvas-dept-title">${dept.name}</div>
                    <div class="card-sub">${filled.toFixed(1)} / ${dept.fteNeeded.toFixed(1)} FTE &nbsp; <span class="badge badge-${dept.priority}">${priorityLabel(dept.priority)}</span></div>
                </div>
                <span style="color:#ccc;font-size:1.2em;" onclick="openDeptSheet(${dept.id})">&#x270F;</span>
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
            <div class="empty-icon">&#x1F9D1;&#x200D;&#x1F4BC;</div>
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
            <div class="empty-icon">&#x1F3E2;</div>
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

// ===== BOTTOM SHEETS =====
function openSheet(html) {
    document.getElementById('sheet-content').innerHTML = html;
    document.getElementById('sheet-overlay').classList.add('show');
    setTimeout(() => document.getElementById('sheet').classList.add('show'), 10);
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
        <h2>${emp ? '&#x270F; ' + emp.name : '&#x1F464; Nieuwe Medewerker'}</h2>
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
    if (!confirm(`"${emp.name}" verwijderen?`)) return;
    state.employees = state.employees.filter(e => e.id !== empId);
    state.allocations = state.allocations.filter(a => a.empId !== empId);
    closeSheet();
    saveState();
    renderAll();
    toast('Verwijderd', 'success');
}

// -- Department Sheet --
function openDeptSheet(deptId) {
    const dept = deptId ? state.departments.find(d => d.id === deptId) : null;
    const selColor = dept ? dept.color : randomColor(COLORS_DEPT);
    const deleteBtn = dept ? `<button class="btn btn-danger" style="margin-top:12px;" onclick="deleteDepartment(${dept.id})">Verwijderen</button>` : '';

    openSheet(`
        <h2>${dept ? '&#x270F; ' + dept.name : '&#x1F3E0; Nieuwe Afdeling'}</h2>
        <div class="form-group">
            <label>Naam</label>
            <input type="text" id="f-dept-name" value="${dept ? dept.name : ''}" placeholder="Engineering">
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

function saveDepartment(deptId) {
    const name = document.getElementById('f-dept-name').value.trim();
    const fteNeeded = parseFloat(document.getElementById('f-dept-fte').value);
    const priority = document.getElementById('f-dept-prio').value;
    const minFte = parseFloat(document.getElementById('f-dept-min').value);
    const maxFte = parseFloat(document.getElementById('f-dept-max').value);
    const roles = document.getElementById('f-dept-roles').value.split(',').map(r => r.trim().toLowerCase()).filter(r => r);
    const color = document.getElementById('f-dept-color').value;

    if (!name) { toast('Vul een naam in!', 'error'); return; }
    if (isNaN(fteNeeded) || fteNeeded < 0.1) { toast('FTE moet minimaal 0.1 zijn!', 'error'); return; }

    if (deptId) {
        const dept = state.departments.find(d => d.id === deptId);
        Object.assign(dept, { name, fteNeeded, priority, minFte, maxFte, roles, color });
    } else {
        state.departments.push({ id: state.nextDeptId++, name, fteNeeded, priority, minFte, maxFte, roles, color });
    }

    closeSheet();
    saveState();
    renderAll();
    toast(deptId ? 'Afdeling bijgewerkt' : 'Afdeling toegevoegd!', 'success');
}

function deleteDepartment(deptId) {
    const dept = state.departments.find(d => d.id === deptId);
    if (!confirm(`"${dept.name}" verwijderen?`)) return;
    state.departments = state.departments.filter(d => d.id !== deptId);
    state.allocations = state.allocations.filter(a => a.deptId !== deptId);
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

    let html = `<h2>&#x1F464; Kies medewerker voor ${dept.name}</h2>`;

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
                    \u26a0\ufe0f Afwijkende rol: strafpunten op score
                </div>
            </div>`;
    }

    openSheet(`
        <h2 style="text-align:center;">${emp.name}</h2>
        <p style="text-align:center;color:#999;margin-bottom:8px;">${roleLabel(emp.role)} &#x2192; ${dept.name}</p>
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
            ${existingAlloc ? `<button class="btn btn-danger" style="flex:0.6" onclick="removeAlloc(${empId},${deptId})">&#x1F5D1;</button>` : ''}
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
    if (!confirm('Alle data wissen? Dit kan niet ongedaan worden!')) return;
    state = { employees: [], departments: [], allocations: [], deptOrder: [], company: { name:'', sbiCode:'', sbiLabel:'', type:'' }, nextEmpId: 1, nextDeptId: 1 };
    saveState();
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
        { id: 1, name: 'Engineering', fteNeeded: 3, priority: 'high', minFte: 2, maxFte: 5, roles: ['developer','designer'], color: '#3498db' },
        { id: 2, name: 'Sales & Marketing', fteNeeded: 2, priority: 'medium', minFte: 1, maxFte: 3, roles: ['sales','marketing'], color: '#e74c3c' },
        { id: 3, name: 'Klantenservice', fteNeeded: 1.5, priority: 'medium', minFte: 1, maxFte: 2, roles: ['support'], color: '#2ecc71' },
        { id: 4, name: 'Management', fteNeeded: 1, priority: 'high', minFte: 1, maxFte: 2, roles: ['manager'], color: '#f39c12' },
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
    updateTopbarTitle();
    saveState();
}

function loadCompanyProfile() {
    if (!state.company) state.company = { name:'', sbiCode:'', sbiLabel:'', type:'' };
    document.getElementById('company-name').value = state.company.name || '';
    document.getElementById('company-type').value = state.company.type || '';
    if (state.company.sbiCode) {
        document.getElementById('sbi-selected').innerHTML =
            `<strong>${state.company.sbiCode}</strong> \u2014 ${state.company.sbiLabel} \u2705`;
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

// ===== INIT =====
loadState();
loadCompanyProfile();
renderAll();
updateCostOverview();

if (state.employees.length === 0 && state.departments.length === 0) {
    loadDemo();
}
